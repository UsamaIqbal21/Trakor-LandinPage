import React from "react";
import Images from "../Assets/Images";
function ControlTheFlow() {
  return (
    <section className="bg-[#1E293B]">
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-4 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-20">
              <div className="flex flex-col gap-y-8 md:w-[600px]">
                <div>
                  <h3 className="text-white  font-roboto text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-110">
                    Control the flow.
                  </h3>
                  <h3 className="text-[#818CF8] font-roboto text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-110">
                    Work faster.
                  </h3>
                </div>
                <div>
                  <p className="font-roboto text-white text-sm font-normal leading-140">
                    Risus sit suscipit et nibh. Morbi pretium volutpat eget
                    habitasse habitant elementum dignissim arcu mauris.
                    Ullamcorper euismod id commodo mi nec. Sit egestas mauris
                    imperdiet feugiat eros, sapien at pellentesque.
                  </p>
                </div>
                <div className="w-[186px]">
                  <div className=" rounded-md border-1 border-[#6366F1] bg-[#4F46E5]  p-2">
                    <h3 className="text-white font-roboto text-lg font-medium leading-6 tracking-wider text-center ">
                      Start for free
                    </h3>
                  </div>
                </div>
              </div>
              <div className="md:w-[680px]">
                <img src={Images.flow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlTheFlow;
