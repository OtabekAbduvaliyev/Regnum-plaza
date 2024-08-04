import React from 'react'
import archLogo from '../../assets/Frame 200.png'
import windowLogo from '../../assets/Frame 201.png'
import measureLogo from '../../assets/Frame 199.png'
import houseImg from '../../assets/Frame 153.png'
import cardImg from '../../assets/Frame 234.png'
const AboutProject = () => {
  return (
    <div id='aboutproject' className='px-[10px] sm:px-[20px] md:px-[30px] lg:px-[70px] lg:gap-[50px] grid grid-cols-1 xl:grid-cols-2  justify-between 2xl:px-[110px]'>
        <div className="projectInf pt-[64px]  ">
            <div className="projectInfText">
                <h1 className='text-[40px] font-golos font-[600]'>Loyiha haqida</h1>
                <p className='font-golos text-[16px] mt-[16px] text-[#505050] max-w-[686px]'>NRG Qorasuvda hammasi ajoyib! Joylashgan o'rnidan boshlab, xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy majmuasining bolg'usi aholisi uchun parkovkalarning mavjudligigacha puxta o'ylangan. <br /><br />
                NRG Qorasuvda hammasi ajoyib! Joylashgan o'rnidan boshlab, xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy majmuasining bolg'usi aholisi uchun parkovkalarning mavjudligigacha puxta o'ylangan.
                </p>
            </div>
            <div className="projectInfWithIcons mt-[40px] grid sm:grid-cols-2 gap-[56px] lg:gap-[20px] ">
                    <div className="smallcard flex items-center gap-[16px]">
                            <img src={archLogo} alt="arch" />
                            <p className='font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]'  >Rivojlangan <br /> infrotuzulma</p>
                    </div>
                    <div className="smallcard flex items-center gap-[16px]">
                            <img src={measureLogo} alt="arch" />
                            <p className='font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]'  >So‘nggi qavatlardagi  <br /> terrasalar</p>
                    </div>
                    <div className="smallcard flex items-center gap-[16px]">
                            <img src={windowLogo} alt="arch" />
                            <p className='font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]'  >Puxta o‘ylangan <br /> joylashtirish tartibi </p>
                    </div>
                    <div className="smallcard flex items-center gap-[16px]">
                            <img src={windowLogo} alt="arch" />
                            <p className='font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]'  >Ko‘p funksiyali <br /> hovli</p>
                    </div>
                    <div className="smallcard flex items-center gap-[16px]">
                            <img src={measureLogo} alt="arch" />
                            <p className='font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]'  >Zamonaviy  <br /> mualliflik landshafti</p>
                    </div>
                    <div className="smallcard flex items-center gap-[16px]">
                            <img src={archLogo} alt="arch" />
                            <p className='font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]'  >Qulay transport <br /> o‘tkazgichi</p>
                    </div>
            </div>
        </div>
        <div className="projectImg ml-auto mt-[50px]">
            <img src={houseImg} alt="" /><a target='_blank' href="https://www.google.com/maps/place/Regnum+plaza%2FPlatinum+house/@41.3315456,69.3216545,17.41z/data=!4m6!3m5!1s0x38aef5aa65329b4d:0xf131613fc9d2627c!8m2!3d41.3313601!4d69.3237459!16s%2Fg%2F11svls15bs?entry=ttu">
            <img src={cardImg} alt="" className='mt-[-100px] lg:ml-[-100px] 2xl:mt-[-250px] 2xl:ml-[-150px]' />
            </a>
        </div>
    </div>
  )
}

export default AboutProject