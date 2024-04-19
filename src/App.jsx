import { useState } from 'react'

import './App.css'
import Currency from './components/Currency'

function App() {

  return (
//yatayda ve dikeyde ortalama için div'ine yazdım
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      <Currency/>
    </div>

  )
}

export default App
