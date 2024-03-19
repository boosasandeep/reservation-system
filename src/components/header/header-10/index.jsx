import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      {" "}
      <header className={`header ${navbar ? "is-sticky bg-white" : ""}`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link to="/" className="header-logo mr-50">
                  <img src="/img/general/Reservation.png" alt="logo icon" />
                </Link>
                {/* End logo */}
                <a style={{ border: "1px solid", padding: '0px 11px' }}
                  href={'tel:+(1) (866) 855 0947'} className="text-18 fw-500 text-dark-1 mt-5 is-menu-opened-hide d-none xl:d-flex ">
                  Call
                </a>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex items-center is-menu-opened-hide md:d-none">
                  <a
                    href={'tel:+(1) (866) 855 0947'} className="text-18 fw-500 text-dark-1 mt-5">
                    Contact: +(1) (866) 855 0947
                  </a>

                </div>
                {/* End d-flex */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header >
      {/* End header */}
    </>
  );
};

export default Header1;
