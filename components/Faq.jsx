import React from "react";

const data = [
    "What is therapy?",
    "Who is therapy for?",
    "Will all the information I share, be safe?",
    "What is therapy?",
    "What is therapy?",
];

const FaqItem = ({ text }) => {
    return <h1 className="font-helv text-xl py-3">{text}</h1>;
};

const Faq = () => {
    const faqs = data.map((item, index) => <FaqItem text={"• " + item} key={index} />);
    return (
        <div className="bg-[#d4e3fc] w-full pt-10 px-12 pb-3">
            <div className="text-2xl font-ald font-bold">FAQ&apos;S</div>
            <div className="divide-y-[1px] divide-black/50">
                {faqs}
            </div>
        </div>
    );
};

export default Faq;
