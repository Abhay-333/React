import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")


  return (
    <div style={{backgroundColor: color, height:'100vh'}} className='px-[4vw] py-[3vw]'>
      <nav className='bg-zinc-200 px-5 py-3 rounded-lg flex items-center justify-between'>
        <button onClick={()=>setColor('#102C57')} className='bg-[#102C57] py-2 px-5 rounded-full'>Space Cadet</button>
        <button onClick={()=>setColor('#1A2130')} className='bg-[#1A2130] py-2 px-5 rounded-full'>Charcoal Blue</button>
        <button onClick={()=>setColor('#26355D')} className='bg-[#26355D] py-2 px-5 rounded-full'>Oxford Blue</button>
        <button onClick={()=>setColor('#151515')} className='bg-[#151515] py-2 px-5 rounded-full'>Eerie Black</button>
        <button onClick={()=>setColor('#240750')} className='bg-[#240750] py-2 px-5 rounded-full'>Russian Violet</button>
        <button onClick={()=>setColor('#4D869C')} className='bg-[#4D869C] py-2 px-5 rounded-full'>Steel Blue</button>
        <button onClick={()=>setColor('#32012F')} className='bg-[#32012F] py-2 px-5 rounded-full'>Dark Purple</button>
        <button onClick={()=>setColor('#00215E')} className='bg-[#00215E] py-2 px-5 rounded-full'>Dark Imperial Blue</button>
      </nav>
    </div>
  )
}

export default App
