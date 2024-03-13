
import Header from '../Component/Navbar'
import BlogPosts from '../Component/BlogPosts'
import Info from '../Component/Info'
import Connect from '../Component/Connect'
export default function HomePage() {
  
  return (
   
    <div className='flex flex-col w-full bg-[#effffd]'>
      <div className="sticky top-0 z-50">
        <Header /> 
      </div>
        <Info />
        {/* Blog Posts */}
       < BlogPosts />

       <Connect />


      </div>

  )
}
