import Link from "next/link";
import React from "react";

interface Props {
  position1: string;
  position2: string;
  title1: string;
  title2: string;
  link?: string;
}
const CircleBtn: React.FC<Props> = ({
  position1,
  position2,
  title1,
  title2,
  link,
}) => {
  return (
    <div
      className="pt-4 position-absolute circle-homepage d-block mainPageCircleDecoration"
      style={{
        bottom: position1,
        right: position2,
      }}
    >
      <Link
        href={`${link}`}
        className="text-dark"
        style={{ textDecoration: `none` }}
      >
        <div className="card-text w-100 text-center">
          <img src="/images/sparks.png" alt="" />
          <p style={{ fontSize: `20px` }} className="w-75 ml-auto mr-auto m-0">
            {title1}
          </p>
          <p className="m-0 pb-1 w-50 ml-auto mr-auto small">{title2}</p>

          <img src="/images/arrow.png" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default CircleBtn;
