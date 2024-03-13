import React from 'react';
import {useEffect, useState} from 'react'

const BlogPost = ({ title, date, author, content, image, url }) => {
  const handleClick = () => {
    // Navigate to new page when the button or post box is clicked
    window.location.href = url;
  };

  return (
    <div className="group relative overflow-hidden h-96">
      <div className="h-36 overflow-hidden">
        <img src={image} alt="Post Image" className="object-fill w-full h-full" />
      </div>
      <div className="p-4 h-60">
        <h2 className="text-xl font-bold text-blue-500  mb-2">{title}</h2>
        <p className="text-sm mb-2">{date} - {author}</p>
        <p className="relative text-base mb-4 h-[100px] overflow-hidden">{content}</p>
        <button onClick={handleClick} className="text-blue-500 hover:underline">
          Read the Post &rarr;
        </button>
      </div>
    </div>
  );
};

const BlogPosts = () => {

  const [blogposts, setBlogposts] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
        const response = await fetch('/api/blogspots')
        const json = await response.json()

        if (response.ok){
            setBlogposts(json)
        }
    }
    fetchBlogs()
  }, [])
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogposts && blogposts.map((blogpost) => (
         <BlogPost
         key={blogpost._id}
         title={blogpost.title}
         date={blogpost.publicationDate}
         author={blogpost.author}
         content={blogpost.introduction}
         image={blogpost.image}
         url={blogpost.url}
       />
      ))}
    </section>
  );
};

export default BlogPosts;
