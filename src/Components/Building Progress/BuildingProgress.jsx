import React, { useState } from "react";
import houseImg from "../../assets/667288101a0e426b4925e214bff4a004.png";
import houseImg2 from "../../assets/b7550d79a7c9ccab546c44aa6b95c52d.png";
import houseImg3 from "../../assets/eb77eb72ce2d9b4428893d5fdf694ee2.png";
import houseImg4 from "../../assets/4a8bc346e0c12a12d6b0abafd87f1786.png";
import { Carousel, Modal } from "antd";
import "antd/dist/reset.css";
const BuildingProgress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="">
        <Modal
          title="Qurilish jarayoni"
          visible={isModalOpen}
          onCancel={closeModal}
          footer={null}

          className="w-[100%] max-w-[1400px]"
          bodyStyle={{ padding: 0 }}
        >
          <Carousel
            arrows
            infinite={true}
            dots={false}
            draggable={true}
            className="w-full h-[full]"
          >
            <div>
              <img src={houseImg} alt="" className="w-[100%]"/>
            </div>
            <div>
              <img src={houseImg2} alt="" className="w-[100%]"/>
            </div>
            <div>
              <img src={houseImg3} alt="" className="w-[100%]"/>
            </div>
            <div>
              <img src={houseImg4} alt="" className="w-[100%]"/>
            </div>
          </Carousel>
        </Modal>
      </div>
      <div className="px-[10px] pt-[64px] max-w-[500px] px-[15px] sm:px-[0px] sm:max-w-[650px] md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1680px] m-auto">
        <div className="heading">
          <h1 className="text-[32px] font-[600] font-golos">
            Qurilish jarayoni
          </h1>
        </div>
        <div className="progressCards flex flex-col items-center md:flex-row md:flex-wrap justify-between gap-[2px]">
          <div className="progressCard mt-[45px] cursor-pointer">
            <img
              
              onClick={openModal}
              src={houseImg}
              alt=""
              className="lg:w-[100%] lg:max-w-[290px] lg:h-[200px] 2xl:max-w-[400px] w-[100%] md:w-[150px] md:h-[120px] rounded-[16px] "
            />
            <p className="text-[16px] font-[600] font-golos mt-[16px] xl:text-[18px] 2xl:text-[24px]">
              Iyun
            </p>
          </div>
          <div className="progressCard mt-[45px] cursor-pointer">
            <img
            onClick={openModal}
              src={houseImg2}
              alt=""
              className="lg:w-[100%] lg:max-w-[290px] lg:h-[200px] 2xl:max-w-[400px] w-[100%] md:w-[150px] md:h-[120px] rounded-[16px]"
            />
            <p className="text-[16px] font-[600] font-golos mt-[16px] xl:text-[18px] 2xl:text-[24px]">
              May
            </p>
          </div>
          <div className="progressCard mt-[45px] cursor-pointer">
            <img
            onClick={openModal}
              src={houseImg3}
              alt=""
              className="lg:w-[100%] lg:max-w-[290px] lg:h-[200px] 2xl:max-w-[400px] w-[100%] md:w-[150px] md:h-[120px] rounded-[16px]"
            />
            <p className="text-[16px] font-[600] font-golos mt-[16px] xl:text-[18px] 2xl:text-[24px]">
              Mart
            </p>
          </div>
          <div className="progressCard mt-[45px] cursor-pointer">
            <img
            onClick={openModal}
              src={houseImg4}
              alt=""
              className="lg:w-[100%] lg:max-w-[290px] lg:h-[200px] 2xl:max-w-[400px] w-[100%] md:w-[150px] md:h-[120px] rounded-[16px]"
            />
            <p className="text-[16px] font-[600] font-golos mt-[16px] xl:text-[18px] 2xl:text-[24px]">
              Aprel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingProgress;
