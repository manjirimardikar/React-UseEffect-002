import React from 'react'
import './Search.css'

export const Search = (props) => {
  return (
    <div className='inputcontainer'>
        <h1>HOOKED</h1>
        <div className="inputsearch">
        <input  placeholder="Search your movie here"type="text" value={props.moviename} onChange={(ele)=>{
            console.log(ele.currentTarget.value)
            props.setMoviename(ele.currentTarget.value)
            // console.log("onchange", props.moviename)
        }}  />
        <button onClick={()=>{
            props.setSearchname(props.moviename)
            props.setMoviename("")

            // console.log( "onClick",props.moviename)

        }}>search</button>

        </div>

    </div>
  )
}