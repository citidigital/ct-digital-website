import React from "react";

const PageSection = ({position="left", Header, Paragraph, Image}) => {
    return (
        <div className="page-section py-3 md:py-16 lg:py-20 md:px-13">
            <div className={`md:flex ${position === "right" && 'flex-row-reverse md:space-x-reverse'} items-center w-full mb-10 md:space-x-40`}>
                {Image}
                <div className="mb-16 lg:mb-0 lg:pr-5">
                    <div className="mb-6 pl-1">                       
                        <p className="text-3xl font-semibold text-primary-blue sm:text-3.5xl sm:leading-none max-w-lg mb-6 text-center md:text-left md:mt-0 mt-6">
                        {Header}
                        </p>
                        <p className="text-default-gray text-base md:text-lg leading-7 md:text-left text-center mt-6">{Paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageSection