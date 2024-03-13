
import React from 'react'

function Connect() {
  return (
    <div>
          <section className="py-20 h-full flex items-center justify-center" id = 'connect'>
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

export default Connect