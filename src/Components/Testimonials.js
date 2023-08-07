import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { TestimonialsData } from "../Data/TestimonialsData";
function Testimonials() {
  return (
    <section id="testimonials">
      <div className="pt-32 pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center ">
              <div className=" ">
                <h3 className="text-white text-center font-roboto text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-semibold leading-110"  data-aos="fade-up">
                  Our partners. Our Friends.
                </h3>
                <h3 className="text-[#818CF8] text-center font-roboto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-110]"  data-aos="fade-up" data-aos-delay="100">
                  They love us.
                </h3>
              </div>
            </div>
            <div className="">
              <p className="text-[#CBD5E1] text-center font-roboto text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-140"  data-aos="fade-up" data-aos-delay="200">
                Sem malesuada sed lectus id nunc mattis est eget tincidunt.
              </p>
            </div>
          </div>
          <div className="py-24 lg:pl-12"  data-aos="fade-up"  data-aos-delay="300">
            <style>
              {`
              .swiper-pagination {
               position: static;
               display: flex;
               justify-content: center;
               padding-top: 50px;
               padding-right: ${window.innerWidth > 1000 ? "40px" : "0px"}; 
                 }
             `}
            </style>
            <style>
              {`
        .swiper-pagination-bullet {
          background-color: white;
        }
      `}
            </style>
            <Swiper
              slidesPerView={
                window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 2 : 3
              }
              spaceBetween={10}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="w-[100%] lg:w-[85%] xl:w-[100%]  "
            >
              {TestimonialsData.map((value) => (
                <SwiperSlide>
                  <div className="rounded-lg border-2 border-[#475569]  bg-[#334155]  md:w-[350px]  flex-shrink-0">
                    <div className="flex items-center justify-between px-4 pt-6">
                      <div className="flex items-center  space-x-3">
                        <div>
                          <img src={value.Image1} alt="" className="w-[93px]" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 px-4 h-[210px] overflow-y-hidden ">
                      <p className="text-white font-roboto text-2xl font-normal leading-160 ">
                        {value.description}
                      </p>
                    </div>
                    <div className="flex items-start justify-start pl-4 py-5 gap-x-4">
                      <div>
                        <img src={value.Image2} alt="" width={64} height={64} />
                      </div>
                      <div className="flex flex-col pt-2">
                        <div>
                          <h5 className="text-white font-roboto text-lg font-normal leading-160">
                            {value.Name}
                          </h5>
                        </div>
                        <div>
                          <h6 className="text-[#94A3B8] font-roboto text-base font-normal leading-140">
                            {value.designation}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
