import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function DiscountHomeCard({title,data}) {
    const navigate = useNavigate();
    let category = data[0].category;
    const onClickHanlder = () => {
        
        navigate("/home/products", { state: { type: category } });
  };
    
  return (
    <div className=" card bg-base-100 shadow-xl w-full h-[400px] rounded-none p-6 	relative">
          <h2 className="text-xl bold mb-4 font-bold">{title}</h2>
          <div className="not-prose grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-8 overflow-hidden pb-12">
            {data.map((val,idx)=>(<div className="text-sm text-center bg-cover bg-center  font-medium w-auto " key={idx} >
              <img src={val.image} alt="image" className='w-[100%] h-[100%] ' />
              <span className=''>{val.title.split(" ")[0]}</span>
            </div>))}
          </div>
          <p className="absolute cursor-pointer bottom-4 text-primary" onClick={()=>onClickHanlder()}>see more</p>
        </div>
  )
}

export default DiscountHomeCard


{/* <div className="text-sm font-medium ">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" />
              <span>start at 499</span>
            </div>
            <div className="text-sm font-medium ">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" />
              <span>start at 499</span>
            </div>
            <div className="text-sm font-medium ">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" />
              <span>start at 499</span>
            </div>
            <div className="text-sm font-medium ">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" />
              <span>start at 499</span>
            </div> */}