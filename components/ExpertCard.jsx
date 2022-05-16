import React from "react";

const ExpertCard = ({heading, desig, exp, gender, bg}) => {

    let style;
    if(bg === "fecfcd"){
        style = {
            background: "#fecfcd"
        }
    }

    return (
        <div className={`bg-[#${bg}] flex flex-col items-center text-center font-aleg gap-4 w-full max-w-[400px] rounded-xl py-10`} style={style}>
            <div className="h-20 aspect-square rounded-full bg-white"></div>
            <h1 className="text-2xl font-extrabold">{heading}</h1>
            <div className="text-lg">
                <h2 className="font-bold">{desig}</h2>
                <p>Experience - 4+ years</p>
                <p>{gender}</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-black text-white rounded-lg px-6 py-2 text-lg">Book</button>
                <button className="bg-black text-white rounded-lg px-6 py-2 text-lg"> About</button>
            </div>
        </div>
    );
};

export default ExpertCard;
