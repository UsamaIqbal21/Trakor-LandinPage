import React from "react";
import Images from "../Assets/Images";
function TeamManagement() {
  return (
    <section>
      <div className="pt-8 lg:pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col md:flex-row item-center justify-center gap-y-8 md:gap-y-0 lg:gap-x-12 lg:px-12">
              <div className="flex flex-col items-start justify-center gap-y-4  lg:gap-y-8 md:w-[600px]  ">
                <div>
                  <div>
                    <h3 className="text-white font-roboto font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-110" data-aos="fade-up">
                      Team management.
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-[#818CF8] font-roboto font-semibold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight" data-aos="fade-up" data-aos-delay="100">
                      Effortless syncronization.
                    </h3>
                  </div>
                </div>
                <div className="xl:pr-12">
                  <p className="text-[#CBD5E1] font-roboto text-base font-normal leading-140" data-aos="fade-up"data-aos-delay="200" >
                    Massa nunc nisi fames adipiscing scelerisque placerat et
                    sagittis cursus. Mi commodo id maecenas amet, elementum a,
                    in.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up" data-aos-delay="300">
                    <div>
                      <img src={Images.check} alt="" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-roboto text-sm font-normal leading-140">
                        Est et in pharetra magna adipiscing aliquam.
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up" data-aos-delay="400">
                    <div>
                      <img src={Images.check} alt="" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-roboto text-sm font-normal leading-140">
                        Tellus arcu sed consequat ac velit ut eu blandit.
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up" data-aos-delay="500">
                    <div>
                      <img src={Images.check} alt="" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-roboto text-sm font-normal leading-140">
                        Ullamcorper ornare in et egestas dolor orci.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className=" rounded-md border-1 border-[#6366F1] bg-[#4F46E5] p-2" data-aos="fade-up" data-aos-delay="600">
                  <h3 className="text-white font-roboto text-lg font-medium leading-6 tracking-wider text-center ">
                    Start for free
                  </h3>
                </div>
              </div>
              <div className="md:w-[600px]" data-aos="fade-up" data-aos-delay="700">
                <img src={Images.management} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamManagement;
