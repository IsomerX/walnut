import React from "react";
import Image from "next/image";
import Mind from "../public/static/images/50x50.png";
import Graphic from "../public/static/images/500x300.png";

const WhyUs = () => {
    return (
        <div className="pt-12 flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            <div className="lg:w-7/12 flex gap-3 flex-col">
                <div>
                    <h1 className="font-ald font-bold text-2xl">Why Us</h1>
                    <p className="font-aleg text-xl">
                        We believe that holistic health, its importance and the
                        information surrounding it, is a basic human right. We,
                        at Walnut help you do that and more. All you need to do
                        is take a leap of faith
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center font-aleg gap-3">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={Mind}
                                width={50}
                                height={50}
                                alt="mind"
                            />
                        </div>
                        <p>The Safest space for you to express your thoughts</p>
                    </div>{" "}
                    <div className="flex items-center font-aleg gap-3">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={Mind}
                                width={50}
                                height={50}
                                alt="mind"
                            />
                        </div>
                        <p>
                            Witness the power of social media leading you to a
                            healthier lifestyle
                        </p>
                    </div>
                    <div className="flex items-center font-aleg gap-3">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={Mind}
                                width={50}
                                height={50}
                                alt="mind"
                            />
                        </div>
                        <p>
                            Explore Communities that share, learn and support
                            like family
                        </p>
                    </div>
                    <div className="flex items-center font-aleg gap-3">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={Mind}
                                width={50}
                                height={50}
                                alt="mind"
                            />
                        </div>
                        <p>
                            Join bold discussions on Women’s health, hygiene and
                            sexual awareness
                        </p>
                    </div>
                    <div className="flex items-center font-aleg gap-3">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={Mind}
                                width={50}
                                height={50}
                                alt="mind"
                            />
                        </div>
                        <p>Engage and earn perks</p>
                    </div>
                    <div className="flex items-center font-aleg gap-3">
                        <div className="flex-shrink-0 flex items-center">
                            <Image
                                src={Mind}
                                width={50}
                                height={50}
                                alt="mind"
                            />
                        </div>
                        <p>
                            Participate in marathons, events, and engaging
                            fitness activities
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <Image src={Graphic} width={500} height={300} alt="graphic" />
            </div>
        </div>
    );
};

export default WhyUs;
