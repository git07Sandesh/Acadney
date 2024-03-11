import React from 'react'
import Navbar from '../Component/Navbar'
import BlogPosts from '../Component/BlogPost'
export default function HomePage() {
  return (
   
    <div className='flex flex-col w-full bg-[#effffd]'>
      <div className="sticky top-0 z-50">
        <Navbar /> 
      </div>

      <div className='flex flex-row w-full h-[65vh]' >
      {/* Hero Section */}
      <section className="flex flex-col justify-center space-y-5 align-middle w-full h-full bg-no-repeat bg-center bg-[url('./Images/Gemini_Generated_Image.jpeg')] bg-cover">
        <div className="absolute inset-0 opacity-70" /> 
         <div className="w-full items-center">
          <h1 className="text-4xl font-serif text-blue-800">An Academic Blogspot</h1>
          <p className="mt-4 text-lg">Exploring the world through words.</p>
          <button className='bg-yellow-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-yellow-600'>
            Write Now
          </button>
        </div>
      </section>
      </div>
      {/* Search Bar */}
       <section className="flex justify-center py-8 -mt-14">
        <form>
          <input
            type="text"
            placeholder="Find the blog"
            className="border-2 border-white rounded-3xl px-4 py-2"
          />
          </form>
        </section>

        {/* Blog Posts */}
       < BlogPosts />
       
       

        <div className='relative flex flex-row w-full h-[40vh]'>
          <div className='flex flex-col align-top items-center w-full h-full pt-12 bg-gray-300 gap-1'>
            <div className='text-black font-extrabold tracking-widest font-serif'>
              About Us
            </div>
            <hr className="w-[6rem] border-zinc-950" />
            <div className='text-[#333333] font-bold tracking-wide font-serif pt-4'>
            We've all been there: countless hours poured into research papers, brilliant ideas waiting to be shared, but the daunting task of publication holding you back. At [Your Website Name], we believe your academic efforts deserve a wider audience. We're a platform designed by students, for students, where you can easily upload your completed assignments and transform them into valuable blog posts. Imagine – your research saving countless hours for fellow students, while simultaneously building your academic profile. Let's bridge the gap between dedicated research and knowledge sharing.
            </div>
            <div className='text-[#333333] font-bold tracking-wide font-serif pt-4'>
            Join our community and turn your academic work into a springboard for others' success!
            </div>
          </div>
        </div>

        <section className="py-20 h-full flex items-center justify-center">
          <div className="w-4/5 h-[20vh] bg-stone-200">
          <div className='flex flex-col align-top items-center w-full h-full pt-12 gap-2' >
                  <div className= 'flex text-black font-extrabold tracking-widest font-serif'>
                  Start Writing
                  </div>
                  <hr className="w-[8rem] border-zinc-950" />  
                  <div className= 'flex text-[#333333] font-bold tracking-wide font-serif pt-4'>
                    Transfer your academic knowledge to practical application.
                  </div>  
                </div>
  
          </div>
          <div className="w-1/5 flex justify-center">
              <div className='flex flex-col'>
                <ul>
                  <li className='text-xl font-serif text-blue-800'>Categories</li>
                  <li className="flex items-center"><span className="text-green-500 mb-[1px] mr-2 text-3xl">•</span>Technology</li>
                  <li className="flex items-center"><span className="text-blue-500 mb-[1px] mr-2 text-3xl">•</span>Medical</li>
                  <li className="flex items-center"><span className="text-red-500 mb-[1px] mr-2 text-3xl">•</span>Software</li>
                  <li className="flex items-center"><span className="text-yellow-500 mb-[1px] mr-2 text-3xl">•</span>Development</li>
                  <li className="flex items-center"><span className="text-purple-500 mb-[1px] mr-2 text-3xl">•</span>AI</li>
              </ul>

              </div>
          </div>
        </section>
        
         {/* Additional Sections */}
         <section className="py-20 flex items-center justify-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-serif text-blue-800">Subscribe</h1>
            <p className="mt-4 text-lg">Never Miss an update from us</p>
            
          </div>
          <div className="w-1/2 flex justify-center">
            <form>
              <div className='flex flex-col'>
                <label className='mt-4 text-lg' for = "Email">Email Address</label>
                <input type = 'email' placeholder='Enter your email' required maxLength={255}></input>
                <button className='bg-yellow-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-yellow-600'>
                  Subscribe
                </button>
              </div>
            </form>
          
          </div>
        </section>

        <footer className="mt-8">
          <div className="p-4 mt-4 bg-gray-200">
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </footer>


      </div>

  )
}
