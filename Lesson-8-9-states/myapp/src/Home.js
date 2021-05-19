import {useState} from 'react'

const Home = () => {

    const  [name, setName] = useState('Mitchell')
    const handleClick =()=> {
            name === 'Mitchell' ? setName('rain') : setName('Mitchell') 
    }

   
    return ( 
        <div className="home">
                <h2> Home page </h2>
                <p>{name}</p>
                <button onClick={handleClick}> Click me </button>
                
        </div>

     );
}
 
export default Home;