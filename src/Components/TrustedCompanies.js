import React from "react";
import Images from "../Assets/Images";

function TrustedCompanies() {
  return (
    <section className="bg-[#0F172A]">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div>
            <h3 className="text-[#CBD5E1] text-center text-base md:text-2xl font-roboto font-bold leading-tight" data-aos="fade-up">
              Trusted by teams from leading companies
            </h3>
          </div>
          <div className="pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 xl:gap-x-20">
              <div data-aos="fade-up">
                <img src={Images.company1} alt="" className="w-[176px]" />
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <img src={Images.company2} alt="" className="w-[133px]" />
              </div>
              <div data-aos="fade-up" data-aos-delay="150">
                <img src={Images.company3} alt="" className="w-[124px]" />
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <img src={Images.company4} alt="" className="w-[109px]" />
              </div>
              <div data-aos="fade-up" data-aos-delay="250">
                <img src={Images.company5} alt="" className="w-[165px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
