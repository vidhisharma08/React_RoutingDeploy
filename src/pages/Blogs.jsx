import React from 'react';
import './Blogs.css'; // Importing the CSS for styling

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Television Technology',
      author: 'John Doe',
      date: 'December 10, 2024',
      imageUrl: 'https://via.placeholder.com/600x400',
      excerpt:
        'Discover how AI and 8K resolution are revolutionizing the way we experience television.',
    },
    {
      id: 2,
      title: 'Top 10 Smart TVs of 2024',
      author: 'Jane Smith',
      date: 'November 20, 2024',
      imageUrl: 'https://via.placeholder.com/600x400',
      excerpt:
        'A comprehensive guide to the best smart TVs on the market today.',
    },
    {
      id: 3,
      title: 'How to Choose the Right TV for Your Home',
      author: 'Michael Lee',
      date: 'October 15, 2024',
      imageUrl: 'https://via.placeholder.com/600x400',
      excerpt:
        'Factors to consider when selecting a TV that suits your needs and budget.',
    },
    {
      id: 4,
      title: 'OLED vs QLED: Which is Better?',
      author: 'Sarah Connor',
      date: 'September 5, 2024',
      imageUrl: 'https://via.placeholder.com/600x400',
      excerpt:
        'An in-depth comparison of the two leading TV display technologies.',
    },
  ];

  return (
    <div className="blogs-container">
      <h2>Latest Blogs</h2>
      <div className="blog-items">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <p className="blog-meta">
                By {blog.author} | {blog.date}
              </p>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
