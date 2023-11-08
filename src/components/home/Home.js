import React from "react";
import './css/home.css'
import Navigation from "../navigation/Navigation";
import { HomeHeader } from "./HomeHeader";
import { HomeAboutUs } from "./HomeAboutUs";
import HomeOurServices from "./HomeOurServices";


export default function Home(){
    return (
        <div>
            <div className="">
                <Navigation />
            </div>
            <div>
                <HomeHeader />
            </div>
            <div>
                <HomeAboutUs />
            </div>
            <div>
                <HomeOurServices />
            </div>
        </div>
    )
}