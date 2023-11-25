import React from "react";
import logo from '../../assets/logo/logo1.png'
import './css/footer.css'


export default function Footer(){
    return (
        <div className="px-lg-5 px-4 py-5 footer-bg">
            <div className="d-flex flex-wrap justify-content-between py-5">
                <div className="col-lg-2 col-12 mb-lg-0 mb-4">
                    <div className="col-lg-2 d-flex align-items-center mb-4">
                        <div>
                            <img src={logo} />
                        </div>
                        <div>
                            <h5 className="nav-logo-text m-0 p-0 mx-3">UTCH</h5>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="m-0 p-0 footer-caption">
                            Our driving objective at UCTH is to become a world class quartenary hospital, 
                            using cutting edge technology and highly developed human resources to render 
                            excellent medical care/services to the good people of Cross River State and 
                            beyond in-order to markedly reduce the number of patients seeking medical tourism 
                            abroad.                        
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                            <path d="M20 2.86328C19.2639 3.21328 18.4704 3.44328 17.6482 3.55328C18.4895 3.02328 19.1396 2.18328 19.4455 1.17328C18.652 1.67328 17.7725 2.02328 16.8451 2.22328C16.0899 1.36328 15.0287 0.863281 13.8241 0.863281C11.5774 0.863281 9.74187 2.78328 9.74187 5.15328C9.74187 5.49328 9.78012 5.82328 9.84704 6.13328C6.4436 5.95328 3.413 4.24328 1.39579 1.65328C1.04207 2.28328 0.8413 3.02328 0.8413 3.80328C0.8413 5.29328 1.55832 6.61328 2.6673 7.36328C1.98853 7.36328 1.35755 7.16328 0.80306 6.86328V6.89328C0.80306 8.97328 2.21797 10.7133 4.09178 11.1033C3.49018 11.2755 2.8586 11.2995 2.24665 11.1733C2.50632 12.0258 3.01485 12.7717 3.70078 13.3062C4.38671 13.8407 5.21553 14.137 6.07075 14.1533C4.62106 15.3537 2.82409 16.0026 0.975143 15.9933C0.650096 15.9933 0.325048 15.9733 0 15.9333C1.81644 17.1533 3.97706 17.8633 6.29063 17.8633C13.8241 17.8633 17.9637 11.3233 17.9637 5.65328C17.9637 5.46328 17.9637 5.28328 17.9541 5.09328C18.7572 4.49328 19.4455 3.73328 20 2.86328Z" fill="#7A7A7A"/>
                            </svg>                    
                        </div>
                        <div className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10 1.61328C5.1625 1.61328 1.25 5.55078 1.25 10.4133C1.25 14.8008 4.45 18.4508 8.6375 19.1133V12.9633H6.4125V10.4133H8.6375V8.47578C8.6375 6.26328 9.95 5.05078 11.9375 5.05078C12.9 5.05078 13.9 5.22578 13.9 5.22578V7.38828H12.8C11.7125 7.38828 11.375 8.06328 11.375 8.76328V10.4133H13.8L13.4125 12.9633H11.375V19.1133C15.5625 18.4508 18.7625 14.8133 18.7625 10.4133C18.7625 5.55078 14.85 1.61328 10.0125 1.61328H10Z" fill="#7A7A7A"/>
                            </svg>                    
                        </div>
                        <div className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M5.22 0.863281H12.78C15.3839 0.863281 17.5 2.97942 17.5 5.58328V13.1433C17.5 14.3951 17.0027 15.5957 16.1175 16.4808C15.2324 17.366 14.0318 17.8633 12.78 17.8633H5.22C2.61614 17.8633 0.5 15.7471 0.5 13.1433V5.58328C0.5 4.33146 0.997284 3.13091 1.88246 2.24574C2.76763 1.36057 3.96818 0.863281 5.22 0.863281ZM5.04 1.66328C4.04809 1.66328 3.09681 2.05732 2.39542 2.7587C1.69403 3.46009 1.3 4.41137 1.3 5.40328V13.3233C1.3 15.3904 2.97286 17.0633 5.04 17.0633H12.96C13.9519 17.0633 14.9032 16.6692 15.6046 15.9679C16.306 15.2665 16.7 14.3152 16.7 13.3233V5.40328C16.7 3.33614 15.0271 1.66328 12.96 1.66328H5.04ZM13.725 4.01328C13.8908 4.01328 14.0497 4.07913 14.1669 4.19634C14.2842 4.31355 14.35 4.47252 14.35 4.63828C14.35 4.80404 14.2842 4.96301 14.1669 5.08022C14.0497 5.19743 13.8908 5.26328 13.725 5.26328C13.5592 5.26328 13.4003 5.19743 13.2831 5.08022C13.1658 4.96301 13.1 4.80404 13.1 4.63828C13.1 4.47252 13.1658 4.31355 13.2831 4.19634C13.4003 4.07913 13.5592 4.01328 13.725 4.01328ZM9 5.36328C10.0609 5.36328 11.0783 5.78471 11.8284 6.53485C12.5786 7.285 13 8.30242 13 9.36328C13 10.4241 12.5786 11.4416 11.8284 12.1917C11.0783 12.9419 10.0609 13.3633 9 13.3633C7.93913 13.3633 6.92172 12.9419 6.17157 12.1917C5.42143 11.4416 5 10.4241 5 9.36328C5 8.30242 5.42143 7.285 6.17157 6.53485C6.92172 5.78471 7.93913 5.36328 9 5.36328ZM9 6.16328C8.15131 6.16328 7.33737 6.50042 6.73726 7.10054C6.13714 7.70066 5.8 8.51459 5.8 9.36328C5.8 10.212 6.13714 11.0259 6.73726 11.626C7.33737 12.2261 8.15131 12.5633 9 12.5633C9.84869 12.5633 10.6626 12.2261 11.2627 11.626C11.8629 11.0259 12.2 10.212 12.2 9.36328C12.2 8.51459 11.8629 7.70066 11.2627 7.10054C10.6626 6.50042 9.84869 6.16328 9 6.16328Z" stroke="#7A7A7A"/>
                            </svg>                    
                        </div>
                        <div className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                            <path d="M17.4167 3.11328C17.9029 3.11328 18.3692 3.30644 18.713 3.65025C19.0568 3.99407 19.25 4.46038 19.25 4.94661V17.7799C19.25 18.2662 19.0568 18.7325 18.713 19.0763C18.3692 19.4201 17.9029 19.6133 17.4167 19.6133H4.58333C4.0971 19.6133 3.63079 19.4201 3.28697 19.0763C2.94315 18.7325 2.75 18.2662 2.75 17.7799V4.94661C2.75 4.46038 2.94315 3.99407 3.28697 3.65025C3.63079 3.30644 4.0971 3.11328 4.58333 3.11328H17.4167ZM16.9583 17.3216V12.4633C16.9583 11.6707 16.6435 10.9106 16.0831 10.3502C15.5226 9.78979 14.7626 9.47495 13.97 9.47495C13.1908 9.47495 12.2833 9.95161 11.8433 10.6666V9.64911H9.28583V17.3216H11.8433V12.8024C11.8433 12.0966 12.4117 11.5191 13.1175 11.5191C13.4579 11.5191 13.7843 11.6543 14.025 11.895C14.2656 12.1357 14.4008 12.4621 14.4008 12.8024V17.3216H16.9583ZM6.30667 8.20995C6.7151 8.20995 7.10681 8.0477 7.39561 7.75889C7.68442 7.47009 7.84667 7.07838 7.84667 6.66995C7.84667 5.81745 7.15917 5.12078 6.30667 5.12078C5.8958 5.12078 5.50177 5.284 5.21124 5.57452C4.92072 5.86505 4.7575 6.25908 4.7575 6.66995C4.7575 7.52245 5.45417 8.20995 6.30667 8.20995ZM7.58083 17.3216V9.64911H5.04167V17.3216H7.58083Z" fill="#7A7A7A"/>
                            </svg>                    
                        </div>                  
                    </div>
                </div>

                <div className="col-lg-2 col-12 mb-lg-0 mb-4">
                    <h5 className="footer-title m-0 p-0 mb-4">Contact Us</h5>
                    <p className="m-0 p-0 footer-caption">
                        <span>Addresses:</span>
                        <br />
                        <span>PERMANENT SITE</span>
                        <br />
                        <span>
                            University of Calabar Teaching Hospital (UCTH) UNICAL Hotel RoadOff Airport Road by CUDACalabar                            
                        </span>
                        <br />
                        <br />
                        <span>
                            OUTSTATION HEALTH FACILITIES
                        </span>
                        <br />
                        <span>
                            Federal Secretariat Clinic, Federal SecretariatMurtala Mohammed Highway, CalabarComprehensive Health Centre, OkoyongOdukpani LGALiaison Office, Abuja                            
                        </span>
                        <br />
                        <br />
                        <span>
                            Phones: 08066722346 08024310194 08025966923 08021236801
                        </span>
                        <br />
                        <span>
                            Phones: 08066722346 08024310194 08025966923 08021236801
                        </span>                        
                    </p>
                </div>
                
                <div className="col-lg-2 col-12 mb-lg-0 mb-4">
                    <h5 className="footer-title m-0 p-0 mb-4">Quick Links</h5>
                    <div>
                        <p className="m-0 p-0 footer-caption mb-4 clickable">ABOUT US</p>
                        <p className="m-0 p-0 footer-caption mb-4 clickable">CMD</p>
                        <p className="m-0 p-0 footer-caption mb-4 clickable">FAQ</p>
                        <p className="m-0 p-0 footer-caption mb-4 clickable">BOARD</p>
                        <p className="m-0 p-0 footer-caption mb-4 clickable">MANAGEMENT TEAM</p>
                    </div>
                </div>

                <div className="col-lg-3 col-12 mb-lg-0 mb-4">
                    <h5 className="footer-title m-0 p-0 mb-4">Our NewsLetter</h5>
                    <div>
                        <input 
                            type="text"
                            className="footer-input p-3 mb-4 w-100"
                            placeholder="Email address"
                        />
                        <button className="p-0 m-0 w-100">
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
                                        Subscribe
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>   
                                    <span>
                                        <svg className="my-2" xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 19" fill="none">
                                            <path d="M22.3333 9.36328L14.3333 1.36328M22.3333 9.36328L14.3333 17.3633M22.3333 9.36328H8.33325M0.999918 9.36328H4.33325" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>                                                                                 
                                    </p>
                                </div>
                            </div>                                    
                        </button>                        
                    </div>
                </div>                
            </div>
        </div>
    )
}