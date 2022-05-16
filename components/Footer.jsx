import React from "react";
import Image from "next/image";
import Google from "../public/static/images/google-play-badge.png";
import Apple from "../public/static/images/download-on-the-app-store.svg";
const Footer = () => {
    return (
        <div className="bg-black w-full text-white py-5 px-12 flex justify-between">
            <div className="flex items-center gap-4">
                <div className="h-[225px] w-[120px] bg-white rounded-xl"></div>
                <ul>
                    <li>• Designated communities</li>
                    <li>• Your own Social health profile</li>
                    <li>• AI bot for personal recommendations</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center">
                <Image src={Google} width={646 / 3} height={250 / 3} alt="" />
                <Image src={Apple} width={646 / 4} height={250 / 4} alt="" />
            </div>
        </div>
    );
};

export default Footer;
