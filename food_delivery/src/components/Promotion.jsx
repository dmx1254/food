import React from "react";

const Promotion = ({ item }) => {
  const bgClass = `${item?.color}`;
  return (
    <div
      className={`flex flex-row items-center w-[30%] h-[208px] justify-around p-2 rounded-[10px] transition duration-500 ease-in-out hover:-translate-y-8`}
      style={{ backgroundColor: bgClass }}
    >
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-lg text-white font-bold">{item?.title}</h2>
        <span className="text-lg text-white font-semibold">
          {item?.subTitle}
        </span>
        <button
          className="flex items-center justify-center text-lg font-bold transition duration-500 ease-in-out py-2 px-8 bg-white rounded-[15px] hover:scale-105"
          style={{
            color: bgClass,
          }}
        >
          {item?.btnTitle}
        </button>
      </div>
      <img
        className="w-[200px] h-48 bg-cover bg-center"
        src={item?.promo}
        alt={`promotion-${item?.id}`}
      />
    </div>
  );
};

export default Promotion;
