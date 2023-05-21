const express = require('express');
const RSS = require('rss');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



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
mongoose.connect('mongodb+srv://Jazzy49:MyNodeApp@nodeprojects.tsxlcqi.mongodb.net/Articles?retryWrites=true&w=majority', {
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












// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
