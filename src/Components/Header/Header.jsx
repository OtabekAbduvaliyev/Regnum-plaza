import React from 'react'
import Navbar from './Navabar'
import { TbWorld } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";
const Header = () => {
    return (
        <div className='bgHeader flex flex-col justify-between'>
            <Navbar />
            <header className='flex items-center px-[10px] pb-[50px] sm:px-[20px] md:px-[40px] justify-between lg:px-[60] 2xl:pb-[100px] xl:px-[70px] 2xl:px-[110px]'>
                <div className="headerInf ">

                    <h1 className='text-white font-[600] font-golos text-[50px] lg:text-[55px] 2xl:text-[72px] 2xl:leading-[90px]'>Baxtli hayot maskaniga <br />
                        xush kelibsiz!</h1>
                    <p className='text-white text-[18px] font-golos font-[600] 2xl:mt-[20px] 2xl:text-[24px]' >NRG JOMIY - NRGning yangi biznes-klass turarjoy majmuasi, <br />
mashhur o'rtaosiyolik shoir Abdurahmon Jomiy sharafiga atalgan.</p>
                </div>
                <div className="headerButtons hidden md:flex  flex flex-col items-center font-golos text-[12.6px] gap-[16px]">
                    <button className='w-[56px] h-[56px]  rounded rounded-[50%] text-white bg-[#384D8B] p-[13px] hover:bg-[#5181B8] transiton-all duration-1000'><a target='_blank' href="https://www.youtube.com/">Jonli efir</a></button>
                    <button className='w-[56px] h-[56px]  rounded rounded-[50%] text-white bg-[#384D8B] p-[1.3px] hover:bg-[#5181B8] transiton-all duration-1000 flex flex-col items-center justify-center'><a target='_blank' href="https://earth.google.com/web/"><TbWorld className='text-[22px]'/> 360</a></button>
                    <button className='w-[56px] h-[56px]  rounded rounded-[50%] text-white bg-[#384D8B] p-[13px] hover:bg-[#5181B8] transiton-all duration-1000'><a target='_blank' href="https://zoom.us/"><TbPhoneCall className='text-[20px] sm:text-[24px] m-auto' /></a></button>
                </div>
            </header>
        </div>
    )
}

export default Header