import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/fb.png";
import project2 from "../assets/images/ecom.png";
import project3 from "../assets/images/cars.png";
import project4 from "../assets/images/pos.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Facebook App",
      github_link: "https://github.com/Nagavshiva/FACEBOOK-CLONE-MERN",
      live_link: "https://luminous-zabaione-06e5c7.netlify.app",
    },
    {
      img: project2,
      name: "Ecommerce App",
      github_link: "https://github.com/Nagavshiva/ECOMMERCE-APP-MERN",
      live_link: "https://shoppymy-mern.herokuapp.com",
    },
    {
      img: project3,
      name: "Car Rent App",
      github_link: "https://github.com/Nagavshiva/CAR-RENT-APP-MERN",
      live_link: "https://rentapp-mern.herokuapp.com",
    },
    {
      img: project4,
      name: "POS App",
      github_link:"https://github.com/Nagavshiva/POS-MERN",
      live_link: " https://pos--app-mern.herokuapp.com",
    },
  ];
  return (
    <section id="projects" className="text-white mt-96 pt-40">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative justify-center">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block" rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block" rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;