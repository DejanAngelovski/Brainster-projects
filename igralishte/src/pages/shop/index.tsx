import BreadCrumbs from "@/components/BreadCrumbs";
import ShopCards from "@/components/ShopCards";
import { ProductType } from "@/type/type";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

interface Props {
  dataRes: ProductType[];
}

const ProductPage: NextPage<Props> = ({ dataRes }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const router = useRouter();
  const inputRefTShirt = useRef<HTMLInputElement>(null);
  const inputRefSkirt = useRef<HTMLInputElement>(null);
  const inputRefJacket = useRef<HTMLInputElement>(null);
  const inputRefShorts = useRef<HTMLInputElement>(null);
  const inputRefUnderwear = useRef<HTMLInputElement>(null);
  const inputRefJeans = useRef<HTMLInputElement>(null);
  const inputRefPincParty = useRef<HTMLInputElement>(null);
  const inputRefFactoryGirl = useRef<HTMLInputElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputRefMainDays = useRef<HTMLInputElement>(null);
  const inputRefFraeil = useRef<HTMLInputElement>(null);
  const inputRefUrma = useRef<HTMLInputElement>(null);
  const inputRefCandleNest = useRef<HTMLInputElement>(null);
  const inputRefBeyondGreen = useRef<HTMLInputElement>(null);
  const inputRefGatta = useRef<HTMLInputElement>(null);
  const sizeXLRef = useRef<HTMLInputElement>(null);
  const sizeLRef = useRef<HTMLInputElement>(null);
  const sizeMRef = useRef<HTMLInputElement>(null);
  const sizeSRef = useRef<HTMLInputElement>(null);
  const sizeXSRef = useRef<HTMLInputElement>(null);
  const price400SRef = useRef<HTMLInputElement>(null);
  const price1000SRef = useRef<HTMLInputElement>(null);
  const price2000SRef = useRef<HTMLInputElement>(null);
  const price2500SRef = useRef<HTMLInputElement>(null);
  const price2600SRef = useRef<HTMLInputElement>(null);
  const colorRedRef = useRef<HTMLInputElement>(null);
  const colorGreenRef = useRef<HTMLInputElement>(null);
  const colorOrangeRef = useRef<HTMLInputElement>(null);
  const colorYellowRef = useRef<HTMLInputElement>(null);
  const colorBlueRef = useRef<HTMLInputElement>(null);
  const colorPinkRef = useRef<HTMLInputElement>(null);
  const colorPurpleRef = useRef<HTMLInputElement>(null);
  const colorGrayRef = useRef<HTMLInputElement>(null);
  const colorWhiteRef = useRef<HTMLInputElement>(null);
  const colorBlackRef = useRef<HTMLInputElement>(null);
  const nakitRef = useRef<HTMLInputElement>(null);
  const bagsRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {isFilterOpen == false && (
        <div className="container">
          <div className="row py-3">
            <div className="col-12 d-flex">
              <BreadCrumbs />
            </div>
          </div>

          <div className="row pb-4">
            <div className="col-12 d-flex justify-content-between">
              <div
                style={{
                  borderRadius: `6px`,
                  border: `0.624px solid #c2c2c2`,
                  width: `32px`,
                }}
                className="d-flex align-items-center justify-content-center"
                onClick={() => {
                  setIsFilterOpen(true);
                }}
              >
                <img src="/images/filterGlass.png" />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-0 mr-2" style={{ fontSize: `16px` }}>
                  Подреди според
                </p>
                <select
                  value={router.query.value || ``}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    router.push({
                      pathname: `/shop`,
                      query: {
                        ...router.query,
                        value: event.target.value,
                      },
                    });
                  }}
                  style={{
                    borderRadius: `6px`,
                    border: `0.624px solid #c2c2c2`,
                    fontSize: `12px`,
                    width: `95px`,
                  }}
                >
                  <option disabled value={""}>
                    Filter by:
                  </option>
                  <option value="desc">Најнови - Најстари</option>
                  <option value="asc">Најстари - Најнови</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            {dataRes.length > 0 ? (
              dataRes.map((product) => {
                return <ShopCards key={product.id} {...product} />;
              })
            ) : (
              <p>Нема производи со поставените филтри</p>
            )}
          </div>
          <div className="row">
            <div className="col-10 offset-1 d-flex justify-content-center pagination">
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `1`,
                      max: `10`,
                      page: `1`,
                    },
                  });
                }}
              >
                &laquo;
              </a>
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `1`,
                      max: `10`,
                      page: `1`,
                    },
                  });
                }}
              >
                1
              </a>
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `11`,
                      max: `20`,
                      page: `2`,
                    },
                  });
                }}
              >
                2
              </a>
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `11`,
                      max: `20`,
                      page: `2`,
                    },
                  });
                }}
              >
                &raquo;
              </a>
            </div>
          </div>
        </div>
      )}
      <div
        className={`d-flex ${
          !isFilterOpen ? `filterMenuClosed` : `filterMenuOpen`
        } flex-column py-3 px-3 bg-brownish`}
        id="filterMenu"
        style={{ background: `#fdfdfd`, borderTop: `1px solid black` }}
      >
        <div className="row">
          <div className="col-12">
            <input
              ref={inputTextRef}
              type="text"
              className="w-100 searchBarCostume"
              placeholder="    Пребарувај..."
            />
            <i
            aria-hidden
              onClick={() => {
                if (inputTextRef.current?.value) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      titleValue: inputTextRef.current.value.toLowerCase(),
                    },
                  });
                } else {
                  const { titleValue, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
                if (inputTextRef.current) inputTextRef.current.value = ``;
              }}
              style={{ top: `10px` }}
              className={`fa-solid fa-magnifying-glass text-dark ${
                isFilterOpen
                  ? `position-absolute magnifying-glass-position`
                  : ``
              }`}
            ></i>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Категорија</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefTShirt}
              onClick={() => {
                if (inputRefTShirt.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      tShirts: `Блузи`,
                    },
                  });
                } else {
                  const { tShirts, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="" className="">
              Блузи{" "}
              {`(${
                dataRes.filter((products) =>
                  products.category.includes(`Блузи`)
                ).length || 5
              })`}
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefJeans}
              onClick={() => {
                if (inputRefJeans.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      jeans: `Панталони`,
                    },
                  });
                } else {
                  const { jeans, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">
              Панталони{" "}
              {`(${
                dataRes.filter((products) =>
                  products.category.includes(`Панталони`)
                ).length || 2
              })`}
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefShorts}
              onClick={() => {
                if (inputRefShorts.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      shorts: `Здолништа`,
                    },
                  });
                } else {
                  const { shorts, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">
              Здолништа / шорцеви
              {`(${
                dataRes.filter((products) =>
                  products.category.includes(`Здолништа`)
                ).length || 2
              })`}
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefSkirt}
              onClick={() => {
                if (inputRefSkirt.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      fustani: `Фустани`,
                    },
                  });
                } else {
                  const { fustani, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">
              Фустани{" "}
              {`(${
                dataRes.filter((products) =>
                  products.category.includes(`Фустани`)
                ).length || 2
              })`}
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefJacket}
              onClick={() => {
                if (inputRefJacket.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      palta: `Палта и јакни`,
                    },
                  });
                } else {
                  const { palta, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">
              Палта и јакни{" "}
              {`(${
                dataRes.filter((products) =>
                  products.category.includes(`Палта и јакни`)
                ).length || 3
              })`}
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefUnderwear}
              onClick={() => {
                if (inputRefUnderwear.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      underwear: `Долна облека`,
                    },
                  });
                } else {
                  const { underwear, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">
              Долна облека{" "}
              {`(${
                dataRes.filter((products) =>
                  products.category.includes(`Долна облека`)
                ).length || 2
              })`}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Брендови</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          <div className="col-10 offset-1">
            <input
              ref={inputRefPincParty}
              type="checkbox"
              onClick={() => {
                if (inputRefPincParty.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      pincParty: `Pinc PartyWear`,
                    },
                  });
                } else {
                  const { pincParty, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="" className="">
              Pinc Party Wear
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefFactoryGirl}
              onClick={() => {
                if (inputRefFactoryGirl.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      factoryGirl: `Factory Girl`,
                    },
                  });
                } else {
                  const { factoryGirl, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Factory Girl</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefMainDays}
              onClick={() => {
                if (inputRefMainDays.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      mainDays: `Main Days`,
                    },
                  });
                } else {
                  const { mainDays, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Main Days</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefFraeil}
              onClick={() => {
                if (inputRefFraeil.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      fraeil: `Fraeil`,
                    },
                  });
                } else {
                  const { fraeil, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Fraeil</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefUrma}
              onClick={() => {
                if (inputRefUrma.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      urma: `Urma`,
                    },
                  });
                } else {
                  const { urma, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Urma</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefCandleNest}
              onClick={() => {
                if (inputRefCandleNest.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      candleNest: `Candle Nest`,
                    },
                  });
                } else {
                  const { candleNest, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Candle Nest</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefBeyondGreen}
              onClick={() => {
                if (inputRefBeyondGreen.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      beyondGreen: `Beyond Green`,
                    },
                  });
                } else {
                  const { beyondGreen, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Beyond Green</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={inputRefGatta}
              onClick={() => {
                if (inputRefGatta.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      gatta: `Gatta`,
                    },
                  });
                } else {
                  const { gatta, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Gatta</label>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Аксесоари</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={nakitRef}
              onClick={() => {
                if (nakitRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      nakit: `Накит`,
                    },
                  });
                } else {
                  const { nakit, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="" className="">
              Накит
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={bagsRef}
              onClick={() => {
                if (bagsRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      bags: `Ташни`,
                    },
                  });
                } else {
                  const { bags, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Ташни</label>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Величина</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={sizeXLRef}
              onClick={() => {
                if (sizeXLRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      xl: `XL`,
                    },
                  });
                } else {
                  const { xl, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="" className="">
              XL
            </label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={sizeLRef}
              onClick={() => {
                if (sizeLRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      l: `L`,
                    },
                  });
                } else {
                  const { l, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">L</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={sizeMRef}
              onClick={() => {
                if (sizeMRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      m: `M`,
                    },
                  });
                } else {
                  const { m, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">M</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={sizeSRef}
              onClick={() => {
                if (sizeSRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      s: `S`,
                    },
                  });
                } else {
                  const { s, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">S</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={sizeXSRef}
              onClick={() => {
                if (sizeXSRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      xs: `XS`,
                    },
                  });
                } else {
                  const { xs, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">XS</label>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Боја</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row colorsFilter d-flex ml-3 d-block w-50">
          <input
            type="checkbox"
            name="color"
            id="red"
            value="red"
            ref={colorRedRef}
            onClick={() => {
              if (colorRedRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    red: `red`,
                  },
                });
              } else {
                const { red, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="red">
            <span className="red"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="green"
            value="green"
            ref={colorGreenRef}
            onClick={() => {
              if (colorGreenRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    green: `green`,
                  },
                });
              } else {
                const { green, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="green">
            <span className="green"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="orange"
            value="orange"
            ref={colorOrangeRef}
            onClick={() => {
              if (colorOrangeRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    orange: `orange`,
                  },
                });
              } else {
                const { orange, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="orange">
            <span className="orange"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="yellow"
            value="yellow"
            ref={colorYellowRef}
            onClick={() => {
              if (colorYellowRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    yellow: `yellow`,
                  },
                });
              } else {
                const { yellow, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="yellow">
            <span className="yellow"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="blue"
            value="blue"
            ref={colorBlueRef}
            onClick={() => {
              if (colorBlueRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    blue: `blue`,
                  },
                });
              } else {
                const { blue, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="blue">
            <span className="blue"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="pink"
            value="pink"
            ref={colorPinkRef}
            onClick={() => {
              if (colorPinkRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    pink: `pink`,
                  },
                });
              } else {
                const { pink, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="pink">
            <span className="pink"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="purple"
            value="purple"
            ref={colorPurpleRef}
            onClick={() => {
              if (colorPurpleRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    purple: `purple`,
                  },
                });
              } else {
                const { purple, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="purple">
            <span className="purple"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="gray"
            value="gray"
            ref={colorGrayRef}
            onClick={() => {
              if (colorGrayRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    gray: `gray`,
                  },
                });
              } else {
                const { gray, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="gray">
            <span className="gray"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="white"
            value="white"
            ref={colorWhiteRef}
            onClick={() => {
              if (colorWhiteRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    white: `white`,
                  },
                });
              } else {
                const { white, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="white">
            <span className="white"></span>
          </label>

          <input
            type="checkbox"
            name="color"
            id="black"
            value="black"
            ref={colorBlackRef}
            onClick={() => {
              if (colorBlackRef.current?.checked) {
                router.push({
                  pathname: `/shop`,
                  query: {
                    ...router.query,
                    black: `black`,
                  },
                });
              } else {
                const { black, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/shop`,
                  query: remainingQuery,
                });
              }
            }}
          />
          <label htmlFor="black">
            <span className="black"></span>
          </label>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Цена</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={price400SRef}
              onClick={() => {
                if (price400SRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      price_gte_100: 100,
                      price_lte_400: 400,
                    },
                  });
                } else {
                  const { price_gte_100, price_lte_400, ...remainingQuery } =
                    router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="" className="text-danger">
              На попуст
            </label>
            *
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={price1000SRef}
              onClick={() => {
                if (price1000SRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      price_gte_500: 500,
                      price_lte_1000: 1000,
                    },
                  });
                } else {
                  const { price_gte_500, price_lte_1000, ...remainingQuery } =
                    router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">500 - 1000 ден.</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={price2000SRef}
              onClick={() => {
                if (price2000SRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      price_gte_1500: 1500,
                      price_lte_2000: 2000,
                    },
                  });
                } else {
                  const { price_gte_1500, price_lte_2000, ...remainingQuery } =
                    router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">1500 - 2000 ден.</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={price2500SRef}
              onClick={() => {
                if (price2500SRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      price_gte_2000: 2000,
                      price_lte_2500: 2500,
                    },
                  });
                } else {
                  const { price_gte_2000, price_lte_2500, ...remainingQuery } =
                    router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">2000 - 2500 ден.</label>
          </div>
          <div className="col-10 offset-1">
            <input
              type="checkbox"
              ref={price2600SRef}
              onClick={() => {
                if (price2600SRef.current?.checked) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      price_gte_2600: 2501,
                    },
                  });
                } else {
                  const { price_gte_2600, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
              }}
            />
            <label htmlFor="">Над 2500 ден.</label>
          </div>
        </div>
        {isFilterOpen !== false && (
          <div className="row">
            <div className="col-10 offset-1" style={{ padding: `70px 0px` }}>
              <div
                className="position-fixed pt-3"
                style={{
                  bottom: `0`,
                  left: `0`,
                  right: `0`,
                  background: `#fdfdfd`,
                }}
              >
                <button
                  type="submit"
                  className="btn w-75 ml-auto mr-auto d-block footerBtn"
                  onClick={() => {
                    setIsFilterOpen(false);
                  }}
                >
                  Филтрирај
                </button>
                <p
                  onClick={() => {
                    setIsFilterOpen(false);
                    router.push({
                      pathname: `/shop`,
                      query: {},
                    });
                    if (inputRefTShirt.current) {
                      inputRefTShirt.current.checked = false;
                    }
                  }}
                  className="text-center"
                  style={{ textDecoration: `underline`, fontSize: `20px` }}
                >
                  oткажи
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res;

  function normalizeFilters(
    filterType: string,
    filter: number | string | string[] | undefined
  ) {
    return Array.isArray(filter)
      ? filter.map((value) => `${filterType}_like=${value}`)
      : filter
      ? [`${filterType}_like=${filter}`]
      : [];
  }

  const {
    tShirts,
    fustani,
    palta,
    jeans,
    shorts,
    factoryGirl,
    underwear,
    titleValue,
    mainDays,
    fraeil,
    urma,
    candleNest,
    beyondGreen,
    gatta,
    pincParty,
    xl,
    l,
    m,
    s,
    xs,
    price_gte_100,
    price_lte_400,
    price_gte_500,
    price_lte_1000,
    price_gte_1500,
    price_lte_2000,
    price_gte_2000,
    price_lte_2500,
    price_gte_2600,
    red,
    green,
    orange,
    yellow,
    blue,
    pink,
    purple,
    gray,
    white,
    black,
    nakit,
    bags,
  } = query;
  const nakitCategories = normalizeFilters("category", nakit);
  const bagsCategories = normalizeFilters("category", bags);
  const tShirtsCategories = normalizeFilters("category", tShirts);
  const skirtsCategories = normalizeFilters("category", fustani);
  const jacketsCategories = normalizeFilters("category", palta);
  const underwearCategories = normalizeFilters("category", underwear);
  const jeansCategories = normalizeFilters("category", jeans);
  const shortsCategories = normalizeFilters("category", shorts);
  const factoryGirlFilter = normalizeFilters("brand", factoryGirl);
  const inputTextFilter = normalizeFilters("category", titleValue);
  const mainDaysFilter = normalizeFilters("brand", mainDays);
  const fraeilFilter = normalizeFilters("brand", fraeil);
  const urmaFilter = normalizeFilters("brand", urma);
  const candleNestFilter = normalizeFilters("brand", candleNest);
  const beyondGreenFilter = normalizeFilters("brand", beyondGreen);
  const gattaFilter = normalizeFilters("brand", gatta);
  const pincPartyFilter = normalizeFilters("brand", pincParty);
  const xlFilter = normalizeFilters("size", xl);
  const lFilter = normalizeFilters("size", l);
  const mFilter = normalizeFilters("size", m);
  const sFilter = normalizeFilters("size", s);
  const xSFilter = normalizeFilters("size", xs);
  const redFilter = normalizeFilters("color", red);
  const greenFilter = normalizeFilters("color", green);
  const orangeFilter = normalizeFilters("color", orange);
  const yellowFilter = normalizeFilters("color", yellow);
  const blueFilter = normalizeFilters("color", blue);
  const pinkFilter = normalizeFilters("color", pink);
  const purpleFilter = normalizeFilters("color", purple);
  const grayFilter = normalizeFilters("color", gray);
  const whiteFilter = normalizeFilters("color", white);
  const blackFilter = normalizeFilters("color", black);
  const priceFilters: string[] = [];

  if (price_gte_100 && price_lte_400) {
    priceFilters.push(`price_gte=100&price_lte=400`);
  }
  if (price_gte_500 && price_lte_1000) {
    priceFilters.push(`price_gte=500&price_lte=1000`);
  }
  if (price_gte_1500 && price_lte_2000) {
    priceFilters.push(`price_gte=1500&price_lte=2000`);
  }
  if (price_gte_2000 && price_lte_2500) {
    priceFilters.push(`price_gte=2000&price_lte=2500`);
  }
  if (price_gte_2600) {
    priceFilters.push(`price_gte=2600`);
  }

  const allFilters = [
    ...nakitCategories,
    ...bagsCategories,
    ...tShirtsCategories,
    ...skirtsCategories,
    ...jacketsCategories,
    ...underwearCategories,
    ...jeansCategories,
    ...shortsCategories,
    ...factoryGirlFilter,
    ...inputTextFilter,
    ...mainDaysFilter,
    ...fraeilFilter,
    ...urmaFilter,
    ...candleNestFilter,
    ...beyondGreenFilter,
    ...gattaFilter,
    ...pincPartyFilter,
    ...xlFilter,
    ...lFilter,
    ...mFilter,
    ...sFilter,
    ...xSFilter,
    ...priceFilters,
    ...redFilter,
    ...greenFilter,
    ...orangeFilter,
    ...yellowFilter,
    ...blueFilter,
    ...pinkFilter,
    ...purpleFilter,
    ...grayFilter,
    ...whiteFilter,
    ...blackFilter,
  ];

  const queryParams = allFilters.join("&");

  const page = Array.isArray(query.page) ? query.page[0] : query.page || "1";
  const start = (parseInt(page) - 1) * 10;
  const limit = 10;

  if (queryParams) {
    res = await fetch(`http://localhost:5001/Igralishteskopje?${queryParams}`);
  } else if (query.value) {
    res = await fetch(
      `http://localhost:5001/Igralishteskopje?_sort=date&_order=${query.value}`
    );
  } else {
    res = await fetch(
      `http://localhost:5001/Igralishteskopje?_start=${start}&_limit=${limit}&page=${page}`
    );
  }

  const dataRes: ProductType[] | null = await (res ? res.json() : null);

  return {
    props: {
      dataRes: dataRes,
    },
  };
};
