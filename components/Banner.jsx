import React from "react";

const Banner = () => {
    return (
        <div className="px-10 py-12 banner flex justify-between items-center">
            <div className="lg:w-4/12 flex flex-col gap-5">
                <div>
                    <h1 className="font-ald text-[#7b7b7b] text-4xl">WALNUT</h1>
                    <p className="text-xl font-helv">
                        India&apos;s 1st Social Media platform for Mental &
                        Physical Health
                    </p>
                </div>
                <div className="w-full font-helv">
                    <form className="flex gap-3 w-full">
                        <input
                            type="text"
                            placeholder="🔍 Search for doctors/specialists"
                            className="bg-white px-5 py-2 rounded-lg w-full"
                        />
                        <button className="bg-white px-5 py-2 rounded-lg">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="h-20 aspect-square rounded-lg bg-black"></div>
            </div>
        </div>
    );
};

export default Banner;
