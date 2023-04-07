import {useState} from 'react' 
import { useDispatch } from "react-redux";
import { changesearchterm } from './store';
function Search(){
    const [val,setval] = useState("Search")
    const dispatch = useDispatch()
    const handlechange = (event)=>{
        setval(event.target.value)

    }
    const handleclick = ()=>{
        dispatch(changesearchterm(val))
    }

    return (
        <div className='w-2/3 flex flex-row m-auto'>
        <input type="text" onChange={handlechange} name="" value={val} className='pl-2 h-12 m-auto basis-5/6 border-2 border-red-500 rounded-3xl' />
        <div className='basis-1/6 border-emerald-400 cursor-pointer	border-2 rounded-3xl bg-red-600 text-white text-center pt-2 ml-2' onClick={handleclick}>Search</div>
        </div>
        
    )
}

export default Search;