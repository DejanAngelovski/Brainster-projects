import { BrandType } from "@/type/type";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  dataRes: BrandType[];
}

const BrandPage: NextPage<Props> = ({ dataRes }) => {
  return (
    <>
      <div className="row pt-5">
        {dataRes.map((brand) => {
          return (
            <Link
              href={`/brandPage/${brand.id}`}
              className="col-10 offset-1 pb-3 text-dark"
              style={{ textDecoration: `none` }}
              key={brand.id}
            >
              <div
                className="card"
                style={{ boxShadow: `2px 2px 2px 1px #ffdbdb` }}
              >
                <img
                  src={`${brand.img}`}
                  className="w-100 d-block"
                  style={{ height: `280px` }}
                />
                <div className="card-body">
                  <p className="card-text m-0">{brand.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BrandPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5001/brands`);

  const dataRes: BrandType[] = await res.json();
  return {
    props: {
      dataRes: dataRes,
    },
  };
};
