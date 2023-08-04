import React from "react";
function Desktop() {
  return (
    <section>
      <div className="bg-[#4F46E5] ">
        <div className="py-20 md:py-36 md:pt-16 2xl:pb-48 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h3 className="text-white text-center font-roboto font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
                  Diam quam tortor eget id.{" "}
                </h3>
              </div>
              <div>
                <h3 className="text-white text-center font-roboto font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
                  Aliquet lacus volutpat tristique sed diam.
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Desktop;
