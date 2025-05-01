import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [joke, setJoke] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes").
    then((res)=>{
      setJoke(res.data)
    }).
    catch((error)=>{
      console.log(error);
    })
  },[])

return(
  <>
    <div>
      <h1>Here are some uncle jokes as they have been generated using github copilot</h1>
      <h2>{joke.length}</h2>
      {
        joke.map((jokes,index)=>(
          <div key={index}>
            <h3>
              {jokes.title}
            </h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </div>
  </>
)
}

export default App
