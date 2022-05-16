import React from "react";
import OfferingCard from "./OfferingCard";

const Offering = () => {
    return (
        <div className="w-full pt-20">
            <div>
                <div className="w-7/12 flex gap-3 flex-col">
                    <div>
                        <h1 className="font-ald font-bold text-2xl">
                            Our Offerings
                        </h1>
                        <p className="font-aleg text-xl">
                            Choose from a variety of powerful features that have
                            the potential to alter and better your life, the
                            healthy way
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 gap-7 mt-6">
                <OfferingCard
                    heading={"SOCIAL MEDIA"}
                    text={
                        "A social media feed dedicated to Mental health, fitness and more"
                    }
                    button="Join"
                    bg={1}
                    butColor="black"
                />
                <OfferingCard
                    heading={"COMMUNITIES"}
                    text={
                        "A social media feed dedicated to Mental health, fitness and more"
                    }
                    button="Join"
                    bg={2}
                    butColor="white"
                />
                <OfferingCard
                    heading={"MEET EXPERTS"}
                    text={
                        "A social media feed dedicated to Mental health, fitness and more"
                    }
                    button="Join"
                    bg={3}
                    butColor="black"
                />
                <OfferingCard
                    heading={"EVENTS & WEBINARS"}
                    text={
                        "A social media feed dedicated to Mental health, fitness and more"
                    }
                    button="Join"
                    bg={4}
                    butColor="white"
                />
            </div>
            <div className="w-full flex justify-center py-10">
                <button className="bg-[#ff8a84]/70 text-center mx-auto py-4 text-xl text-white font-helv rounded-lg w-[300px]">
                    Consider me in
                </button>
            </div>
        </div>
    );
};

export default Offering;

// See, interact and/or consult with an exhaustive list of health experts and specialists
// MEET EXPERTS
// View all
// Follow, Join and post in dedicated communities on subjects revolving around mental and physical health
// Join
// COMMUNITIES
// SOCIAL MEDIA
// Join
// EVENTS & WEBINARS
// Attend and participate in Events and Webinars that are best suited to your wants and needs
// View all
