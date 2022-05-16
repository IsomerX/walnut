import Image from "next/image";
import React from "react";
import Fb from "../public/static/images/fb.svg";
import Mail from "../public/static/images/mail.svg";
import Phone from "../public/static/images/phone.svg";
const SubFooter = () => {
    return (
        <div className="w-full px-12 py-10 grid grid-cols-3 bg-black font-helv text-white items-center">
            <div>
                <div>Our Team</div>
                <div>Privacy Policy</div>
                <div>Legal</div>
                <div>Support</div>
            </div>
            <div className="flex flex-col items-center">
                <div>Partnership</div>
                <div>Investment</div>
                <div>New Delhi, India</div>
            </div>
            <div className="flex flex-col items-end gap-3">
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
