import React from 'react';

const BlogPost = ({ title, date, author, content, image, url }) => {
  const handleClick = () => {
    // Navigate to new page when the button or post box is clicked
    window.location.href = '/{new-page-url}';
  };

  return (
    <div className="group relative overflow-hidden h-96">
      <div className="h-3/10 overflow-hidden">
        <img src={image} alt="Post Image" className="object-cover w-full h-full" />
      </div>
      <div className="p-4 h-6/10">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-2">{date} - {author}</p>
        <p className="text-base mb-4">{content}</p>
        <button onClick={handleClick} className="text-blue-500 hover:underline">
          Read the Post &rarr;
        </button>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Adaptive Security System",
      date: "March 10, 2024",
      author: "Sandesh Bhattarai, Sajim A..",
      content: "The advancements in the field of web design have also led to an increase in cyber-attacks posing a great threat..",
      image: 'https://www.fullestop.com/blog/image.php?webp=1&image=/wp-content/uploads/2017/08/security-architecture-banner.jpg&width=1024px&height=512px&zc=1'
    },
    {
      id: 2,
      title: "Stock Price Prediction: Chebyshev's Theorem",
      date: "March 11, 2024",
      author: "Sandesh Bhattarai",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "image2.jpg"
    },
    {
      id: 3,
      title: "Post Title 3",
      date: "March 12, 2024",
      author: "Author 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "image3.jpg"
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          date={post.date}
          author={post.author}
          content={post.content}
          image={post.image}
        />
      ))}
    </section>
  );
};

export default BlogPosts;
