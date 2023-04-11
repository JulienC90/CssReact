import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'



function App() {
  return (
    <div id="card">
      <div id="contentUp">
        <h1>Entreprise quelconque</h1>
        <div id="data">
          <p>🗺️ Adresse approximative</p>
          <p>☎️ Téléphone: c'est non</p>
          <p>📧 Mail: même pas en rêve</p>
        </div>
        <h2>Des services moyens pour des chantiers peu ambitieux</h2>
      </div>
      <div id="contentDown">
        <ul>
          <li>Chez <b>Entreprise Quelconque</b>, nous avons peu à coeur de vous satisfaire,</li>
          <li>Néanmoins, soyez assurés que notre communication est honnête.</li>
        </ul>
      </div>
    </div>
  )


//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
}

export default App
