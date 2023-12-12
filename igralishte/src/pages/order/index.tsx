import Accordion from "@/components/Accordion";
import MiniStore from "@/components/MiniStore";
import OrderCards from "@/components/OrderCards";
import { ProductType } from "@/type/type";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  products: ProductType[];
  dataRes: ProductType[];
}

const OrderPage: NextPage<Props> = ({ products, dataRes }) => {
  const handleClearLocalStorage = async () => {
    try {
      const updatedData = dataRes.map((product) => ({
        ...product,
        isFavorite: false,
        isOrdered: false,
        amount: 1,
      }));

      await Promise.all(
        updatedData.map(async (product) => {
          const response = await fetch(
            `http://localhost:5001/Igralishteskopje/${product.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(product),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        })
      );

      localStorage.clear();

      const res = await fetch(`http://localhost:5001/Igralishteskopje`);
      const updatedProducts = await res.json();

      setDataRes(updatedProducts);
    } catch (error) {
      console.error("Error updating server-side data:", error);
    }
  };

  const [isOrdered, setIsOrdered] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [data, setDataRes] = useState<ProductType[]>(dataRes);
  useEffect(() => {
    const totalAmount = calcPrice();
    setTotalPrice(totalAmount);
  }, [dataRes]);

  const calcPrice = () => {
    let totalAmount = 0;
    let totalPercentageAmount = 0;
    let shippingCost = 150;

    data.map((prod) => {
      if (prod.isOrdered === true) {
        const currentPercentage = 20;
        const percentageAmount =
          (currentPercentage / 100) * prod.price * prod.amount;
        const discountedPrice = prod.price * prod.amount - percentageAmount;

        totalAmount += discountedPrice;
        totalPercentageAmount += percentageAmount;
      }
    });

    setPercentage(totalPercentageAmount);

    totalAmount += shippingCost;

    return totalAmount;
  };

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-10 offset-1 d-flex text-center py-3 justify-content-between align-items-center w-100">
          <div
            className="d-flex align-items-center"
            onClick={() => {
              setIsOrdered(true);
            }}
          >
            <i
              aria-hidden
              className="fa-solid fa-cart-shopping text-center fa-1x p-2 text-dark "
            ></i>
            <p className="m-0" style={{ fontSize: `20px` }}>
              Кошничка{" "}
            </p>
          </div>

          <div
            className="d-flex align-items-center"
            onClick={() => {
              setIsOrdered(false);
            }}
          >
            <i
              aria-hidden
              className="fa-regular fa-heart text-center fa-1x  p-2 text-dark"
            ></i>
            <p className="m-0" style={{ fontSize: `20px` }}>
              Омилени
            </p>
          </div>
        </div>
        <div
          className="col-10 offset-1"
          style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
        ></div>
      </div>
      {isOrdered == true ? (
        <>
          <div className="row">
            {data.map((product) => {
              if (product.isOrdered == true) {
                return <OrderCards key={product.id} {...product} />;
              }
            })}
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              {data.map((product) => {
                if (product.isOrdered)
                  return (
                    <div className="d-flex justify-content-between">
                      <p>{product.name}</p>
                      <p>{product.price * product.amount} ден.</p>
                    </div>
                  );
              })}
            </div>
            <div className="col-10 offset-1 d-flex justify-content-between">
              <p>+ достава до адреса</p>
              <p>150 ден.</p>
            </div>
            <div className="col-10 offset-1 d-flex justify-content-between">
              <p>1x - 20% попуст!</p>
              <p>- {percentage} ден.</p>
            </div>
            <div
              className="col-10 offset-1"
              style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
            ></div>
            <div className="col-10 offset-1 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Вкупно:</p>
                <p>{totalPrice} ден.</p>
              </div>
            </div>
            <div
              className="col-10 offset-1"
              style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
            ></div>
            <div className="col-10 offset-1 py-3">
              <div className="d-flex justify-content-start align-items-center">
                <Link
                  href={`/order/orderForm`}
                  className="btn w-50 d-block mr-4 p-1"
                  style={{
                    borderRadius: `15px`,
                    border: `1.5px solid #C2C2C2`,
                    background: `var(--Gold-gradient, linear-gradient(99deg, #FFF0BF -10.68%, #EFC990 18.14%, #FDD292 43.87%, rgba(240, 199, 73, 0.42) 81.17%, #D4AF37 100%))`,
                    color: `black`,
                    fontSize: `15px`,
                  }}
                >
                  <button
                    className="btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Продолжи
                  </button>
                </Link>

                <i
                  aria-hidden
                  onClick={() => {
                    handleClearLocalStorage();
                    localStorage.clear();
                  }}
                  className="fa-solid fa-trash"
                  style={{ fontSize: `40px` }}
                ></i>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="row">
          {dataRes.map((product) => {
            if (product.isFavorite == true) {
              return <OrderCards key={product.id} {...product} />;
            }
          })}
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <Accordion />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-12 py-4">
          <h4>Други парчиња</h4>
        </div>
        <MiniStore data={products} />
      </div>
    </div>
  );
};

export default OrderPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5001/Igralishteskopje`);
  const response = await fetch(
    `http://localhost:5001/Igralishteskopje?_start=0&_limit=6`
  );
  const products: ProductType[] = await response.json();
  const dataRes: ProductType[] = await res.json();
  return {
    props: {
      products: products,
      dataRes: dataRes,
    },
  };
};
