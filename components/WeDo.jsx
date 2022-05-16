import React from "react";
import WeDoItem from "./WeDoItem";

const WeDo = () => {
    return (
        <div className="w-full pt-10 flex  flex-col gap-10">
            <div>
                <div className="w-7/12 flex gap-3 flex-col">
                    <h1 className="font-ald font-bold text-2xl">
                        How do we do it?
                    </h1>
                </div>
            </div>
            <div className="relative">
                <div className="left-1/2 -translate-x-1/2 w-[78%] h-[2px] bg-[#7b7b7b] absolute top-[15px] -z-10"></div>
                <div className="grid grid-cols-5 gap-10 px-10">
                    <WeDoItem idx={1} />
                    <WeDoItem idx={2} />
                    <WeDoItem idx={3} />
                    <WeDoItem idx={4} />
                    <WeDoItem idx={5} />
                </div>
            </div>
            <div className="w-full flex justify-center py-10">
                <button className="bg-[#ff8a84]/70 text-center mx-auto py-4 text-xl text-white font-helv rounded-lg w-[300px]">
                    Know More
                </button>
            </div>
        </div>
    );
};

export default WeDo;
