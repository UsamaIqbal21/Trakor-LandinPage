import React from "react";
import Images from "../Assets/Images";
function PowerFullTools() {
  return (
    <section className="relative">
      <div className="absolute top-[-50px] md:top-[-100px] 2xl:top-[-120px] px-4 md:px-16 lg:px-32 xl:px-44 2xl:px-96 "data-aos="fade-up" data-aos-delay="200">
        <img src={Images.desktop} alt="" />
      </div>
      <div className="pt-80 md:pt-[450px] lg:pt-[550px] xl:pt-[650px] 2xl:pt-[750px] pb-20">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-12 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
              <div className="flex flex-col items-start justify-center gap-y-4  lg:gap-y-8 md:w-[600px]">
                <div>
                  <div>
                    <h3 className="text-white font-roboto font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-110" data-aos="fade-up" ata-aos-delay="300">
                      Powerful tools.
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-[#818CF8] font-roboto font-semibold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight" data-aos="fade-up" ata-aos-delay="400"> 
                      More control.
                    </h3>
                  </div>
                </div>
                <div className="xl:pr-12">
                  <p className="text-[#CBD5E1] font-roboto text-base font-normal leading-140" data-aos="fade-up" ata-aos-delay="500">
                    Scelerisque auctor dolor diam tortor, fames faucibus non
                    interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum
                    molestie adipiscing lacinia.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up" ata-aos-delay="600">
                    <div>
                      <img src={Images.check} alt="" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-roboto text-sm font-normal leading-140">
                        Interdum volutpat turpis malesuada ac turpis.
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up" ata-aos-delay="700">
                    <div>
                      <img src={Images.check} alt="" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-roboto text-sm font-normal leading-140">
                        Tortor ipsum pretium quis nunc.
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up" ata-aos-delay="800">
                    <div>
                      <img src={Images.check} alt="" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-roboto text-sm font-normal leading-140">
                        Vitae odio a id purus in.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className=" rounded-md border-1 border-[#6366F1] bg-[#4F46E5]  p-2"data-aos="fade-up" ata-aos-delay="900">
                  <h3 className="text-white font-roboto text-lg font-medium leading-6 tracking-wider text-center ">
                    Start for free
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center md:w-[600px] lg:px-12">
                <div className="xl:w-[485px]" data-aos="fade-up" ata-aos-delay="200">
                  <img src={Images.tool1} alt="" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="xl:w-[288px]" data-aos="fade-up" ata-aos-delay="300">
                    <img src={Images.tool2} alt="" />
                  </div>
                  <div className="pb-4 xl:w-[288px] " data-aos="fade-up" ata-aos-delay="400">
                    <img src={Images.tool3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerFullTools;
