import React from "react";
import { homeBlogPosts } from "./auxiliary/homeOurBlogAux";


export default function HomeOurBlog(){

    const displayFirstBlogPost = homeBlogPosts.slice(0, 1).map((homeBlogPost, i) => {
        const { date, img, topic, title, text } = homeBlogPost
        return (
            <div key={i} className="col-lg-11 col-12">
                <div className="mb-2 col-lg-12 col-12">
                    <img src={img} className="col-lg-12 col-12" />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="home-our-blog-large-blog-post-btn px-3">
                        {topic}
                    </button>
                    <p className="m-0 p-0 home-our-blog-large-blog-post-date">
                        {date}
                    </p>
                </div>
                <div>
                    <h3 className="m-0 p-0 home-our-blog-large-blog-post-title">{title}</h3>
                    <p className="home-our-blog-large-blog-post-text">
                        {text}...  <span className="home-our-blog-large-blog-post-read-more">Read More</span>
                    </p>
                </div>
            </div>
        )
    })

    const displayOtherBlogPosts = homeBlogPosts.slice(1).map((homeBlogPost, i) => {
        const { date, img, topic, title, text } = homeBlogPost
        return (
            <div key={i} className="d-flex flex-wrap align-items-center mb-4">
                <div className="mb-lg-0 mb-2">
                    <img src={img} />
                </div>
                <div className="mx-lg-3 mx-0">
                    <h4 className="m-0 p-0 home-our-blog-small-blog-post-title">{title}</h4>
                    <p className="m-0 p-0 home-our-blog-small-blog-post-text">
                        {text}... <span className="home-our-blog-small-blog-post-read-more">Read More</span>
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className="px-lg-5 px-4 py-5">
            <div className="px-2">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <p className="m-0 p-0 mb-4 home-about-caption">BLOGS AND NEWS</p>
                        <h2 className="m-0 p-0 mb-2 home-about-header">
                            Our Latest Blogs
                        </h2>                    
                    </div>
                    <div>
                        <button className="p-0 m-0">
                            <div 
                                className="cont_1 p-0 m-0"
                                style={{
                                    backgroundColor: '#000FB0',
                                    borderRadius: "10px"
                                }}
                            >
                                <div className="cont_2 p-0 m-0"
                                >
                                    <p 
                                        className="cont_3 px-4 py-2 text-white"
                                        style={{
                                            border: "none",
                                            borderRadius: "10px"
                                        }}
                                    >
                                        Read All Blogs
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
                <div className="d-flex flex-wrap justify-content-between align-items-start">
                    <div className="col-lg-5 col-12 mb-lg-0 mb-5">
                        { displayFirstBlogPost }
                    </div>
                    <div className="col-lg-7 col-12">
                        { displayOtherBlogPosts }
                    </div>
                </div>
            </div>
        </div>
    )
}