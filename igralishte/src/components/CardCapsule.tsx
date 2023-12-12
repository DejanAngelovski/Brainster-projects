import React from "react";
import CircleBtn from "./CircleBtn";

const CardCapsule = () => {
  return (
    <div className="row pt-5" style={{ paddingBottom: `130px` }}>
      <div className="col-12 p-0 d-flex flex-row-reverse">
        <div className="position-relative">
          <img
            style={{ width: `320px`, height: `258px` }}
            src="/images/next.png"
            alt=""
          />
          <CircleBtn
            link="/giftCard"
            title1="Gift Cards"
            title2="Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок"
            position1="-180px"
            position2="92px"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCapsule;
