import React from "react";

function AlwaysTogether() {
  return (
    <section>
      <div className="pt-0 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <div>
              <div>
                <h3 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto font-extrabold leading-tight"data-aos="fade-up">
                  Your team. Your projects.
                </h3>
              </div>
              <div>
                <h5 className="text-[#818CF8] text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto font-medium leading-tight" data-aos="fade-up" data-aos-delay="100">
                  Always together.
                </h5>
              </div>
            </div>

            <div className="md:px-24 lg:px-48 xl:px-72 2xl:px-96">
              <p className="text-[#CBD5E1] text-center text-base font-roboto font-normal leading-relaxed " data-aos="fade-up" data-aos-delay="200">
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-2" data-aos="fade-up" data-aos-delay="300">
              <div className="rounded-md border border-indigo-500 bg-indigo-600 w-[152px] md:w-[172px] py-1">
                <h3 className="text-white text-center font-roboto text-base font-medium leading-snug tracking-tight">
                  Start for free
                </h3>
              </div>
              <div className="rounded-md border border-[#475569] bg-[#334155] w-[152px] md:w-[172px] py-1">
                <h3 className="text-white text-center font-roboto text-base font-medium leading-snug tracking-tight">
                  Request more info
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlwaysTogether;
