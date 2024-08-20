import React from 'react'

function HorizontalCard({heading,data,onClickHanlder}) {
    
  return (
    <div className="group card-parent cursor-pointer card bg-base-100 shadow-xl h-[300px] w-full p-4  rounded-none relative">
      <h2 className="text-xl bold mb-4 font-bold">
        {heading}
        <span
          className=" cursor-pointer  text-primary  text-sm font-medium"
          onClick={() => onClickHanlder(data[0].category)}
        >
          see more
        </span>
      </h2>
      <ul
        className="h-full flex flex-row justify-between  overflow-hidden  scroll-smooth "
      >
        {data.map((val, idx) => (
          <li className="h-full inline-block " key={idx}>
            <img
              className="h-full"
              src={val.image}
              
              alt={val.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HorizontalCard