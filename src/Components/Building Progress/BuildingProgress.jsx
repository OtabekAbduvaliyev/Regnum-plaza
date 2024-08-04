import React from "react";
import houseImg from "../../assets/667288101a0e426b4925e214bff4a004.png";
import houseImg2 from "../../assets/b7550d79a7c9ccab546c44aa6b95c52d.png";
import houseImg3 from "../../assets/eb77eb72ce2d9b4428893d5fdf694ee2.png";
import houseImg4 from "../../assets/4a8bc346e0c12a12d6b0abafd87f1786.png";
const BuildingProgress = () => {
  return (
    <div className="px-[10px] pt-[64px] sm:px-[30px] md:px-[40px] lg:px-[70px] 2xl:px-[100px]">
      <div className="heading">
        <h1 className="text-[32px] font-[600] font-golos">Qurilish jarayoni</h1>
      </div>
      <div className="progressCards flex flex-col items-center md:flex-row md:flex-wrap justify-between">
        <div className="progressCard mt-[45px]">
          <img
            src={houseImg}
            alt=""
            className="max-w-[427px] w-[100%] rounded-[16px]  xl:max-w-[350px]  2xl:max-w-[400px]"
          />
          <p className="text-[20px] font-[600] font-golos mt-[16px] xl:text-[24px]">Iyun</p>
        </div>
        <div className="progressCard mt-[45px]">
          <img
            src={houseImg2}
            alt=""
            className="max-w-[427px] w-[100%] rounded-[16px] xl:max-w-[350px] 2xl:max-w-[400px]"
          />
          <p className="text-[20px] font-[600] font-golos mt-[16px] xl:text-[24px]">May</p>
        </div>
        <div className="progressCard mt-[45px]">
          <img
            src={houseImg3}
            alt=""
            className="max-w-[427px] w-[100%] rounded-[16px] xl:max-w-[350px] 2xl:max-w-[400px]"
          />
          <p className="text-[20px] font-[600] font-golos mt-[16px] xl:text-[24px]">Mart</p>
        </div>
        <div className="progressCard mt-[45px]">
          <img
            src={houseImg4}
            alt=""
            className="max-w-[427px] w-[100%] rounded-[16px] xl:max-w-[350px] 2xl:max-w-[400px]"
          />
          <p className="text-[20px] font-[600] font-golos mt-[16px] xl:text-[24px]">Aprel</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingProgress;
