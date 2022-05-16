import React from "react";
import Image from "next/image";
import Mind from "../public/static/images/50x50.png";

const bgColors = {
    1: "linear-gradient(to right, rgba(241, 173, 190, 0.58) 0%, rgb(117, 165, 245) 100%)",
    2: "linear-gradient(to right, rgba(207, 61, 53, 0.66) 0%, rgba(255, 235, 234, 0.4) 100%)",
    3: "linear-gradient(to right, rgba(241, 173, 190, 0.58) 0%, rgb(117, 165, 245) 100%)",
    4: "linear-gradient(to right, rgba(207, 61, 53, 0.66) 0%, rgba(255, 235, 234, 0.4) 100%)",
};

const OfferingCard = ({ heading, text, button, bg, butColor }) => {
    return (
        <div className="py-4 px-6 rounded-xl" style={{ background: bgColors[bg] }}>
            <h1 className="font-aleg text-center font-extrabold text-2xl">
                {heading}
            </h1>
            <p className="font-aleg font-light text-xl">{text}</p>
            <div className="flex items-center justify-between pt-6">
                <button
                    className={`${
                        butColor === "black" ? "bg-black" : "bg-white"
                    } ${
                        butColor === "black" ? "text-white" : "text-black"
                    }
                    ${butColor === "white" && "border-black border-2"}
                    py-2 px-5 rounded-lg`}
                >
                    {button}
                </button>
                <Image src={Mind} width={50} height={50} alt="mind" />
            </div>
        </div>
    );
};

export default OfferingCard;
