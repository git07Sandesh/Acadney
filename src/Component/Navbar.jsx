import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='absolute bg-transparent flex justify-center w-full top-0 z-20'>
            <div className="flex justify-between items-center m-4 p-6 text-[#c55f5f]">
                <ul className='flex gap-8'>
                    <li>
                        <Link to='/' className="text-black font-bold hover:text-blue-800  hover:underline hover:underline-offset-8">Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-black font-bold hover:text-blue-800  hover:underline  hover:underline-offset-8">About</Link>
                    </li>
                    <li>
                        <Link to='/' className="text-black font-extrabold hover:text-blue-800  hover:underline  hover:underline-offset-8">Acadney</Link>
                    </li>
                    <li>
                        <Link to='/blog' className="text-black font-bold hover:text-blue-800  hover:underline  hover:underline-offset-8">Blog</Link>
                    </li>
                    <li>
                        <Link to='/connect' className="text-black font-bold hover:text-blue-800  hover:underline  hover:underline-offset-8">Connect</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
