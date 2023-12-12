import BreadCrumbs from "@/components/BreadCrumbs";
import { NextPage } from "next";
import React from "react";

const FaqPage: NextPage = () => {
  return (
    <div className="container">
      <BreadCrumbs />
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h4 className="text-center m-0">FAQ</h4>
          <img src="/images/sparks.png" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="accordion" id="accordionExample">
            <div className="faq-card text-muted">
              <div className="" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn collapsed font-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Ова е примерок за прашања кои би биле на страната?
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
            </div>
            <div className="faq-card">
              <div className="bg-pickcard" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn collapsed font-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Ова е примерок за прашања кои би биле на страната?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body bg-pickcard">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
            </div>
            <div className="faq-card">
              <div className="" id="headingThree">
                <h5 className="mb-0 ">
                  <button
                    className="btn collapsed font-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Ова е примерок за прашања кои би биле на страната?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
            </div>
            <div className="faq-card">
              <div className="bg-pickcard" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn collapsed font-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Ова е примерок за прашања кои би биле на страната?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="card-body bg-pickcard">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
