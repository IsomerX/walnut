import React from "react";
import ExpertCard from "./ExpertCard";

const data = [
    {
        heading: "DR. NIVEDITA DUTTA",
        desig: "Counselling Psychologist",
        exp: "Experience - 4+ years",
        gender: "Female",
        bg: "d4e3fc",
    },
    {
        heading: "DR. ANKUR WARIKOO",
        desig: "Physician",
        exp: "Experience - 4+ years",
        gender: "Male",
        bg: "fecfcd",
    },
    {
        heading: "DR. MOHIT SHARMA",
        desig: "Oncologist",
        exp: "Experience - 4+ years",
        gender: "Transgender",
        bg: "d4e3fc",
    },
];

const ExpertConnect = () => {
    const cards = data.map((items) => (
        <ExpertCard {...items} key={items.gender} />
    ));
    return (
        <div className="w-full">
            <div className="w-7/12 flex gap-3 flex-col">
                <div>
                    <h1 className="font-ald font-bold text-2xl text-[#7b7b7b]">
                        Connect with our experts
                    </h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full xl:w-7/12 place-items-center gap-10 mx-auto mt-10">
                {cards}
            </div>
            <div className="w-full flex justify-center py-10">
                <button className="bg-[#ff8a84]/70 text-center mx-auto py-4 text-xl text-white font-helv rounded-lg w-[300px]">
                    See all
                </button>
            </div>
        </div>
    );
};

export default ExpertConnect;
