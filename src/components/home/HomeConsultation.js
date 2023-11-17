import React from "react";
import homeConsultationImg from '../../assets/home/home_consultation_img.png'
import { FaCircleCheck } from 'react-icons/fa6'


export default function HomeConsultation(){
    return (
        <div className="px-lg-5 px-4 py-5 home-consultation-bg">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                    <div className="col-lg-11">
                        <div className="mb-4">
                            <p className="m-0 p-0 mb-3 home-about-caption">CONSULTATION</p>
                            <h2 className="m-0 p-0 mb-2 home-about-header">
                                Consultation With Our Professional Doctors                     
                            </h2>
                            <p className="m-0 p-0 home-about-text">
                                Our experts are ready to listen to your concerns, 
                                provide guidance, and work with you to achieve your 
                                health goals. We look forward to meeting with you and 
                                providing the care you deserve.                      
                            </p>                            
                        </div>
                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <div className="">
                                    <FaCircleCheck color="#000FB0" size={22} />
                                </div>
                                <div className="mx-3">
                                    <p className="home-consultation-checked-list-item p-0 m-0">
                                        Premium healthCare service
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="">
                                    <FaCircleCheck color="#000FB0" size={22} />
                                </div>
                                <div className="mx-3">
                                    <p className="home-consultation-checked-list-item p-0 m-0">
                                        Served by experienced doctors
                                    </p>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <button className="home-about-btn p-0 m-0 px-4 py-2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 d-lg-block d-flex justify-content-center">
                    <img src={homeConsultationImg} className="col-lg-12 col-12" />
                </div>
            </div>
        </div>
    )
}