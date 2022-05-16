import Image from "next/image";
import React from "react";
import Fb from "../public/static/images/fb.svg";
import Mail from "../public/static/images/mail.svg";
import Phone from "../public/static/images/phone.svg";
const SubFooter = () => {
    return (
        <div className="w-full px-5 lg:px-12 py-10 grid md:grid-cols-3 bg-black font-helv text-white items-center gap-3 lg:gap-0 ">
            <div className="flex md:block gap-3 md:gap-0 justify-center">
                <div>Our Team</div>
                <div>Privacy Policy</div>
                <div>Legal</div>
                <div>Support</div>
            </div>
            <div className="flex justify-center gap-3 md:gap-0 md:flex-col lg:items-center">
                <div>Partnership</div>
                <div>Investment</div>
                <div>New Delhi, India</div>
            </div>
            <div className="flex md:flex-col md:items-end md:gap-3 justify-center gap-5">
                <div className="text-center">
                    <div>Social</div>
                    <div className="flex gap-1">
                        <Image src={Fb} height="30" width="30" alt="" />
                        <Image src={Fb} height="30" width="30" alt="" />
                        <Image src={Fb} height="30" width="30" alt="" />
                    </div>
                </div>
                <div className="text-center">
                    <div>Contact Us</div>
                    <div className="flex gap-4">
                        <Image src={Mail} height="30" width="30" alt="" />
                        <Image src={Phone} height="30" width="30" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubFooter;
