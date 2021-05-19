import {useState, useEffect} from 'react'

const useFetch = (link) => {
    const abortCont = new AbortController();
    
    const [data, setData]=  useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        setTimeout(()=>{
            fetch(link, {signal :abortCont.signal}).then(res =>{
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
                if (e.name === 'AbortError'){
                    console.log('fetch aborted !')
                }
                else {
                setError(e.message)
                setIsPending(false)
            }
            })
        },0);


        return () => abortCont.abort();
    }, [link]);

        return {data,isPending,error}
}

export default useFetch;