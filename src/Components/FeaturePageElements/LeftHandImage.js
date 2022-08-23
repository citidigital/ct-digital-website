import React from "react";

const LeftHandImage = ({lhiHeader, lhiParagraph, lhiImage}) => {
    return (
        <div className="leftHandImage">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">                        
                    {lhiImage}
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">         
                        <div className="max-w-xl mb-6">                            
                            <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                            {lhiHeader}
                            </h2>
                            <p className="text-black text-base md:text-lg">{lhiParagraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default LeftHandImage