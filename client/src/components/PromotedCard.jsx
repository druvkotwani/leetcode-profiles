import Questions from "./Profile/Circle&Questions/Questions";
import Circle from "./Profile/Circle&Questions/Circle";
import { useState, useEffect } from "react";
import Profile from "./Profile/About/Profile";
import SocialLinks from "./Profile/About/SocialLinks";
import { motion } from "framer-motion";


export default function PromotedCard() {



    return (
        <div className="flex justify-center flex-col items-center rounded-lg h-[280px] bg-[#292829]">
            <div>
                <div className="flex gap-1 xl:gap-4 items-center justify-between ">
                    {/* Profile */}

                </div>
                <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />

                <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4">
                    {/* Circle */}

                </div>



            </div>
        </div>

    )
}

