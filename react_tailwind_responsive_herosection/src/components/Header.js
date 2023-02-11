import React from "react";
import Typed from 'react-typed';
import Button from "./Button";
const Header = () => {
    return(
        <div className="w-full ">
            <div className="max-w-[1240px]  mx-auto flex justify-center flex-col items-center gap-5 py-4  md:py-[70px] px-2">
                <Typed
                    strings = {['Heart-pounding', 'Excitement Surrounding']}
                    typeSpeed = {70}
                    backSpeed = {55}
                    loop
                className="text-[22px] md:text-3xl text-gray-500 font-[500] capitalize">
                </Typed>
                <h1 className="text-center capitalize text-l md:text-xl font-[600]">"Take a leap, don't be shy, bungee jump up high!"</h1>
                <p className="max-w-[680px] text-center ">"Are you ready for a new adventure that will challenge you and leave you feeling alive? Step out of your comfort zone and into the exciting world of bungee jumping. Come join us for the thrill of a lifetime!</p>
                <Button name="Book" />   
            </div>
                    
        </div>
    );
}

export default Header