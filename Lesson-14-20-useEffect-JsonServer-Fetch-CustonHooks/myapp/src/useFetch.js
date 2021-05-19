import {useState, useEffect} from 'react'

const useFetch = (link) => {

    
    const [data, setData]=  useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        setTimeout(()=>{
            fetch(link).then(res =>{
                console.log(res);
                if (!res.ok){
                        throw Error('couldnt fetch data')
                }
                return res.json()
            }).then((data)=>{
                setData(data)
                setIsPending(false)
                setError(null)
            }).catch((e)=>{
                setError(e.message)
                setIsPending(false)
            })
        }, 1000)
    }, [link]);

        return {data,isPending,error}
}

export default useFetch;