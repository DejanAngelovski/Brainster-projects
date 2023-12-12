import BreadCrumbs from "@/components/BreadCrumbs";
import MiniStore from "@/components/MiniStore";
import { ProductType } from "@/type/type";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  miniShopData: ProductType[];
}

const WhyNotPage: NextPage<Props> = ({ miniShopData }) => {
  return (
    <>
      <BreadCrumbs />
      <div className="row pb-3">
        <div className="col-12 d-flex align-items-center">
          <img src="/images/sparks.png" alt="" />
          <h4 className="m-0">Зш да не</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <img src="images/zshdane.png" alt="" className="d-block w-100" />
          <p className="pt-3">
            Концептот на @zshdane_se базира на неколку прашања:
          </p>

          <ul className="p-0">
            <li>
              Дали постои простор за етикетирања и табу во овој безобразно
              неетички свет?
            </li>
            <li>Зошто фолирањето култура е поприфатено од искрениот отпор?</li>
            <li>
              Дали треба да се срамиме од сопственото само за друг да биде
              мирен?
            </li>
            <li>Дали ќе ни текне?</li>
          </ul>
          <p className="pb-1">
            Зачувај го слободниот дух и биди тоа што си с е к о г а ш .
          </p>
          <p>
            Погледнете ги производите на Зш да не кои ги нудиме во Игралиште.
            Имаме доста голем избор на Pussy привезоци кои се кул и ултра
            феминистички, а.к.а. grl pwr.
          </p>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-12">
          <h3>Парчиња од брендот:</h3>
        </div>
      </div>
      <div className="row">
        <MiniStore data={miniShopData} />
      </div>
    </>
  );
};

export default WhyNotPage;

export const getStaticProps: GetStaticProps = async () => {
  const miniShopRes = await fetch(
    `http://localhost:5001/Igralishteskopje?_start=0&_limit=6`
  );

  const miniShopData: ProductType[] = await miniShopRes.json();

  return {
    props: {
      miniShopData: miniShopData,
    },
  };
};
