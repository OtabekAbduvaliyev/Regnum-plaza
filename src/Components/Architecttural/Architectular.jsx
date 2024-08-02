import React, { useState } from 'react'
import floor from '../../assets/floor.png'
const Architectular = () => {
    const [change, setChange] = useState(true);
    const handleChange = () => {
      setChange(!change);
    };
  return (
    <div className='px-[10px] pt-[64px] md:px-[30px] lg:px-[70px] 2xl:px-[110px]'>
        <div className="controllSection text-center lg:flex items-center justify-between">
            <h1 className='text-[35px] font-golos font-[600] sm:text-center 2xl:text-[48px]'>Xonadonlarning o‘ylangan rejalari</h1>
            <div className="buttons bg-[#F6F6F4] inline-flex rounded-[32px] p-[2px] mt-[20px] lg:mt-[0px]">
                <button  className='text-[12px] py-[10px] px-[10px] bg-[#384D8B] text-[white] font-golos rounded rounded-[32px] xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]'>Hammasi</button>
                <button className={`${!change ? 'bg-[#384D8B] text-white':'bg-transparet '} text-balck font-golos font-[500] py-[10px] px-[10px] text-[12px] 2xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>1-xonali</button>
                <button className={`${!change ? 'bg-[#384D8B] text-white':'bg-transparet '} text-balckfont-golos font-[500] py-[10px] px-[10px] text-[12px] 2xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>2-xonali</button>
                <button className={`${!change ? 'bg-[#384D8B] text-white':'bg-transparet '} text-balckfont-golos font-[500] py-[10px] px-[10px] text-[12px] 2xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>3-xonali</button>
                <button className={`${!change ? 'bg-[#384D8dB] text-whitdqe':'bg-transparet '} font-golos font-[500] py-[10px] px-[10px] text-[12px] 2xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>4-xonali</button>
            </div>
        </div>
        <div className="imgs flex flex-col items-center mt-[30px] sm:flex-row sm:justify-between xl:px-[80px] ">
            <img src={floor} alt="" className='max-w-[180px] xl:max-w-[220px] w-[100%]'/>
            <img src={floor} alt="" className='max-w-[180px] xl:max-w-[220px] w-[100%]'/>
            <img src={floor} alt="" className='max-w-[180px] xl:max-w-[220px] w-[100%]'/>
        </div>
    </div>
  )
}

export default Architectular