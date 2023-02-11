import React from 'react'

let Button =(props)=> {
  return (
    <button className="bg-green-500 rounded p-2 font-bold w-[125px] max-w-[160px] hover:scale-110 duration-200  ease-in-out  text-white  uppercase hover:bg-green-400 ">{props.name}</button>
  );
}

export default Button