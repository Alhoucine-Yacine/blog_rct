const Home = () => {

    const handleClick =()=> {
            console.log('button clicked !')

    }

    const handleClickAgain =(name) =>{
       console.log('hello ' + name); 
    }

    return ( 
        <div className="home">
                <h2>
                        Home page
                </h2>
                <button onClick={handleClick}>
                    Click me
                </button>
                <button onClick={() => handleClickAgain('yacine')}>
                    Click me again
                </button>
        </div>

     );
}
 
export default Home;