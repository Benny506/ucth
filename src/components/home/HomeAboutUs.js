import React from "react";
import homeAboutImg from '../../assets/home/home_about_img.png'


export function HomeAboutUs(){
    return (
        <div className="py-lg-5 py-4 px-lg-5 px-4">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-lg-6 col-12">
                    <img src={homeAboutImg} className="col-12" />
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="col-lg-10">
                        <div className="mb-4">
                            <p className="m-0 p-0 mb-3 home-about-caption">About Us</p>
                            <h2 className="m-0 p-0 mb-2 home-about-header">
                                Patient Health Is The Highest Value In Our Work                        
                            </h2>
                            <p className="m-0 p-0 home-about-text">
                                we believe that patient health is not just a value; 
                                it's our unwavering commitment. Our entire team is committed 
                                to providing the highest standard of care, because we understand
                                that your well-being is at the heart of everything we do. We continuously 
                                strive to improve
                                our services and exceed expectations                        
                            </p>                            
                        </div>
                        <div>
                            <button className="home-about-btn p-0 m-0 px-4 py-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}