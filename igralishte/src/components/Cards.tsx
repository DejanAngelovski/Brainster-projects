import React from "react";
import CircleBtn from "./CircleBtn";

const Cards = () => {
  return (
    <div className="row pt-5" style={{ paddingBottom: `100px` }}>
      <div className="col-12 p-0">
        <div className=" position-relative">
          <img src="/images/main-pic2.png" alt="" className="img_main" />
          <CircleBtn
            link="/shop?nakit=Накит&bags=Ташни"
            title1="Козметика & аксесоари"
            title2="Погледни ги свежите љубовни парчиња"
            position1="-120px"
            position2="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
