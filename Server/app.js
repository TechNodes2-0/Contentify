const express = require('express');
const RSS = require('rss');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const superagent = require('superagent');
const axios =require('axios');
require('dotenv').config();
// Route to generate the RSS feed
app.use(express.static('/public'));
app.use(cors());
app.get('/rss', (req, res) => {
    // Retrieve your data from the database or other data source
    const posts = [
        {
            title: 'Post 1',
            description: 'This is the first post',
            date: new Date(),
            author: 'John Doe',

        },
        {
            title: 'Post 2',
            description: 'This is the second post',
            date: new Date(),
            author: 'Janet Smith',

        },
        {
            title: 'Post 3',
            description: 'This is third post',
            date: new Date(),
            author: 'Jane Smikmdkmth',

        }
        // Add more posts as needed
    ];

    // Create a new RSS feed
    const feed = new RSS({
        title: 'My Website RSS Feed',
        description: 'Latest posts from My Website',
        feed_url: 'https://writesonic-contentautomation.onrender.com/rss',
        site_url: 'https://writesonic-contentautomation.onrender.com/'
    });

    // Add posts to the RSS feed
    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            date: post.date,
            author: post.author,
            url: post.link
        });
    });

    // Generate the RSS feed XML
    const rssXml = feed.xml({ indent: true });

    // Set the content type header to indicate the response is an RSS feed
    res.set('Content-Type', 'applicatirson/rss+xml');

    // Send the generated RSS feed XML as the response
    res.send(rssXml);
});
mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
const articleSchema = new mongoose.Schema({
    userId: { type: String, unique: true },
    title: String,
    content: String,
});

// Define the Article model
const Article = mongoose.model('Article', articleSchema);

// Set up an API endpoint to save an article
app.post('/articles', async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        console.log(userId);
        // Create a new article instance
        const article = new Article({
            userId,
            title,
            content,
        });

        // Save the article to MongoDB
        const savedArticle = await article.save();
        res.status(200).json(savedArticle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save the article' });
    }
});


const socialMediaPostSchema = new mongoose.Schema({
    userId: { type: String },
    content: String,
    image: String,
    Typo: String,
});

// Define the SocialMediaPost model
const SocialMediaPost = mongoose.model('SocialMediaPost', socialMediaPostSchema);

// Set up an API endpoint to save a social media post
app.post('/social-media-posts', async (req, res) => {
    try {
        const { userId, content, image, Typo } = req.body;
        console.log(userId);

        // Create a new social media post instance
        const socialMediaPost = new SocialMediaPost({
            userId,
            content,
            image,
            Typo
        });

        // Save the social media post to MongoDB
        const savedPost = await socialMediaPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save the social media post' });
    }
});

const ContentSchema = new mongoose.Schema({
    userId: { type: String },
    type: { type: String, enum: ['article', 'instagram', 'twitter', 'linkedin', 'ads'] },
    title: { type: String, required: function() { return this.type === 'article'; } },
    content: { type: String, required: true },
    image: { type: String, required: function() { return this.type === 'instagram' || this.type === 'twitter'; } },
    adsTitle: { type: String, required: function() { return this.type === 'ads'; } },
    adsDescription: { type: String, required: function() { return this.type === 'ads'; } },
  });
  
  // Define the SocialMediaPost model
  
  
  const Content = mongoose.model('Content', ContentSchema);
app.post('/Content', async (req, res) => {
    try {
        const { userId, type, title, content, image, adsTitle, adsDescription } = req.body;
        console.log(userId);

        // Create a new social media post instance
        const Contentpost = new Content({
            userId,
            type,
            title,
            content,
            image,
            adsTitle,
            adsDescription
        });

        // Save the social media post to MongoDB
        const savedPost = await Contentpost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save the Contet' });
    }
});


// Assuming you have the necessary dependencies and configurations

// Define the route handler
app.get("/content", (req, res) => {
    const userId = req.query.userId;
  
    // Fetch content from the database based on userId
    // Example using Mongoose:
    Content.find({ userId })
      .then((content) => {
        console.log(content);
        const transformedContent = content.map((item) => {
          const transformedItem = { ...item };
          if (item.type === "ads") {
            transformedItem.type = "ads";
            transformedItem.adsTitle = item.adsTitle;
            transformedItem.adsDescription = item.adsDescription;
          } else if (item.type === "linkedin") {
            transformedItem.type = "linkedin";
            transformedItem.content = item.content;
          } else if (item.type === "article") {
            transformedItem.type = "article";
            transformedItem.title = item.title;
            transformedItem.content = item.content;
          } else if (item.type === "twitter" || item.type === "instagram") {
            transformedItem.type = item.type;
            transformedItem.content = item.content;
            transformedItem.image = item.image;
          }
          return transformedItem;
        });
        console.log(transformedContent);
        res.json(transformedContent);
      })
      .catch((error) => {
        console.log("Error fetching content:", error);
        res.status(500).json({ error: "Error fetching content" });
      });
  });
  
  

  const AXIOS_OPTIONS = {
    baseURL: 'https://artsandculture.google.com',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
    },
    params: {
      hl: 'en',
    },
  };
  
  function getResultsFromCategory(categoryContent) {
    const artistsPattern = /cobject","(?<artist>[^"]+)","(?<works>[^ ]+) \w+","(?<thumbnail>[^"]+)","(?<link>[^"]+)/gm;
  
    return [...categoryContent.matchAll(artistsPattern)].map(({ groups }) => ({
      artist: groups.artist,
      works: groups.works,
      thumbnail: `https:${groups.thumbnail}`,
      link: `${AXIOS_OPTIONS.baseURL}${JSON.parse(`"${groups.link}"`)}`,
    }));
  }
  
  async function getArtistsInfo() {
    try {
      const { data } = await axios.get('/category/artist', AXIOS_OPTIONS);
      const results = {};
  
      const popularCategoryPattern = /"PopularAssets:(?<content>.+?)\["stella\.pr/gm;
      [...data.matchAll(popularCategoryPattern)].forEach(({ groups }) => (results.popular = getResultsFromCategory(groups.content)));
  
      const azCategoryPattern = /"(?<letter>[^"])",\["stella\.pr","(?<content>.+?)[\w"||\d]\]{2,3},\[/gm;
      [...data.matchAll(azCategoryPattern)].forEach(({ groups }) => (results[groups.letter] = getResultsFromCategory(groups.content)));
  
      const timeCategoryPattern = /\[{1,2}"(?<time>[^"]{3,8})","?\w{4,7}.+?\["stella\.pr","DatedAssets(?<content>.+?)"?\d{3,5}"\]/gm;
      [...data.matchAll(timeCategoryPattern)].forEach(({ groups }) => (results[groups.time] = getResultsFromCategory(groups.content)));
  
      return results;
    } catch (error) {
      console.log('Error fetching artists info:', error);
      throw error;
    }
  }
  
  app.get('/arts', async (req, res) => {
    try {
      const artistsInfo = await getArtistsInfo();
      res.json(artistsInfo);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching artists info' });
    }
  });




app.post('/art', (req, res) => {
    superagent
      .post('https://api.artsy.net/api/tokens/xapp_token')
      .send({ client_id: `${process.env.CLIENT_ID}` ,client_secret: `${process.env.CLIENT_SECRET}`})
      .end((err, response) => {
        if (err) {
          console.error('Error authenticating:', err);
          res.status(500).json({ error: 'Failed to authenticate' });
        } else {
          xappToken = response.body.token;
          res.status(200).json({ token: xappToken });
        }
      });
  });
  
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
