import BreadCrumbs from "@/components/BreadCrumbs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AboutPage: NextPage = () => {
  const route = useRouter();
  const [isSelectedLeft, setIsSelectedLeft] = useState<boolean>(true);

  return (
    <div className="container pt-3">
      <BreadCrumbs />
      <div className="row">
        <div className="col-10 offset-1 py-3 text-center d-flex align-items-center justify-content-center">
          <img src="/images/sparks.png" alt="" />
          <h4 className="m-0">За Нас</h4>
        </div>
      </div>
      <div className="row">
        <div
          className="col-10 offset-1 d-flex text-center py-3 justify-content-center align-items-center w-100"
          style={{
            height: `30px`,
            borderRadius: `8px`,
            border: `0.8px solid #c2c2c2`,
            background: `#fff6f6`,
          }}
        >
          <p
            className="small m-0 mr-1"
            onClick={() => {
              setIsSelectedLeft(true);
            }}
          >
            Наша приказна
          </p>
          |
          <p
            className="small m-0 ml-1"
            onClick={() => {
              setIsSelectedLeft(false);
            }}
          >
            Наша работа
          </p>
        </div>
      </div>
      <div className="row">
        {isSelectedLeft ? (
          <div className="col-12 pt-5">
            <img
              src="/images/gift-card.png"
              alt=""
              className="w-100 d-block"
              style={{ height: `340px` }}
            />
            <h4 className="pt-3">Кои сме ние?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos.
              Itaque laboriosam possimus atque doloribus ducimus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Alias dolore, tenetur
              facere dolorum ipsum soluta hic ad voluptate quos. Itaque
              laboriosam possimus atque doloribus ducimus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos.
              Itaque laboriosam possimus atque doloribus ducimus.
            </p>
          </div>
        ) : (
          <div className="col-12 pt-5">
            <img
              src="/images/gift-card2.png"
              alt=""
              className="w-100 d-block"
              style={{ height: `340px` }}
            />
            <h4 className="pt-3">Наша работа</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos.
              Itaque laboriosam possimus atque doloribus ducimus
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos.
              Itaque laboriosam possimus atque doloribus ducimus.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
