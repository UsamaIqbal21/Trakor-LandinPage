import React from "react";

function YourProjects() {
  return (
    <section className="bg-[#0F172A]">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <div>
              <div>
                <h3 className="text-white text-center text-2xl md:text-3xl lg:text-5xl font-roboto font-semibold leading-tight"  data-aos="fade-up">
                  Your team. Your projects.
                </h3>
              </div>
              <div>
                <h4 className="text-[#818CF8] text-center font-roboto font-semibold text-2xl md:text-3xl lg:text-5xl leading-110"  data-aos="fade-up"data-aos-delay="100">
                  Always together.
                </h4>
              </div>
            </div>
            <div>
              <p className="text-[#CBD5E1] text-center font-roboto text-base font-normal leading-140"  data-aos="fade-up" data-aos-delay="200">
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourProjects;
