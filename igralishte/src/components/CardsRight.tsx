import Link from "next/link";
import React from "react";
import CircleBtn from "./CircleBtn";

const CardsRight: React.FC = () => {
  return (
    <div className="row pt-3" style={{ paddingBottom: `100px` }}>
      <div className="col-12 p-0 d-flex flex-row-reverse">
        <div className=" position-relative">
          <img src="/images/main-pic.png" alt="" className="img_main" />
          <CircleBtn
            link="/shop"
            position1="-120px"
            position2="95px"
            title1="Valentines gal Колекција"
            title2="Погледнете ги свежите љубовни парчиња"
          />
        </div>
      </div>
    </div>
  );
};

export default CardsRight;
