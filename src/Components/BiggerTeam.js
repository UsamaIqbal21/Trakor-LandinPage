import React from "react";
import Images from "../Assets/Images";
function BiggerTeam() {
  return (
    <section className="bg-[#0F172A]">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col md:flex-row items-center   justify-center gap-y-8 md:gap-y-0 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
              <div className="flex flex-col items-center md:items-start justify-center gap-y-8 md:w-[600px]">
                <div>
                  <div>
                    <h3 className="text-white text-center md:text-start text-xl md:text-2xl lg:text-3xl font-roboto font-semibold leading-tight">
                      Bigger team.
                    </h3>
                  </div>
                  <div>
                    <h4 className="text-[#818CF8] text-center md:text-start md:text-2xl lg:text-3xl font-roboto font-bold text-xl leading-110">
                      More time.
                    </h4>
                  </div>
                </div>

                <div className="md:pr-12">
                  <p className="text-[#CBD5E1] text-center md:text-start  font-roboto text-base font-normal leading-140 ">
                    Quam quis orci turpis vulputate platea. Urna ipsum suscipit
                    nullam ipsum nam leo fringilla eget lorem. Sit vestibulum
                    phasellus integer et et diam malesuada. Sed tortor orci
                    mauris proin ac. Venenatis euismod mauris quis sit purus
                    nisi. Sed quis eget augue ut aliquam sed.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1 ">
                <div className=" flex items-center justify-center gap-x-4 pl-6">
                  <div>
                    <img
                      src={Images.team1}
                      alt=""
                      className="w-[172px] md:w-[200px] lg:w-[264px]"
                    />
                  </div>
                  <div>
                    <img
                      src={Images.team2}
                      alt=""
                      className="w-[172px] md:w-[200px] lg:w-[264px]"
                    />
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-x-4 pr-6">
                  <div>
                    <img
                      src={Images.team3}
                      alt=""
                      className="w-[123px] md:w-[150px] lg:w-[207px]"
                    />
                  </div>
                  <div>
                    <img
                      src={Images.team4}
                      alt=""
                      className="w-[187px] md:w-[210px] lg:w-[245px]"
                    />
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

export default BiggerTeam;
