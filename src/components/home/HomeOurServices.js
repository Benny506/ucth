import React, { useState } from "react";
import { servicesArr } from "./auxiliary/homeServicesAux";
import { BsChevronCompactDown } from 'react-icons/bs'
import { Collapse } from "react-bootstrap";


export default function HomeOurServices(){

    const [activeService, setActiveService] = useState('')
    const [showAllServices, setShowAllServices] = useState(false)

    const toggleAllServicesDisplay = () => setShowAllServices(prev => !prev)

    const displayServices = ({ firstFour }) => {
        const servicesToShow = firstFour ? servicesArr.slice(0, 4) : servicesArr.slice(4)
        return servicesToShow.map((service, i) => {
            const { Svg, title, text } = service

            const isActive = title.toLowerCase() == activeService

            const onMouseOver = () => setActiveService(title.toLowerCase())
            const onMouseLeave = () => setActiveService('')

            return (
                <div className="col-lg-3 d-flex justify-content-center">
                    <div 
                        key={i}
                        className="home-services-single-service-container p-3 mb-4 col-11"
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
    }

    return (
        <div className="py-5 px-4">
            <div>
                <div className="d-flex justify-content-center mb-4">
                    <div className="col-lg-5">
                        <h1 className="m-0 p-0 mb-1 home-services-title">Services</h1>
                        <h2 className="m-0 p-0 home-services-sub-title">We Provide Our Best Services</h2>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                            displayServices({ firstFour: true })
                        }
                    </div>
                    <Collapse in={showAllServices} timeout={5000} id="services-collapse">
                        <div>
                            <div className="d-flex flex-wrap justify-content-between flex-wrap">
                                {
                                    displayServices({ firstFour: false })
                                }
                            </div>
                        </div>                             
                    </Collapse>                                   
                    <div className="d-flex justify-content-center">
                        <div
                            onClick={toggleAllServicesDisplay} 
                            className="home-services-service-chevron-container clickable rounded-circle px-3 py-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                            <path d="M1.5597 2.11374L14.9997 14.5199L28.4397 2.11374" stroke="white" stroke-width="2.88" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}