import React, { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitPullRequest } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
// import "swiper/css/navigation";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const hotRepo = [
  {
    id: 0,
    organization: "Oven",
    orgImg: "https://avatars.githubusercontent.com/u/108928776?s=200&v=4",
    name: "Bun",
    description: "Incredibly fast JavaScript runtime, bundler, transpiler and package manager.",
    upvoted: false,
    issues: "503",
    stars: "27.7k",
    PR: "262",
    img: [
      "https://avatars.githubusercontent.com/u/709451?s=64&v=4",
      "https://avatars.githubusercontent.com/u/2148168?s=64&v=4",
      "https://avatars.githubusercontent.com/u/70155278?s=64&v=4",
      "https://avatars.githubusercontent.com/u/56601352?s=64&v=4",
      "https://avatars.githubusercontent.com/u/790659?s=64&v=4",
    ],
  },
  {
    id: 1,
    organization: "Pocketbase",
    orgImg: "https://avatars.githubusercontent.com/u/101000011?s=200&v=4",
    name: "Pocketbase",
    description: "Open Source realtime backend in 1 file",
    upvoted: false,
    issues: "72",
    stars: "7.3k",
    PR: "32",
    img: [
      "https://avatars.githubusercontent.com/u/8248071?s=64&v=4",
      "https://avatars.githubusercontent.com/u/43366254?s=64&v=4",
      "https://avatars.githubusercontent.com/u/38179369?s=64&v=4",
      "https://avatars.githubusercontent.com/u/26606825?s=64&v=4",
      "https://avatars.githubusercontent.com/u/8593614?s=64&v=4",
    ],
  },
  {
    id: 2,
    organization: "Open-Sauced",
    orgImg: "https://avatars.githubusercontent.com/u/57568598?s=200&v=4",
    name: "Open-Sauced",
    description: " This is a project to identify your next open source contribution.",
    upvoted: false,
    issues: "293",
    stars: "726",
    PR: "1k",
    img: [
      "https://avatars.githubusercontent.com/u/5713670?s=64&v=4",
      "https://avatars.githubusercontent.com/u/237133?s=64&v=4",
      "https://avatars.githubusercontent.com/u/11777161?s=64&v=4",
      "https://avatars.githubusercontent.com/u/14043845?s=64&v=4",
      "https://avatars.githubusercontent.com/u/22990146?s=60&v=4",
    ],
  },
  {
    id: 3,
    organization: "FreeCodeCamp",
    orgImg: "https://avatars.githubusercontent.com/u/9892522?s=200&v=4",
    name: "FreeCodeCamp",
    description: "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    upvoted: false,
    issues: "16k",
    stars: "350k",
    PR: "30k",
    img: [
      "https://avatars.githubusercontent.com/u/1884376?s=64&v=4",
      "https://avatars.githubusercontent.com/u/25180681?s=64&v=4",
      "https://avatars.githubusercontent.com/u/544954?s=64&v=4",
      "https://avatars.githubusercontent.com/u/15801806?s=64&v=4",
      "https://avatars.githubusercontent.com/u/18572518?s=64&v=4",
    ],
  },
  {
    id: 4,
    organization: "VueJs",
    orgImg: "https://avatars.githubusercontent.com/u/6128107?s=200&v=4",
    name: "Vue",
    description: "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
    upvoted: false,
    issues: "9.7k",
    stars: "198k",
    PR: "2.2k",
    img: [
      "https://avatars.githubusercontent.com/u/499550?s=64&v=4",
      "https://avatars.githubusercontent.com/u/664177?s=64&v=4",
      "https://avatars.githubusercontent.com/u/72989?s=64&v=4",
      "https://avatars.githubusercontent.com/u/4620458?s=64&v=4",
      "https://avatars.githubusercontent.com/u/2883231?s=64&v=4",
    ],
  },
  {
    id: 5,
    organization: "Flutter",
    orgImg: "https://avatars.githubusercontent.com/u/14101776?s=200&v=4",
    name: "Flutter",
    description: "Flutter makes it easy and fast to build beautiful apps for mobile and beyond",
    upvoted: false,
    issues: "60k",
    stars: "143k",
    PR: "36.4k",
    img: [
      "https://avatars.githubusercontent.com/u/8975114?s=64&v=4",
      "https://avatars.githubusercontent.com/u/551196?s=64&v=4",
      "https://avatars.githubusercontent.com/u/1269969?s=64&v=4",
      "https://avatars.githubusercontent.com/u/351029?s=64&v=4",
      "https://avatars.githubusercontent.com/u/15253456?s=60&v=4",
    ],
  },
  {
    id: 6,
    organization: "The Algorithms",
    orgImg: "https://avatars.githubusercontent.com/u/20487725?s=200&v=4",
    name: "Python",
    description: "All Algorithms implemented in Python",
    upvoted: false,
    issues: "1k",
    stars: "140k",
    PR: "5.1k",
    img: [
      "https://avatars.githubusercontent.com/u/3709715?s=64&v=4",
      "https://avatars.githubusercontent.com/u/14276147?s=64&v=4",
      "https://avatars.githubusercontent.com/u/24757020?s=64&v=4",
      "https://avatars.githubusercontent.com/u/67177269?s=64&v=4",
      "https://avatars.githubusercontent.com/u/14369357?s=64&v=4",
    ],
  },
];

const HotRepositoriesCarousel = () => {
  const [hotRepos, setHotRepos] = useState(hotRepo);

  const handleVoted = (id: number) => {
    const votedIdx = hotRepos.findIndex((obj) => obj.id == id);
    hotRepos[votedIdx].upvoted = !hotRepos[votedIdx].upvoted;

    setHotRepos([...hotRepos]);
  };
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   // infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  // };
  return (
    <div className="px-4 max-w-screen-xl mx-auto">
      <div className="flex space-x-3 items-center mb-7">
        <img src="/hotIcon.png" alt="Hot Repo Icon" className="h-5 w-5" />
        <h1 className="text-white font-bold text-2xl">Hot Repositories</h1>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        // autoHeight={true}
        className="mySwiper h-[12rem]"
      >
        {hotRepos.map((repo) => (
          <SwiperSlide key={repo.id} className="  ">
            <div className="p-4 rounded-lg border bg-white space-y-1 h-full relative w-full">
              <div className="flex justify-between w-full">
                <div className="flex space-x-1 items-center">
                  <img src={repo.orgImg} alt="Hot Repo Icon" className="h-4 w-4 rounded-md overflow-hidden" />
                  <span className="text-xs text-gray-400">{repo.organization}</span>
                </div>
                <button
                  className={`px-2 py-0.5 border rounded-lg flex justify-center items-center space-x-1 text-[10px] transition-all duration-200 ${
                    repo.upvoted ? "text-saucyRed border-saucyRed " : "text-grey border-gray-500 "
                  }`}
                  onClick={() => handleVoted(repo.id)}
                >
                  <span className="">{repo.upvoted ? "voted" : "upvote"}</span>
                  {repo.upvoted ? <RiCheckboxCircleFill className="" /> : <FaArrowAltCircleUp className="" />}
                </button>
              </div>

              <div className="flex flex-col pb-10">
                <h1 className="text-xl font-semibold">{repo.name}</h1>
                <p className="text-gray-500 text-xs w-5/6">{repo.description}</p>
              </div>

              <div className="flex items-center justify-between absolute bottom-3 inset-x-0 px-4">
                <div className="flex space-x-3 text-xs">
                  <div className="flex space-x-1 justify-center items-center">
                    <VscIssues />
                    <span>{repo.issues}</span>
                  </div>

                  <div className="flex space-x-1 justify-center items-center">
                    <AiOutlineStar />
                    <span>{repo.stars}</span>
                  </div>

                  <div className="flex space-x-1 justify-center items-center">
                    <BiGitPullRequest />
                    <span>{repo.PR}</span>
                  </div>
                </div>

                <div className="-space-x-2 flex hover:space-x-0 transition-all duration-300 ">
                  {repo.img.map((avatarImg) => (
                    <img
                      key={avatarImg}
                      src={avatarImg}
                      alt="Contributor"
                      className="w-5 h-5 rounded-full border border-white "
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotRepositoriesCarousel;

// swiper
/**
 * <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        spaceBetween={10}
        slidesPerView={2}
        centeredSlides={true}
        // autoHeight={true}
        className="mySwiper border-4 border-red-500"
      >
        {hotRepos.map((repo) => (
          <SwiperSlide key={repo.id} className="border-teal-400 border-4 ">
            <div className="p-4 rounded-lg bg-white space-y-1 relative ">

              <div className="flex justify-between w-full">
                <div className="flex space-x-1 items-center">
                  <img src={repo.orgImg} alt="Hot Repo Icon" className="h-4 w-4 rounded-md overflow-hidden" />
                  <span className="text-xs text-gray-400">{repo.organization}</span>
                </div>
                <button
                  className={`px-2 py-0.5 border rounded-lg flex justify-center items-center space-x-1 text-[10px] transition-all duration-200 ${
                    repo.upvoted ? "text-saucyRed border-saucyRed " : "text-grey border-gray-500 "
                  }`}
                  onClick={() => handleVoted(repo.id)}
                >
                  <span className="">{repo.upvoted ? "voted" : "upvote"}</span>
                  {repo.upvoted ? <RiCheckboxCircleFill className="" /> : <FaArrowAltCircleUp className="" />}
                </button>
              </div>

              <div className="flex flex-col pb-10">
                <h1 className="text-xl font-semibold">{repo.name}</h1>
                <p className="text-gray-500 text-xs w-5/6">{repo.description}</p>
              </div>

              <div className="flex items-center justify-between absolute bottom-3 inset-x-0 px-4">

                <div className="flex space-x-3 text-xs">
                  <div className="flex space-x-1 justify-center items-center">
                    <VscIssues />
                    <span>{repo.issues}</span>
                  </div>

                  <div className="flex space-x-1 justify-center items-center">
                    <AiOutlineStar />
                    <span>{repo.stars}</span>
                  </div>

                  <div className="flex space-x-1 justify-center items-center">
                    <BiGitPullRequest />
                    <span>{repo.PR}</span>
                  </div>
                </div>

                <div className="-space-x-2 flex hover:space-x-0 transition-all duration-300 ">
                  {repo.img.map((avatarImg) => (
                    <img
                      key={avatarImg}
                      src={avatarImg}
                      alt="Contributor"
                      className="w-5 h-5 rounded-full border border-white "
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 */

// slider
/**
 * <Slider {...settings} className=" border-4 border-red-500 h-[12rem]">
        {hotRepos.map((repo) => (
          <div key={repo.id} className="border-teal-400 border-4 h-full w-full">
            <div className="p-4 rounded-lg bg-white space-y-1 relative h-[12rem]">

              <div className="flex justify-between w-full">
                <div className="flex space-x-1 items-center">
                  <img src={repo.orgImg} alt="Hot Repo Icon" className="h-4 w-4 rounded-md overflow-hidden" />
                  <span className="text-xs text-gray-400">{repo.organization}</span>
                </div>
                <button
                  className={`px-2 py-0.5 border rounded-lg flex justify-center items-center space-x-1 text-[10px] transition-all duration-200 ${
                    repo.upvoted ? "text-saucyRed border-saucyRed " : "text-grey border-gray-500 "
                  }`}
                  onClick={() => handleVoted(repo.id)}
                >
                  <span className="">{repo.upvoted ? "voted" : "upvote"}</span>
                  {repo.upvoted ? <RiCheckboxCircleFill className="" /> : <FaArrowAltCircleUp className="" />}
                </button>
              </div>

              <div className="flex flex-col pb-10">
                <h1 className="text-xl font-semibold">{repo.name}</h1>
                <p className="text-gray-500 text-xs w-5/6">{repo.description}</p>
              </div>

              <div className="flex items-center justify-between absolute bottom-3 inset-x-0 px-4">
                <div className="flex space-x-3 text-xs">
                  <div className="flex space-x-1 justify-center items-center">
                    <VscIssues />
                    <span>{repo.issues}</span>
                  </div>

                  <div className="flex space-x-1 justify-center items-center">
                    <AiOutlineStar />
                    <span>{repo.stars}</span>
                  </div>

                  <div className="flex space-x-1 justify-center items-center">
                    <BiGitPullRequest />
                    <span>{repo.PR}</span>
                  </div>
                </div>
                <div className="-space-x-2 flex hover:space-x-0 transition-all duration-300 ">
                  {repo.img.map((avatarImg) => (
                    <img
                      key={avatarImg}
                      src={avatarImg}
                      alt="Contributor"
                      className="w-5 h-5 rounded-full border border-white "
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
 */

// pure grid
/**
 * <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full my-5">
        {hotRepos.map((repo) => (
          <div key={repo.id} className="p-4 border rounded-lg bg-white w-full space-y-1 relative">

            <div className="flex justify-between w-full">
              <div className="flex space-x-1 items-center">
                <img src={repo.orgImg} alt="Hot Repo Icon" className="h-4 w-4 rounded-md overflow-hidden" />
                <span className="text-xs text-gray-400">{repo.organization}</span>
              </div>
              <button
                className={`px-2 py-0.5 border rounded-lg flex justify-center items-center space-x-1 text-[10px] transition-all duration-200 ${
                  repo.upvoted ? "text-saucyRed border-saucyRed " : "text-grey border-gray-500 "
                }`}
                onClick={() => handleVoted(repo.id)}
              >
                <span className="">{repo.upvoted ? "voted" : "upvote"}</span>
                {repo.upvoted ? <RiCheckboxCircleFill className="" /> : <FaArrowAltCircleUp className="" />}
              </button>
            </div>

            <div className="flex flex-col pb-10">
              <h1 className="text-xl font-semibold">{repo.name}</h1>
              <p className="text-gray-500 text-xs w-5/6">{repo.description}</p>
            </div>

            <div className="flex items-center justify-between absolute bottom-3 inset-x-0 px-4">

              <div className="flex space-x-3 text-xs">
                <div className="flex space-x-1 justify-center items-center">
                  <VscIssues />
                  <span>{repo.issues}</span>
                </div>

                <div className="flex space-x-1 justify-center items-center">
                  <AiOutlineStar />
                  <span>{repo.stars}</span>
                </div>

                <div className="flex space-x-1 justify-center items-center">
                  <BiGitPullRequest />
                  <span>{repo.PR}</span>
                </div>
              </div>

              <div className="-space-x-2 flex hover:space-x-0 transition-all duration-300 ">
                {repo.img.map((avatarImg) => (
                  <img
                    key={avatarImg}
                    src={avatarImg}
                    alt="Contributor"
                    className="w-5 h-5 rounded-full border border-white "
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
 */
