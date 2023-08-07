import React from "react";
import Images from "../Assets/Images";
function Footer() {
  return (
    <section className="bg-[#334155]">
      <div className="pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className=" lg:px-12 2xl:px-16">
            <div
              className="flex flex-col md:flex-row items-start md:justify-start justify-center gap-y-8 md:gap-y-0
             md:gap-x-12 lg:gap-x-16 xl:gap-x-28 2xl:gap-x-36 border-[#334155] border-b-2 pb-12 lg:pl-4 xl:pl-16 2xl:pl-20 "
            >
              <div className="flex flex-col items-start md:items-start gap-y-3">
                <div>
                  <h4 className="text-white text-basetext-start font-roboto font-medium leading-tight" data-aos="fade-up">
                    Product
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base text-start  font-roboto font-medium leading-tight" data-aos="fade-up">
                    Pricing
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base text-start  font-roboto font-medium leading-tight" data-aos="fade-up">
                    Overview
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base text-start  font-roboto font-medium leading-tight" data-aos="fade-up">
                    Browse
                  </h4>
                </div>
                <div className="flex items-center justify-center gap-x-2" data-aos="fade-up">
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" >
                    Accessibility
                  </h4>
                  <img
                    src={Images.badge}
                    alt=""
                    className="w-[37px] h-[17px] mt-1"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start  gap-y-3">
                <div>
                  <h4 className="text-white text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Solutions
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Brainstorming
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Ideation
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Wireframing
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Research
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <div>
                  <h4 className="text-white text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Resources
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Help Center
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Blog
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Tutorials
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    FAQs
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <div>
                  <h4 className="text-white text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Support
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Contact Us{" "}
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Developers
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Documentation
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Integrations
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <div>
                  <h4 className="text-white text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Company
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    About{" "}
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Press
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Events
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                    Request Demo
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-center md:justify-between md:items-center pt-6 gap-y-4 md:gap-y-0 lg:px-8 xl:px-12 2xl:px-16 lg:pt-12">
              <div>
                <h4 className="text-[#E2E8F0] font-roboto text-base font-normal leading-relaxed" data-aos="fade-up">
                  Trakor @ 2023
                </h4>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-center pt-3 md:pt-0 md:gap-x-2 gap-y-2">
                <div className="flex items-center justify-center gap-x-6">
                  <div>
                    <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                      Terms of Service
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                      Privacy Policy
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-[#E2E8F0]  text-base font-roboto font-medium leading-tight" data-aos="fade-up">
                      Manage Cookies
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center justify-start gap-x-5  pt-3 md:pt-0 gap-y-3 md:gap-y-0 md:pl-12">
                  <div className="flex items-center  justify-center gap-x-2">
                    <div data-aos="fade-up">
                      <img src={Images.youtube} alt="" width={24} height={24} />
                    </div>
                    <div data-aos="fade-up">
                      <img
                        src={Images.facebook}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div data-aos="fade-up">
                      <img src={Images.twitter} alt="" width={24} height={24} />
                    </div>
                    <div data-aos="fade-up">
                      <img
                        src={Images.instagram}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div data-aos="fade-up">
                      <img
                        src={Images.linkedin}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <div data-aos="fade-up">
                      <img src={Images.appStore} alt="" className="w-[119px]" />
                    </div>
                    <div data-aos="fade-up">
                      <img
                        src={Images.playstore}
                        alt=""
                        className="w-[135px]"
                      />
                    </div>
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

export default Footer;
