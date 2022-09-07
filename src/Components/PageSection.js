import React from "react";

const PageSection = ({position="left", Header, Paragraph, Image}) => {
    return (
        <div className="page-section mx-auto">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row space-x-40">
                    {position === "left" && Image}
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6 pl-1">                       
                            <p className="font-sans text-3xl font-bold tracking-tight text-primary-blue sm:text-3.5xl sm:leading-none max-w-lg mb-6">
                            {Header}
                            </p>
                            <p className="text-black text-lg font-normal text-default-gray">{Paragraph}</p>
                        </div>
                    </div>
                    {position === "right" && Image}
                </div>
            </div>
        </div>
    )
}

export default PageSection