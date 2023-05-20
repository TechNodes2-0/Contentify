const express = require('express');
const RSS = require('rss');

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

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
