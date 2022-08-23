import React from "react";

const RightHandImage = ({rhiHeader, rhiParagraph, rhiImage}) => {
    return (
        <div className="rightHandImage">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">                       
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                            {rhiHeader}
                            </h2>
                            <p className="text-black text-base md:text-lg">{rhiParagraph}</p>
                        </div>
                    </div>
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        {rhiImage}    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightHandImage