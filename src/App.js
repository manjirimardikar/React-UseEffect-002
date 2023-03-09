import { createContext} from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './Components/Cards';
import { Search } from './Components/Search';

export const  Globaldata= createContext()

function App() {
  const [moviename, setMoviename] = useState("")
  const [searchname, setSearchname] = useState(moviename)
  const [data,setData] = useState([])



  useEffect(() => {
    const moviesearch = async()=>{
      if(searchname !==""){
        const  res= await fetch(`https://www.omdbapi.com/?s=${searchname}&apikey=d48797fe`)
        const data =await res.json()
        console.log(data.Search)
        setData(data.Search)
    
      }
     
    }
   
    moviesearch()




  },[searchname])

  console.log("hello",data)

  return (
    <div className="App">
      <Globaldata.Provider  value={data}>
      <Search moviename={moviename} setMoviename ={setMoviename} searchname ={searchname}  setSearchname={setSearchname}/>
      <Cards moviename={moviename} setMoviename ={setMoviename} searchname ={searchname}  setSearchname={setSearchname}/>
      </Globaldata.Provider>
    </div>
  );
}

export default App;