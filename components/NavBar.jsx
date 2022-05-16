import React from "react";

const NavBar = () => {
    return (
        <div className="flex w-full justify-between p-4 items-center font-helv">
            <div>Logo</div>
            <div className="hidden lg:flex lg:gap-5 gap-12 justify-center xl:w-1/2 items-center">
                <div>Home</div>
                <div>Our Specialists</div>
                <div>Sounding Board</div>
                <div>Blogs</div>
                <div>Plans</div>
                <button className="bg-[#ff8a84]/70 py-2 px-3 rounded-lg text-white">
                    Join Us
                </button>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#ff8a84]/70 py-2 px-3 rounded-lg text-white">
                    Login | Sign Up
                </button>
                <div className="h-10 rounded-full aspect-square bg-black"></div>
            </div>
        </div>
    );
};

export default NavBar;
