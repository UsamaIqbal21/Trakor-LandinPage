import React from "react";
import Images from "../Assets/Images";
function Graph() {
  return (
    <section>
      <div className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row  rounded-lg border border-[#475569]">
          <div className="flex flex-col items-center justify-center  px-4 ">
            <div className="flex flex-col items-start justify-center gap-y-8 md:gap-y-4 pt-4  md:py-6 lg:py-8 md:pl-4 lg:w-[608px] ">
              <div>
                <h3 className="text-white font-medium text-lg xl:text-3xl 2xl:text-4xl leading-110" data-aos="fade-up">
                  Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.
                </h3>
              </div>
              <div>
                <p className="text-[#CBD5E1] font-roboto text-base font-normal leading-140" data-aos="fade-up" data-aos-delay="100">
                  Risus sit suscipit et nibh. Morbi pretium volutpat eget
                  habitasse habitant elementum dignissim arcu mauris.
                  Ullamcorper euismod id commodo mi nec. Sit egestas mauris
                  imperdiet feugiat eros, sapien at pellentesque.
                </p>
              </div>
              <div>
                <div className="rounded-md border border-[#475569] bg-[#334155] w-[152px] md:w-[172px] py-2" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-white text-center font-roboto text-base font-medium leading-snug tracking-tight">
                    Request more info
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 md:pt-40 lg:pt-24 lg:w-[608px] 2xl:w-full" data-aos="fade-up" data-aos-delay="300">
            <img src={Images.graph} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Graph;
