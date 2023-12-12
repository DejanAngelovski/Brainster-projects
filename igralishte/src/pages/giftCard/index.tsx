import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";

const GiftCardPage: NextPage = () => {
  const [areIngredientHidden, setAreIngredientHidden] = useState<string | null>(
    null
  );

  const toggleIngredientVisibility = (productId: string) => {
    if (areIngredientHidden === productId) {
      setAreIngredientHidden(null);
    } else {
      setAreIngredientHidden(productId);
    }
  };
  return (
    <div className="row pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 pb-3">
            <h3 className="text-center">Gift картички за подарок</h3>
          </div>
          <div className="col-12 pb-3">
            <div className="card position-relative">
              <img
                src="/images/gift-card.png"
                alt=""
                style={{ opacity: `0.8` }}
              />
              <div
                className="position-absolute d-flex align-items-center justify-content-between w-100 giftCard_banner p-1"
                style={{ top: `14px` }}
              >
                <p className="m-0 pl-3">Partygirl Gift card</p>
                <img
                  src="/images/Star.png"
                  alt=""
                  className="mr-3 position-absolute"
                  style={{ right: `0`, width: `44px`, height: `44px` }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 pb-3">
            <div className="card position-relative">
              <img
                src="/images/gift-card2.png"
                alt=""
                style={{ opacity: `0.8` }}
              />
              <div
                className="position-absolute d-flex align-items-center justify-content-between w-100 giftCard_banner flex-row-reverse p-1"
                style={{ bottom: `14px` }}
              >
                <p className="m-0 pr-3">Partygirl Gift card</p>
                <img
                  src="/images/Star.png"
                  alt=""
                  className="mr-3 position-absolute"
                  style={{ left: `0`, width: `44px`, height: `44px` }}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card position-relative">
              <img
                src="/images/gift-card3.png"
                alt=""
                style={{ opacity: `0.8` }}
              />
              <div
                className="position-absolute d-flex align-items-center justify-content-between w-100 giftCard_banner p-1"
                style={{ bottom: `14px` }}
              >
                <p className="m-0 pl-3">Partygirl Gift card</p>
                <img
                  src="/images/Star.png"
                  alt=""
                  className="mr-3 position-absolute"
                  style={{ right: `0`, width: `44px`, height: `44px` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 text-center py-4">
            <h4>Одбери цена на подарок картичка:</h4>
          </div>
          <div className="col-10 offset-1 pb-4">
            <button
              className="w-100 giftCard-button btn"
              id="1"
              onClick={() => {
                toggleIngredientVisibility(`1`);
              }}
            >
              {" "}
              {areIngredientHidden !== `1` ? (
                `500 ден.`
              ) : (
                <Link href={`/order/orderForm`}>
                  <p style={{ fontSize: `20px` }} className="m-0 text-dark">
                    Додадено <br /> кон кошничката
                  </p>
                </Link>
              )}
            </button>
          </div>
          <div className="col-10 offset-1 pb-4">
            <button
              className="w-100 giftCard-button btn"
              id="2"
              onClick={() => {
                toggleIngredientVisibility(`2`);
              }}
            >
              {" "}
              {areIngredientHidden !== `2` ? (
                `1000 ден.`
              ) : (
                <Link href={`/order/orderForm`}>
                  <p style={{ fontSize: `20px` }} className="m-0 text-dark">
                    Додадено <br /> кон кошничката
                  </p>
                </Link>
              )}
            </button>
          </div>
          <div className="col-10 offset-1 pb-4">
            <button
              className="w-100 giftCard-button btn"
              id="3"
              onClick={() => {
                toggleIngredientVisibility(`3`);
              }}
            >
              {" "}
              {areIngredientHidden !== `3` ? (
                `2000 ден.`
              ) : (
                <Link href={`/order/orderForm`}>
                  <p style={{ fontSize: `20px` }} className="m-0 text-dark">
                    Додадено <br /> кон кошничката
                  </p>
                </Link>
              )}
            </button>
          </div>
          <div className="col-10 offset-1 pb-4">
            <button
              className="w-100 giftCard-button btn"
              id="4"
              onClick={() => {
                toggleIngredientVisibility(`4`);
              }}
            >
              {" "}
              {areIngredientHidden !== `4` ? (
                `2500 ден.`
              ) : (
                <Link href={`/order/orderForm`}>
                  <p style={{ fontSize: `20px` }} className="m-0 text-dark">
                    Додадено <br /> кон кошничката
                  </p>
                </Link>
              )}
            </button>
          </div>
          <div className="col-10 offset-1">
            <button
              className="w-100 giftCard-button btn"
              id="5"
              onClick={() => {
                toggleIngredientVisibility(`5`);
              }}
            >
              {" "}
              {areIngredientHidden !== `5` ? (
                `4000 ден.`
              ) : (
                <Link href={`/order/orderForm`}>
                  <p style={{ fontSize: `20px` }} className="m-0 text-dark">
                    Додадено <br /> кон кошничката
                  </p>
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardPage;
