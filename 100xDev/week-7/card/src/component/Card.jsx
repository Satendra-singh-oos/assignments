import React from "react";

const Card = ({ className, img, name, age, city, followers, like, photos }) => {
  return (
    <div className="border border-gray-300 w-80 flex justify-center items-center flex-col bg-white rounded-lg">
      <div className="mt-5 ">
        <img
          src={img}
          alt="image"
          height={140}
          width={140}
          className="rounded-full"
        />

        <div className="flex items-center justify-center ">
          <h1 className="text-center text-gray-700 font-bold text-2xl mt-2">
            {name}
          </h1>
          <p className="ml-2 text-gray-400"> {age}</p>
        </div>
        <p className="text-center text-gray-500 ">{city}</p>
      </div>
      <div className="flex items-center justify-center  gap-5 mt-8 text-gray-700  w-full ">
        <div className="p-2">
          <h1 className="">{followers}</h1>
          <h3 className="">Followers</h3>
        </div>

        <div className="p-2">
          <h1 className="">{like}</h1>
          <h3 className="">Likes</h3>
        </div>

        <div className="p-2">
          <h1 className="">{photos}</h1>
          <h3 className="">Photos</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
