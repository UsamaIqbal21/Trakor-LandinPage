import React from "react";
import Navbar from "./Components/Navbar";
import Images from "./Assets/Images";
import TrustedCompanies from "./Components/TrustedCompanies";
import YourProjects from "./Components/YourProjects";
import BiggerTeam from "./Components/BiggerTeam";
import Desktop from "./Components/Desktop";
import PowerFullTools from "./Components/PowerFullTools";
import TeamManagement from "./Components/TeamManagement";
import Graph from "./Components/Graph";
import ControlTheFlow from "./Components/ControlTheFlow";
import Testimonials from "./Components/Testimonials";
import AlwaysTogether from "./Components/AlwaysTogether";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <section className="bg-[#0F172A]">
        <Navbar />
        <div className="py-20 md:pt-32 lg:pt-44">
          <div className="container mx-auto px-4">
            <div>
              <div className="flex flex-col items-center justify-center gap-y-12">
                <div className="flex flex-col items-center justify-center gap-y-8">
                  <div>
                    <div>
                      <h5 className="text-[#818CF8] text-center text-xl font-roboto font-medium leading-tight">
                        Team Progress Tracking Tool
                      </h5>
                    </div>
                    <div>
                      <h3 className="text-white text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-roboto font-extrabold leading-tight">
                        Track your team progress
                      </h3>
                    </div>
                  </div>

                  <div className="md:px-24 lg:px-48 xl:px-72 2xl:px-96">
                    <p className="text-[#CBD5E1] text-center text-base font-roboto font-normal leading-relaxed ">
                      Ut posuere felis arcu tellus tempus in in ultricies.
                      Gravida id nibh ornare viverra. Ultrices faucibus neque
                      velit risus ac id lorem.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
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
                <div>
                  <img
                    src={Images.hero}
                    alt=""
                    className="w-[248px] lg:w-[284px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TrustedCompanies />
        <YourProjects />
        <BiggerTeam />
        <Desktop />
        <PowerFullTools />
        <TeamManagement/>
        <Graph/>
        <ControlTheFlow/>
        <Testimonials/>
        <AlwaysTogether/>
        <Footer/>
      </section>
    </>
  );
}

export default App;
