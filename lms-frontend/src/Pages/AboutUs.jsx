import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import AboutImag from "../Assets/Images/aboutMainImage.png";
import apj from "../Assets/Images/apj.png";
import billGates from "../Assets/Images/billGates.png";
import einstein from "../Assets/Images/einstein.png";
import nelsonMandela from "../Assets/Images/nelsonMandela.png";
import steveJobs from "../Assets/Images/steveJobs.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className=" w-1/2 space-y-10">
            <h1 className=" text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className=" text-xl text-gray-200">
              Our goal is to provide the affordable and quality to the world.we
              are providing the platform for the aspiring teachers and students
              to share their skills,cretivity and knowledge to each other to
              empower and contribute in the growth and wellness of mankind.
            </p>
          </section>

          <div className=" w-1/2">
            <img
              className=" drop-shadow-2xl"
              id="test1"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0));" }}
              src={AboutImag}
              alt="about image"
            />
          </div>
        </div>

        {/* About Carousel Start */}
        <div className="carousel w-1/2 my-16 m-auto">
        
          <div id="slide1" className="carousel-item relative w-full"> 
            <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apj}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className=" text-xl text-gray-200">{"If you fail, never give up because FAIL means First Attempt In Learning."}</p>
              <h3 className=" text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={billGates}
                  className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className=" text-xl text-gray-200">{"Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself."}</p>
              <h3 className=" text-2xl font-semibold">Bill Gates</h3>
                <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={nelsonMandela}
                  className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className=" text-xl text-gray-200">{"Education is the powerful tool can you to change the world."}</p>
              <h3 className=" text-2xl font-semibold">Nelson Mandela</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={steveJobs}
                  className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className=" text-xl text-gray-200">{"We're here to put a dent in the universe. Otherwise why else even be here?"}</p>
              <h3 className=" text-2xl font-semibold">Steve Jobs</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={einstein}
                  className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className=" text-xl text-gray-200">{"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."}</p>
              <h3 className=" text-2xl font-semibold">Albert Einstein</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
           
        </div>

        

      </div>
    </HomeLayout>
  );
}

export default AboutUs;