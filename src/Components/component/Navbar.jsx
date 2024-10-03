import React from 'react'

const Navbar = () => {
  let A=12;
  return (
    <div style={{display:"flex", "justify-content": "space-around",height:"60px",alignItems:"center"}}>
    <div>Menu</div>
    <div style={{display:"flex","justify-content": "space-between",gap:"50px"}}>
    <a>Home</a>
    <a>About</a>
    <a>contact</a>
    <a>Skills</a>
    <a>{A}</a>
    </div>
    </div>
  )
}

export default Navbar