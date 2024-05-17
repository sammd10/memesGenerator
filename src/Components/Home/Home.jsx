import React , {useEffect , useState} from 'react'
import MemeCard from '../memeCard/MemeCard'
import { fetchData } from '../Data/Data'
import { memeContext } from '../useContext/UseContext'

export default function Home() {
  const [meme , setMeme] = useState([])

   useEffect(()=>{
     fetchData().then((meme) => setMeme(meme.data.memes))
   },[])
   console.log(meme)

  return (
    <memeContext.Provider value={meme}>
        <MemeCard/>
    </memeContext.Provider>
  )
}
