import { ProductType } from "@/type/type";
import Link from "next/link";
import React from "react";

const ShopCards: React.FC<ProductType> = ({ id, img, name, price }) => {
  return (
    <div className="col-6 mb-3 d-flex justify-content-center">
      <Link href={`/shop/${id}`} style={{ textDecoration: `none` }}>
        <div className="card border-0 text-dark" style={{ width: "150px" }}>
          <img
            className="card-img-top w-100"
            src={`${img}`}
            alt="Card image cap"
            style={{ height: `186px` }}
          />
          <div className="card-body p-0">
            <p className="card-title" style={{ fontSize: `13px` }}>
              {name}
            </p>
            <span className="card-text">{price} ден.</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopCards;
