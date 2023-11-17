import React from "react";
import { doctorsGroup } from "./auxiliary/homeOurDoctorsAux";
import { CarouselItem, Carousel } from "react-bootstrap";


export default function HomeOurDoctors(){

    const displayCarouselItems = doctorsGroup.map((group, groupIndex) => {
        return (
            <CarouselItem key={groupIndex}>
                <div className="d-flex justify-content-between flex-wrap align-items-center">
                    {
                        group.map((group, i) => {
                            const { img, name, role } = group
                            return (
                                <div className="col-lg-3 col-12 mb-lg-0 mb-3 d-flex justify-content-center">
                                    <div key={i} className="col-lg-11 col-12 home-our-doctors-single-doctor-container px-2 py-4 d-flex flex-column justify-content-center">
                                        <div className="mb-4 d-flex justify-content-center">
                                            <img src={img} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div className="col-lg-8">
                                                <h4 className="home-our-doctors-single-doctor-name m-0 p-0 mb-3">{name}</h4>
                                                <p className="m-0 p-0 home-our-doctors-single-doctor-role">{role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </CarouselItem>
        )
    })

    return (
        <div className="py-5 px-lg-5 px-4">
            <div>
                <div className="d-flex justify-content-center mb-4">
                    <div className="col-lg-5">
                        <h1 className="m-0 p-0 mb-1 home-services-title">Our Doctors</h1>
                        <h2 className="m-0 p-0 home-services-sub-title">Meet Our Professional Doctors</h2>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="col-lg-12 col-12">
                        <Carousel
                            controls={false}
                            
                        >
                            {
                                displayCarouselItems
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>        
    )
}