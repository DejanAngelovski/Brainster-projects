import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BreadCrumbs = () => {
  const router = useRouter();
  const getCategoryLabel = () => {
    const {
      tShirts,
      jeans,
      shorts,
      fustani,
      palta,
      underwear,
      pincParty,
      factoryGirl,
      mainDays,
      fraeil,
      urma,
      candleNest,
      beyondGreen,
      gatta,
    } = router.query;

    const category = [
      tShirts,
      jeans,
      shorts,
      fustani,
      palta,
      underwear,
      pincParty,
      factoryGirl,
      mainDays,
      fraeil,
      urma,
      candleNest,
      beyondGreen,
      gatta,
    ].find(Boolean) as string;

    const categoryLabels: { [key: string]: string } = {
      Блузи: "Блузи",
      Панталони: "Панталони",
      Здолништа: "Здолништа",
      Фустани: "Фустани",
      "Палта и јакни": "Палта и јакни",
      "Долна облека": "Долна облека",
      "Pinc PartyWear": "Pinc PartyWear",
      "Factory Girl": "Factory Girl",
      "Main Days": "Main Days",
      Fraeil: "Fraeil",
      Urma: "Urma",
      "Candle Nest": "Candle Nest",
      "Beyond Green": "Beyond Green",
      Gatta: "Gatta",
    };

    return category ? categoryLabels[category] || "Сите" : "Сите";
  };

  return (
    <>
      <Link href={`/`} className="text-dark mr-1">
        Почетна &#62;
      </Link>
      {router.pathname === `/about` ? (
        <p className="m-0">За Нас</p>
      ) : router.pathname === `/faq` ? (
        <p className="m-0">Најчесто поставувани прашања</p>
      ) : router.pathname === `/contact` ? (
        <p className="m-0">Контакт</p>
      ) : router.pathname === "/shop" ? (
        <p className="m-0">{getCategoryLabel()}</p>
      ) : null}
    </>
  );
};

export default BreadCrumbs;
