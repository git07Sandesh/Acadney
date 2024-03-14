import React from 'react'
import { useState } from 'react';
import Modal from './Modal'
import Form  from "./Form"

function Info() {
    const [showFormModal, setShowFormModal] = useState(false);
    const handleWriteNowClick = () => {
        setShowFormModal(true);
    };


  return (
    <div>
        <div className="flex flex-col w-full bg-[#effffd]" id = 'home'>
        <header className="relative flex items-center justify-center h-[60vh] bg-content bg-center bg-[url('./Images/Books.jpeg')]">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="text-center z-10">
            <h1 className="text-4xl font-serif text-white">Acadney</h1>
            <p className="mt-4 text-lg text-white">Sharing Academic Knowledge</p>
            <button onClick={handleWriteNowClick} className="bg-yellow-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-yellow-600">Write Now</button>
          </div>
        </header>
        

        <main className="flex flex-col justify-center items-center px-4 py-16">
          <h2 className="text-3xl font-serif text-blue-800">Turn Your Research into Knowledge</h2>
          <p className="mt-4 text-lg text-gray-700">Don't let your hard work go to waste. Share your academic papers and help others in your field.</p>
          <button onClick={handleWriteNowClick} className="bg-yellow-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-yellow-600">Upload Your Work</button>
        </main>

      </div>
      <div className='relative flex flex-row w-full h-[40vh] z-11' id ='about'>
        <div className='flex flex-col align-top items-center w-full h-full pt-12 bg-gray-300 gap-1'>
          <div className='text-black font-extrabold tracking-widest font-serif'>
            About Us
          </div>
          <hr className="w-[6rem] border-zinc-950" />
          <div className='text-[#333333] font-bold tracking-wide font-serif pt-4'>
            We've all been there: countless hours poured into research papers, brilliant ideas waiting to be shared, but the daunting task of publication holding you back. At Acadney, we believe your academic efforts deserve a wider audience. <br /> We're a platform designed by students, for students, where you can easily upload your completed assignments and transform them into valuable blog posts. Imagine – your research saving countless hours for fellow students, while simultaneously building your academic profile. Let's bridge the gap between dedicated research and knowledge sharing.
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <section className="flex justify-center py-8 -mt-14 z-20" id = 'blog'>
        <form>
          <input
            type="text"
            placeholder="Find the blog"
            className="border-2 border-white rounded-3xl px-4 py-2"
          />
          </form>
      </section>
      {showFormModal ? (
        <Modal trigger={true} setTrigger={setShowFormModal}>
            <Form className = ''/>
        </Modal>
      ) : ''}
    </div>
  )
}

export default Info