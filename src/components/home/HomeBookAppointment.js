import React from "react";
import homeBookAppointment from '../../assets/home/home_book_appointment_img.png'
import { FaCircleCheck } from 'react-icons/fa6'


export default function HomeBookAppointment(){
    return (
        <div className="px-lg-5 px-4 py-5 home-consultation-bg">
            <div className="d-flex justify-content-between flex-wrap align-items-center">
                <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                    <img src={homeBookAppointment} className="col-lg-12 col-12" />
                </div>                
                <div className="col-lg-6 d-flex justify-content-center">
                    <div className="col-lg-10">
                        <div className="mb-4">
                            <p className="m-0 p-0 mb-3 home-about-caption">BOOK APPOINTMENT</p>
                            <h2 className="m-0 p-0 mb-2 home-about-header">
                                Make An Appointment With A Doctor Today                   
                            </h2>
                            <p className="m-0 p-0 home-about-text">
                                We are committed to providing you with the best possible healthcare 
                                experience, and scheduling an appointment with one of our experienced 
                                and caring doctors is a simple and straightforward process.                     
                            </p>                            
                        </div>
                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <div className="">
                                    <FaCircleCheck color="#000FB0" size={22} />
                                </div>
                                <div className="mx-3">
                                    <p className="home-consultation-checked-list-item p-0 m-0">
                                        Top-Searched Specialist
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="">
                                    <FaCircleCheck color="#000FB0" size={22} />
                                </div>
                                <div className="mx-3">
                                    <p className="home-consultation-checked-list-item p-0 m-0">
                                        Tested and Trusted HealthCare.
                                    </p>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <button className="p-0 m-0">
                                <div 
                                    className="cont_1 p-0 m-0"
                                    style={{
                                        backgroundColor: '#000FB0',
                                        borderRadius: "20px"
                                    }}
                                >
                                    <div className="cont_2 p-0 m-0"
                                    >
                                        <p 
                                            className="cont_3 px-4 py-2 text-white"
                                            style={{
                                                border: "none",
                                                borderRadius: "20px"
                                            }}
                                        >
                                            Learn More
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>                                                
                                        </p>
                                    </div>
                                </div>                                    
                            </button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}