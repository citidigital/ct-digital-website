import React from "react";
import Facebook from "../Assets/Facebook";
import Twitter from "../Assets/Twitter"
import Instagram from "../Assets/Instagram"
import Logo from "../Assets/Logo"

const Footer = () => {
    return (
        <div className="footer">
            <div class="bg-gray-100 pt-5">
            <div className="max-w-screen-xl pt-20 px-20 sm:px-6 text-gray-800 sm:grid md:grid-cols-5 sm:grid-cols-2 mx-auto">
                <div className="">
                    <Logo />
                </div>
                <div className="">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Contact</div>
                    <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com <span className="text-teal-600 text-xs p-1"></span></a> 
                </div>                
                <div className="">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
                    <a className="my-3 block" href="/#">1200 S Figueroa St. <br/>Los Angeles CA 90015 <br/>United States <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com <span className="text-teal-600 text-xs p-1"></span></a> 
                </div>                
                <div className="">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Services</div>
                    <a className="my-3 block" href="/#">Design <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Consulting <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Management <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Marketing <span className="text-teal-600 text-xs p-1"></span></a> 
                </div>
                <div className="">
                    <div className="text-sm uppercase text-indigo-600 font-bold">SiteMap</div>
                    <a className="my-3 block" href="/#">About <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Services <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Case Studies <span className="text-teal-600 text-xs p-1"></span></a> 
                </div>
            </div>
            </div>
            <div className="bg-gray-100 pt-2">
            <div className="flex pb-5 px-5 m-auto pt-5 border-t text-gray-800 text-sm flex-row
                max-w-screen-xl">
                <div className="mt-25">CT Digital © 2021 / ALL RIGHTS RESERVED</div>
                <div className="md:flex-auto md:flex-row-reverse mt-25 flex-row flex">
                        <a href="/#" className="w-5 mx-7">
                            <Twitter />
                        </a>
                        <a href="/#" className="w-5 mx-7">
                            <Instagram />
                        </a>
                        <a href="/#" className="w-5 mx-7">
                            <Facebook />
                        </a>
                        <span>Follow us:  </span>               
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer