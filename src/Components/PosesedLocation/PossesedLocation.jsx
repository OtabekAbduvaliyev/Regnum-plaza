import React from 'react'
import feedbackImg from '../../assets/Frame 241.png'

import houseImg from '../../assets/Group 46778.png'
const PossesedLocation = () => {
  return (
    <div className='px-[10px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:flex lg:gap-[50px] 2xl:px-[110px] pb-[144px] 2xl:justify-between' id='place'>
        <div className="ujeImg">
            <img src={houseImg} alt="" />
        </div>
        <div className="psLocationInf mt-[20px]">
            <h1 className='text-[30px] 2xl:text-[40px] font-[600] font-golos'>Joylashgan o'rni</h1>
            <p className='text-[18px] lg:text-[14px] 2xl:text-[18px] text-[#505050] font-golos mt-[16px] 2xl:items-center'>Qorasuv dahasi - Toshkentdagi tarixiy qaror topgan ko'rkam hudud. Bu yerda bir <br /> maromdagi hayot surati va poytaxtning dinamik maromi muvaffagiyatli tarzda <br /> uyg'unlashadi. <br /> <br />Bu yerda yashash ajoyib, biznes bilan shug'ullanish esa qulay <br /> Transport infratuzilmasi shaharning istalgan nuqtasiga oson yetib borish <br /> imkonini beradi: Siz faqat istagan va zarur yo'nalishingizni tanlashingiz kifoya.</p>
            <img className='mt-[30px]' src={feedbackImg} alt="" />
        </div>
    </div>
  )
}

export default PossesedLocation