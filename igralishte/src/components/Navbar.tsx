import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  let parsedUserData;

  if (typeof localStorage !== "undefined") {
    const storedUserData = localStorage.getItem("newUser");
    parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  } else {
    console.error("localStorage is not supported in this environment");
  }

  const router = useRouter();
  const navbarInputRef = useRef<HTMLInputElement>(null);
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-light  "
        style={{ height: `56px` }}
      >
        <i
          className={`fa-solid fa-chevron-left text-dark ${
            isSearchOpen ? `` : `d-none`
          } `}
          aria-hidden
          onClick={() => {
            toggleSearch();
          }}
        ></i>
        <div
          className={`form-inline ml-auto w-75 ${isSearchOpen ? `` : `d-none`}`}
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Пребарувај"
            ref={navbarInputRef}
          />
        </div>
        <button
          className={`navbar-toggler ${isSearchOpen ? `d-none` : ``}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: `none`, borderRadius: `none` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#333"
            className="w-6 h-6 navbar-toggler-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className="collapse navbar-collapse bg-light border-top"
          id="navbarCollapse"
        >
          <ul className={`navbar-nav mr-auto ${isSearchOpen ? `d-none` : ``} `}>
          <Link rel="stylesheet" href="/shop?value=asc">
            <p className="text-dark font-italic"> 
              <u>Ново</u>
            </p>
            </Link>
            <li className="nav-item dropdown text-dark">
              <a
                className="nav-link dropdown-toggle text-dark "
                href="#"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Vintage облека
              </a>
              <div
                className="dropdown-menu bg-light"
                aria-labelledby="navbarDropdown"
                style={{ border: `none` }}
              >
                <Link className="dropdown-item" href={`/shop`}>
                  <h5 className="">Види ги сите</h5>
                </Link>
                <Link className="dropdown-item" href={`/shop?tShirts=Блузи`}>
                  Блузи
                </Link>
                <Link className="dropdown-item" href={`/shop?jeans=Панталони`}>
                  Панталони
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/shop?shorts=Шорцеви+и+здолништа`}
                >
                  Здолништа / шорцеви
                </Link>
                <Link className="dropdown-item" href={`/shop?fustani=Фустани`}>
                  Фустани
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/shop?palta=Палта+и+јакни`}
                >
                  Палта и јакни
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/shop?underwear=Долна+облека`}
                >
                  Долна облека
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown text-dark">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Брендови
              </a>
              <div
                className="dropdown-menu bg-light"
                style={{ border: `none` }}
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" href={`/brandPage`}>
                  <h5 className="">Види ги сите</h5>
                </Link>
                <Link className="dropdown-item" href={`/brandPage/2`}>
                  Pink Party wear
                </Link>
                <Link className="dropdown-item" href={`/brandPage/3`}>
                  Factory Girl
                </Link>
                <Link className="dropdown-item" href={`/brandPage/4`}>
                  Main Days
                </Link>
                <Link className="dropdown-item" href={`/`}>
                  Нежно
                </Link>
                <Link className="dropdown-item" href={`/`}>
                  Ред
                </Link>
                <Link className="dropdown-item" href={`/`}>
                  Наш
                </Link>
                <Link className="dropdown-item" href={`/brandPage/1`}>
                  Зш да не
                </Link>
                <Link className="dropdown-item" href={`/brandPage/5`}>
                  Fraeil
                </Link>
                <Link className="dropdown-item" href={`/brandPage/6`}>
                  Urma
                </Link>
                <Link className="dropdown-item" href={`/brandPage/7`}>
                  Candle nest
                </Link>
                <Link className="dropdown-item" href={`/brandPage/8`}>
                  Beyond Green
                </Link>
                <Link className="dropdown-item" href={`/brandPage/9`}>
                  Gatta
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown text-dark">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Аксесоари
              </a>
              <div
                className="dropdown-menu bg-light"
                style={{ border: `none` }}
                aria-labelledby="navbarDropdown"
              >
                <Link
                  className="dropdown-item"
                  href="/shop?nakit=Накит&bags=Ташни"
                >
                  <h5 className="">Види ги сите</h5>
                </Link>
                <Link className="dropdown-item" href="/shop?bags=Ташни">
                  Ташни
                </Link>
                <Link className="dropdown-item" href="/shop?nakit=Накит">
                  Накит
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                lifestyle
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/giftCard">
                Подари картичка*
              </Link>
            </li>
            <li className="nav-item pb-5">
              <a className="nav-link text-danger" href="#">
                <span>Попуст</span>
              </a>
            </li>
            <Link
              href={`/order`}
              className="p-1 "
              style={{ color: `black`, textDecoration: `none` }}
            >
              <div className="d-flex align-items-center">
                <i aria-hidden className="fa-solid fa-cart-shopping text-center fa-2x bg-light rounded p-2 text-dark navCategoryStyles"></i>
                <p className="m-0 ml-3 text-dark">Кошничка</p>
              </div>
            </Link>
            <Link
              href={`/order`}
              className="p-1"
              style={{ color: `black`, textDecoration: `none` }}
            >
              <div className="d-flex align-items-center">
                <i aria-hidden className="fa-regular fa-heart fa-2x p-1 bg-light rounded p-2 navCategoryStyles"></i>
                <p className="m-0 ml-3 text-dark">Омилени</p>
              </div>
            </Link>

            {parsedUserData ? (
              <Link
                href={`/myProfile`}
                className="p-1"
                style={{ color: `black`, textDecoration: `none` }}
              >
                <div className="align-items-center d-flex">
                  <i aria-hidden className="fa-regular fa-user fa-2x p-1 bg-light text-dark rounded p-2 navCategoryStyles"></i>
                  <p className="m-0 ml-3 text-dark">Мој профил</p>
                </div>
              </Link>
            ) : (
              <Link
                href={`/logOn`}
                className="p-1"
                style={{ color: `black`, textDecoration: `none` }}
              >
                <div className="align-items-center d-flex">
                  <i aria-hidden className="fa-regular fa-user fa-2x p-1 bg-light text-dark rounded p-2 navCategoryStyles"></i>
                  <p className="m-0 ml-3 text-dark">
                    Регистрирај се / Логирај се
                  </p>
                </div>
              </Link>
            )}
          </ul>
        </div>
        <Link
          className={`navbar-brand ${isSearchOpen ? `d-none` : ``}`}
          href="/"
        >
          <img src={`/images/Logo.png`} alt="" className="" />
        </Link>

        {isSearchOpen ? (
          <i
            className={`fa-solid fa-magnifying-glass text-dark 
                 position-absolute magnifying-glass-position
              `}
            aria-hidden
            onClick={() => {
              toggleSearch();
              if (navbarInputRef.current?.value) {
                router.push({
                  pathname: `/searchPage`,
                  query: {
                    ...router.query,
                    titleValue: navbarInputRef.current.value.toLowerCase(),
                  },
                });
              } else {
                const { titleValue, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/`,
                  query: remainingQuery,
                });
              }
              if (navbarInputRef.current) navbarInputRef.current.value = ``;
            }}
          ></i>
        ) : (
          <i
            className={`fa-solid fa-magnifying-glass text-dark`}
            aria-hidden
            onClick={() => {
              toggleSearch();
            }}
          ></i>
        )}
      </nav>
      {router.pathname == `/searchPage` ? null : (
        <div style={{ position: `relative` }}>
          <div className="announcement-bar">
            <p className="scrolling-text m-0 p-1">
              Нова колекција <img src="/images/star-black.png" alt="" />{" "}
              Valentines Winter Collection{" "}
              <img src="/images/star-black.png" alt="" /> Valentines Winter
              Collection <img src="/images/star-black.png" alt="" /> Valentines
              Winter Collection
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
