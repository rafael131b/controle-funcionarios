import React from "react";


const Header = () => {
    return <header className="border border-[#E5E3E9] w-full">
   <nav className="h-16  container  mx-auto w-[1180px]  flex justify-center items-center">
     <div className="w-[1180px] h-8 flex justify-between content-header lg-custom ">
         <div className="flex items-center">
            <span className="w-8 h-8 rotate-0 opacity-100 top-4 left-[130px] rounded bg-primary text-white flex items-center justify-center mr-2">TD</span>
            <h2 className="font-inter font-bold text-base leading-none tracking-normal leading-trim-[none]">Teste Doqr</h2>
        </div>

        <div className=" flex  items-center">
            <span className="w-6 h-6 rotate-0 opacity-100 top-5 left-[1198px] rounded-[28px] bg-[#D0C1F4] mr-2 "></span>
            <h5 className="font-inter font-bold text-base leading-none tracking-normal leading-trim-[none]" >Seu Nome</h5>
        </div>
    </div>
   </nav>
    </header>
}


export default Header