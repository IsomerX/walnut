import React from "react";

const data = {
    1: {
        heading: "Social Health Profile",
        text: "We help you create you own social health profile, that you use, to connect and interact with other people",
    },
    2: {
        heading: "Explore, Join & Connect",
        text: "We recommend and help you explore and join communities that you connect with, on a personal basis",
    },
    3: {
        heading: "Attend, Know & Clarify",
        text: "Attend and participate in webinars to communicate, discuss and clarify the questions you might have",
    },
    4: {
        heading: "Consult Experts",
        text: "Interact with and/or consult doctors and health experts to get the assistance you need and deserve",
    },
    5: {
        heading: "Earn Coin",
        text: "Earn Coins and Rewards whilst staying connected and in charge of your own health",
    },
};

const WeDoItem = ({ idx }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div>
                <div className="bg-[#feaca8] grid place-items-center h-8 aspect-square rounded-full">
                    <div className="bg-black h-4 aspect-square rounded-full"></div>
                </div>
            </div>
            <div>
                <div className="font-aleg text-2xl font-bold">
                    {data[idx].heading}
                </div>
                <div className="font-aleg text-xl">{data[idx].text}</div>
            </div>
        </div>
    );
};

export default WeDoItem;
