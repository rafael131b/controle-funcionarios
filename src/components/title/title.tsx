import React from "react"

interface TitleProps {
    title:string;
    subtitle?:string
}
const Title = ({title,subtitle}:TitleProps) => {
    return <>
        <h1 className="font-inter font-bold text-4xl leading-none tracking-normal leading-trim-[none]">
            {title}
        </h1>
        {subtitle &&  <h2 className="font-inter font-bold text-xl leading-none tracking-normal leading-trim-[none] text-[#0B0B0C] mt-4">{subtitle}</h2>}

       
    </>
}

export default Title;