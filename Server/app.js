const express = require('express');
const RSS = require('rss');
const mongoose =require('mongoose')
const app = express();

// Route to generate the RSS feed
app.use(express.static('/public'));
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
    title: String,
    content: String,
  });
  
  // Define the Article model
  const Article = mongoose.model('Article', articleSchema);
  
  // Set up an API endpoint to save an article
  app.post('/articles', (req, res) => {
    const { title, content } = req.body;
  
    // Create a new article instance
    const article = new Article({
      title,
      content,
    });
  
    // Save the article to MongoDB
    article.save((err, savedArticle) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save the article' });
      } else {
        res.status(200).json(savedArticle);
      }
    });
  });
  












// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
