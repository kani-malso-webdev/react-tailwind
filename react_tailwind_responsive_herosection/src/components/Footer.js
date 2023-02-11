import React from 'react'
import {FaTwitter, FaFacebook,FaYoutube} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

let icons = [
    {id:"1",name:<FaTwitter/>,link:"#"},
    {id:"1",name:<FaFacebook/>,link:"#"},
    {id:"1",name:<AiFillInstagram/>,link:"#"},
    {id:"1",name:<FaYoutube/>,link:"#"}
]

let footerlist = [
    {id:"1",name:"terms of service",link:"#"},
    {id:"2",name:"privacy policy",link:"#"},
    {id:"2",name:"support",link:"#"},
]

let Footer = () => {
  return (
    <div className='w-full py-4 md:py-2'>
        <div className='max-w-[1240px]  mx-auto md:flex items-center justify-between px-2 md:py-10'>
        <ul className='flex justify-center gap-5'>
            {icons.map((icon)=>(
                <li key={icon.id} className="hover:scale-150 duration-300 text-xl"><a href={icon.link} className="capitalize ">{icon.name}</a></li>
            ))}
        </ul>
        <ul className='mt-4 md:mt-0 md:flex gap-5'>
        {footerlist.map((foot)=>(
                <li key={foot.id} className="md:relative  after:content-[''] after:bg-pink-500 after:h-[2px] after:w-[0%] after:left-0 after:bottom-[-2px] after:rounded-xl after:absolute after:duration-700 md:hover:after:w-[100%] hover:text-gray-500"><a href={foot.link} className="capitalize font-[500]">{foot.name}</a></li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Footer