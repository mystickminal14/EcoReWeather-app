import React from "react";
import "./banner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "./poster";
import watch from "../../Assets/watch.png";
import Two from "./Two";
export default function Banner() {
  console.log(data);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 515, min: 356 },
      items: 2,
    },
    mobilePhone: {
        breakpoint: { max: 358, min: 0 },
        items: 1,
      }
  };

  return (
    <>
      <div className="banner flex justify-center gap-10 my-6 ">
        <div className="left w-[700px]">
          <div className="sale">
            <h2>Wild</h2>
            <h1>SALE</h1>
            <h6>UP TO 50% OFF!</h6>
            <button className="saleB">SHOP NOW</button>
          </div>

          <Carousel
            className=" caroP w-[510px] "
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "superLargeDesktop",
              "desktop",
            ]}
          >
            {data.map((item, i) => (
              <div className="bCards" key={item.id}>
                <div className="imgC">
                  <img src={item.url} alt="products" />
                </div>
                <button className="saleB">Rs. {item.price}</button>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="riight w-[450px] ">
          <div className="bestSel w-[200px]">
            <h1>TOP SELLER</h1>
            <div className="imgWatch">
              <img src={watch} alt="watch" />
            </div>
            <button className="saleB">SHOP NOW</button>
          </div>
          <div className="two">
            <Two title='SUMMER' obj='SALE' pp='25%'/>
            <Two  title='BUY' obj='ONE' pp='GET ONE'/>
          </div>
        </div>
      </div>
    </>
  );
}
