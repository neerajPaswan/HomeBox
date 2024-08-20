import React from "react";
import { baseUrl } from "../../App";
import axios from "axios";
import { useState, useEffect } from "react";
// import HomeCard from "../ui-cards/HomeCard";
import { useNavigate,Link } from "react-router-dom";
import DiscountHomeCard from "../ui-cards/DiscountHomeCard";
import HorizontalCard from "./HorizontalCard";
import Loading from "../loading-compoent/Loading";


function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loading ,setLoading] = useState(true)

  const onClickHanlder = (type) => {
        navigate("/home/products", { state: { type: type } });
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentSlide((prevSlide)=>prevSlide==4?1:prevSlide+1);
    },5000)

    return ()=>clearInterval(interval)
  },[])

  useEffect(() => {
    const getData =  async ()=>{
      try {
       await axios.get(`${baseUrl}/product`).then((res) => setProducts(res.data));
       
      } catch (error) {
        navigate("/server-error");
      }
      setLoading(false)
    }
    getData();
    

  }, []);

 

  if (loading) {
    return(  <Loading/>) 
  }

  return (
    <div className="w-full h-full bg-base-300 px-4  pb-12 ">
      <div className="carousel h-[30vh] ls:h-[35vh] md:h-[50vh] w-full overflow-hidden">
        <div className={` carousel-item relative h-full  w-full ${
            currentSlide == 1 ? "block" : "hidden"
          }`}
        >
          <img
            className="w-full h-full"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg"
               
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a onClick={() => setCurrentSlide(4)} className="btn btn-circle">
              ❮
            </a>
            <a
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div className={` carousel-item relative h-full w-full ${
            currentSlide == 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://n3.sdlcdn.com/imgs/k/s/i/utility-86032.jpg"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              onClick={() => setCurrentSlide(currentSlide - 1)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          className={` carousel-item relative w-full h-full ${
            currentSlide == 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Skincare-trust-Mobfdfo._CB554429490_.jpg"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              onClick={() => setCurrentSlide(currentSlide - 1)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          className={` carousel-item relative w-full h-full ${
            currentSlide == 4 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://n2.sdlcdn.com/imgs/k/s/i/ethnicwear-ef4d9.jpg"
            className="w-full h-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              onClick={() => setCurrentSlide(currentSlide - 1)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a onClick={() => setCurrentSlide(1)} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* flex flex-row flex-wrap gap-x-4 py-4 lg:flex-nowrap justify-center item-center gap-y-4 */}
      {products && (
        <div className="grid grid-flow-col grid-rows-4 ls:grid-rows-2 lg:grid-rows-1 gap-x-4 py-4 gap-y-4 overflow-hidden pb-12">
          <DiscountHomeCard
            title={"Up to 60% off | Styles for women & men"}
            data={products
              .filter(
                (value) => value.category == "fashione" && value.image != ""
              )
              .slice(0, 4)}
          />
          <DiscountHomeCard
            title={"Up to 20% off | Mobiles"}
            data={products
              .filter(
                (value) => value.category == "mobiles" && value.image != ""
              )
              .slice(0, 4)}
          />
          <DiscountHomeCard
            title={"Up to 60% off | jewelery"}
            data={products
              .filter(
                (value) => value.category == "jewelery" && value.image != ""
              )
              .slice(0, 4)}
          />
          <DiscountHomeCard
            title={"Up to 60% off | home & kitchen"}
            data={products
              .filter((value) => value.category == "home" && value.image != "")
              .slice(0, 4)}
          />
        </div>
      ) }

      <div className="hidden md:flex py-4  flex-col gap-4">
        
        {products?<HorizontalCard heading={"More watches to consider "} data={products.filter((val)=>val.category=="watches"&&val.image !=" ").slice(0,7)} onClickHanlder={onClickHanlder}/>:" "}

        {products?<HorizontalCard heading={"More watches to consider "} data={products.filter((val)=>val.category=="beauty"&&val.image !=" ").slice(0,7)} onClickHanlder={onClickHanlder}/>:" "}
      </div>

    </div>
  );
}

export default Home;

{/* <div className="class-name ">
        {products ? (
          products.map((value, idx) => (
            <HomeCard key={value._id} data={value} />
          ))
        ) : (
          <h3>loading ...</h3>
        )}

<div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
      </div> */}
