import React from "react";
import './css/home.css'
import Navigation from "../navigation/Navigation";
import { HomeHeader } from "./HomeHeader";
import { HomeAboutUs } from "./HomeAboutUs";
import HomeOurServices from "./HomeOurServices";
import HomeConsultation from "./HomeConsultation";
import HomeOurDoctors from "./HomeOurDoctors";
import HomeBookAppointment from "./HomeBookAppointment";
import HomeWhyChooseUs from "./HomeWhyChooseUs";
import HomeTheNumbers from "./HomeTheNumbers";
import HomeOurBlog from "./HomeOurBlog";
import Footer from "../footer/Footer";


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
            <div>
                <HomeConsultation />
            </div>
            <div>
                <HomeOurDoctors />
            </div>
            <div>
                <HomeBookAppointment />
            </div>
            <div>
                <HomeWhyChooseUs />
            </div>
            <div>
                <HomeTheNumbers />
            </div>                
            <div className="mb-5">
                <HomeOurBlog />
            </div>
            <div>
                <Footer />
            </div>                                                
        </div>
    )
}