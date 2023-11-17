import React, { useState } from "react";
import { whyChooseUsReasons } from "./auxiliary/homeWhyChooseUsAux";


export default function HomeWhyChooseUs(){

    const [activeService, setActiveService] = useState('')

    const displayServices = whyChooseUsReasons.map((service, i) => {
        const { Svg, title, text } = service

        const isActive = title.toLowerCase() == activeService

        const onMouseOver = () => setActiveService(title.toLowerCase())
        const onMouseLeave = () => setActiveService('')

        return (
            <div className="col-lg-3 col-12 d-flex justify-content-center">
                <div 
                    key={i}
                    className="home-services-single-service-container p-3 mb-4 col-lg-11 col-12"
                    style={{
                        backgroundColor: isActive ? '#0001AC' : '#fff'
                    }}
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="d-flex justify-content-start">
                        <div 
                            
                            className="mb-3 rounded-circle p-2"
                            style={{
                                backgroundColor: isActive ? '#fff' : 'rgba(0, 15, 176, 0.20)'
                            }}
                        >
                            <Svg />
                        </div>
                    </div>
                    <div className="mb-2">
                        <h5 
                            className="m-0 p-0 mb-3 home-services-single-service-title"
                            style={{
                                color: isActive ? '#fff' : '#222'
                            }}
                        >
                            {title}
                        </h5>
                        <p 
                            className="m-0 p-0 home-services-single-service-text"
                            style={{
                                color: isActive ? '#fff' : '#737373'
                            }}
                        >
                            {text}
                        </p>
                    </div>
                    <div>
                        <button 
                            className="home-services-single-service-btn py-1 px-2"
                            style={{
                                color: isActive ? '#000FB0' : '#FFF',
                                backgroundColor: isActive ? '#FFF' : '#000FB0'
                            }}
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        )
    })   

    return (
        <div className="py-5 px-lg-5 px-4">
            <div>
                <div className="d-flex justify-content-center mb-4">
                    <div className="col-lg-5">
                        <h1 className="m-0 p-0 mb-1 home-services-title">Services</h1>
                        <h2 className="m-0 p-0 home-services-sub-title">We Provide Our Best Services</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-between col-lg-12 col-12 flex-wrap">
                        {
                            displayServices
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}