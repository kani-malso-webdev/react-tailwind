import React, { useState } from "react";
import { SiRiotgames } from "react-icons/si";
import {GrMenu, GrClose} from "react-icons/gr";
import {AiOutlineHome,AiOutlineContacts} from "react-icons/ai";
import {HiOutlineLocationMarker } from "react-icons/hi";
import {RiGalleryLine} from "react-icons/ri"
import {IoPricetagsOutline} from "react-icons/io5";

const linklist =[
    {id:"1",name:"Home",link:"#" ,icon:<AiOutlineHome/>},
    {id:"2",name:"Places",link:"#" ,icon:<HiOutlineLocationMarker/>},
    {id:"3",name:"Packages",link:"#",icon:<IoPricetagsOutline/>},
    {id:"4",name:"Gallery",link:"#",icon:<RiGalleryLine/>},
    {id:"5",name:"Contact",link:"#",icon:<AiOutlineContacts/>},
]


const Nav = () =>{

    let [open, setOpen] = useState(false)

    return(
        <div className="w-full py-6 md:pt-12 ">
            <div className="max-w-[1240px]  mx-auto  text-Black flex items-center justify-between px-2">
                <h1 className="flex items-center gap-2 text-2xl tracking-wider  font-bold cursor-pointer"><SiRiotgames /> Bungee </h1>
                <div onClick={()=>setOpen(!open)} className="md:hidden">
                    {open ? <GrClose /> : <GrMenu />}             
                </div>
                <ul className="hidden md:flex gap-1 ">
                    {linklist.map((list) => (
                        <li key={list.id} className=" font-semibold  hover:bg-gray-500  hover:text-white rounded-lg duration-300 p-2 "><a href={list.link} className="flex items-center gap-3">{list.icon}{list.name}</a></li>
                    ))}                    
                </ul>                

            </div>
            <ul className={`md:hidden fixed px-2 mt-2 font-semibold w-[70%] text-white bg-gray-600 h-screen flex flex-col gap-3 pt-5 duration-500 ease-linear  ${open ? "right-[30%]" : "right-[100%]"}`}>
                    {linklist.map((list) => (
                        <li key={list.id} className="  hover:shadow-lg hover:bg-gray-500 rounded-lg duration-300  p-2 "><a href={list.link} className="flex items-center gap-3">{list.icon}{list.name}</a></li>
                    ))}                    
                </ul>
        </div>
    );
}

export default Nav