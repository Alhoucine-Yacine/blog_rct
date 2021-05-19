import BlogList from './BlogList'
import {useState} from 'react'

const Home = () => {

    const [blogs, setBlogs]=  useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete= (id) =>{
            const tempBlogs = blogs.filter((blog) => 
                blog.id !== id
            );
            setBlogs(tempBlogs);

    }

   
    return ( 
        <div className="home">
               <BlogList blogs={blogs} handleDelete={handleDelete} />
               
               <BlogList blogs = {blogs.filter((blog)=>
                    blog.author === 'mario')

               } handleDelete={handleDelete} />
        </div>

     );
}
 
export default Home;