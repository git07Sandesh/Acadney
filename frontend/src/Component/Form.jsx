
import { useState } from 'react'


const Form = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    //const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("introduction",introduction);
        formData.append("file",file);

        
       
        const response = await fetch('/api/blogspots', {
            method: 'POST', 
            body: formData,  
            
        })
    

        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok){
            setTitle('')
            setAuthor('')
            setIntroduction('')
            setFile(null);
            setError(null)
            console.log('Form submitted:', { title, author, introduction /*, image*/ });
        }
        // Process form data (e.g., send to server)
       
      };
    
     //const handleFileChange = (event) => {
       // setFile(event.target.files[0]);
      //};
    
     // const handleImageChange = (event) => {
       // setImage(event.target.files[0]);
     // };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-2 pt-8 pb-8">
        <h3 className="text-2xl mb-4">Add Your Blog</h3>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author:</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="introduction">Introduction:</label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="introduction"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                placeholder="Enter introduction"
            ></textarea>
        </div>
        <div className="mb-4">
                <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Add Your File (DOC/PDF):</label>
                <input
                    type="file"
                    id="file"
                    accept=".doc,.docx,.pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
        <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Submit
            </button>
        </div>
    </form>

    );
  };

    export default Form;
