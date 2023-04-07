import Card from "./Card"
import Header from "./Header"
import Search from "./Search"
import { useSelector } from "react-redux"
import { useFetchstatesQuery } from "./store";


function App(){
    const simp = useSelector((state)=>{
        return state.seval.Searchterm
    })
    let content;
    


    const {data,isFetching} = useFetchstatesQuery();
    console.log(data,'idhar')
    if (isFetching){
        content = <div>isloading guys</div>
    }
    else{
        content = data.map(album=>{
            console.log(album)
            return <Card key={album.id} show={simp===album.name || simp==="Search" || simp===""} imsrc={album.img} rs={album.rs} lnk={album.lnk}>{album.name}</Card>
        })
    }
    
    
      return (
        <div>
        <Header />
        <br />
        <br />
        <Search />
        <br />
        <div className="grid grid-cols-4 gap-4 w-4/5 m-auto">{content}</div>
    </div>)
}
export default App;