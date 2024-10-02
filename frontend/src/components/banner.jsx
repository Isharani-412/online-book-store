import React from "react";
import bannerImage from "../../public/banner(girl-no-bg).png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">
            Hello, Welcome to our bookstore! Here you can find something{" "}
            <span className="text-pink-500">New every day!!</span> Happy
            reading!
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            doloribus ab recusandae reprehenderit ex earum impedit illo
            voluptatum minima! Accusantium quae eligendi soluta excepturi
            obcaecati, a quia ab minima placeat neque provident fugiat hic et
            ipsa blanditiis, labore aliquam?
          </p>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow px-4 py-2 border border-gray-300 rounded-md" placeholder="Email" />
          </label>
        </div>
        <button className="btn mt-6 btn-secondary">Secondary</button>
      </div>
      <div className="w-full  order-1 md:order-2">
        <img src={bannerImage} className="w-70 h-70" alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
