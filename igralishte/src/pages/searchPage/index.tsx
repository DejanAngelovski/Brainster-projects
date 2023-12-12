import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ProductType } from "@/type/type";
import ShopCards from "@/components/ShopCards";

interface Props {
  data: ProductType[];
}

const SearchPage: NextPage<Props> = ({ data }) => {
  return (
    <div className="row pt-3">
      {data.map((product) => {
        return <ShopCards key={product.id} {...product} />;
      })}
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data: ProductType | undefined = undefined;
  if (query?.titleValue) {
    const resData = await fetch(
      `http://localhost:5001/Igralishteskopje?category_like=${query.titleValue}`
    );
    data = await resData.json();
  }

  return {
    props: {
      data: data,
    },
  };
};
