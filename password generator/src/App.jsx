import React, { useCallback, useEffect, useRef } from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [Length,setLength] = useState(null)
  const [numbers,setNumber] = useState(false)
  const [Characters,setCharacters] = useState(false)
  const [password, setPassword]  = useState("")
  
  const passwordRef = useRef(null)
  const generatePassword = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
    if(numbers===true){
      str += "0123456789"
    }
    else if(Characters){
      str+= "!@#$%^&*()_+"
    }
    else if(numbers === true && Characters === true){
      str+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    }

    for(let i = 1; i<=Length;i++){
      let pass = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(pass)
    }
    
    setPassword(password)

  },[Length, numbers, Characters, setPassword])
  
  useEffect(()=>{
    generatePassword()
  },[Length, numbers, Characters,generatePassword]) 


  const copyPassword = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } 

  return (
    <div>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <input
          type="text"
          value={password}
          className="w-full p-3 text-lg bg-gray-700 text-white rounded-md mb-4"
          ref={passwordRef}
        />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <label value={Length} onChange={()=>generatePassword()} className="text-white mr-2">Length:</label>
            <input onChange={(e)=>setLength(e.target.value)} type="range" min="1" max="20" className="w-24 cursor-pointer" />
            <span className="text-white ml-2">{Length}</span>
          </div>
          <button onClick={copyPassword} className="bg-blue-600 text-white px-4 py-2 rounded-md">Copy</button>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-white">
            <input defaultChecked={numbers} onChange={()=>setNumber((prev)=> prev= !prev)} type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">Numbers</span>
          </label>
          <label className="flex items-center text-white">
            <input defaultChecked={Characters} onChange={()=>setCharacters((prev)=>prev = !prev)} type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">Characters</span>
          </label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App

// import { useCallback, useEffect, useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numbers, setNumbers] = useState(false);
//   const [characters, setCharacters] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let password = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numbers === true) {
//       str += "0123456789";
//     } else if (characters === true) {
//       str += "!@#$%^&*()_+";
//     }

//     for (let i = 1; i <= length; i++) {
//       let pass = Math.floor(Math.random() * str.length + 1); // This will generate a random integer between 1 to str.length(i.e 52)
//       password += str.charAt(pass);
//     }

//     setPassword(password);
//   }, [length, numbers, characters, setPassword]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numbers, characters, passwordGenerator]);

//   const copyPassword = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   return (
//     <>
//       <div className="password-generator h-screen w-full flex items-center justify-center ">
//         <div className="box w-[40vw] h-[25vh] bg-zinc-700 rounded-lg p-5">
//           <div className="flex items-center justify-center gap-2">
//             <input
//               ref={passwordRef}
//               value={password}
//               className="w-full p-3 rounded-lg text-[1.8vw] text-black"
//               type="text"
//               placeholder="Password..."
//             />
//             <button
//               onClick={copyPassword}
//               className="bg-[#005CC8] rounded-full px-5 py-3"
//             >
//               Copy
//             </button>
//           </div>

//           <div className="mt-3 flex items-center justify-around">
//             <input
//               type="range"
//               value={length}
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//               min={6}
//               max={80}
//               className="cursor-pointer"
//             />
//             <label>Length: {length}</label>

//             <div className="checkbox1 flex gap-2">
//               <input
//                 type="checkbox"
//                 id="NumbersAllowed"
//                 defaultChecked={numbers}
//                 onChange={() => {
//                   setNumbers((prev) => !prev);
//                 }}
//               />
//               <label>Numbers</label>
//             </div>

//             <div className="checkbox2 flex gap-2">
//               <input
//                 type="checkbox"
//                 id="CharactersAllowed"
//                 defaultChecked={characters}
//                 onChange={() => {
//                   setCharacters((prev) => !prev);
//                 }}
//               />
//               <label>Characters</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
