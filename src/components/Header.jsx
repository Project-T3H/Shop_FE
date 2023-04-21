function Header() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    "#overlayy".addClass("active");
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    "#overlayy".removeClass("active");
  }

  return (
    <header className="header">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="header-top-wrapper">
                <div class="header-top-info"></div>
                <div class="header-top-switcher">
                  <div class="language">
                    <a href="/register">Register</a>
                  </div>
                  <div class="currency">
                    <a href="/login">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="d-none d-lg-block">
            <nav className="menu-area d-flex align-items-center">
              <div className="logo">
                <a href="/">
                  <img
                    src="../assert/dist/images/logo/logo.png"
                    alt="logo"
                    title="logo"
                  />
                </a>
              </div>
              <ul className="main-menu d-flex align-items-center">
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    Category{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={"9.98"}
                      height={"5.69"}
                      viewBox="0 0 9.98 5.69"
                    >
                      <g id="Arrow" transform="translate(0.99 0.99)">
                        <path
                          id="Arrow-2"
                          data-name="Arrow"
                          d="M1474.286,26.4l4,4,4-4"
                          transform="translate(-1474.286 -26.4)"
                          fill="none"
                          stroke="#1a2224"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={"1.4"}
                        />
                      </g>
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/shop">Man</a>
                    </li>
                    <li>
                      <a href="/shop">Woman</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/shop">Shop </a>
                </li>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={"18"}
                      height={"20"}
                      viewBox="0 0 18 20"
                    >
                      <g id="Account" transform="translate(1 1)">
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                          transform="translate(-4 -3)"
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={"2"}
                        />
                        <circle
                          id="Ellipse_9"
                          data-name="Ellipse 9"
                          cx={"4"}
                          cy={"4"}
                          r={"4"}
                          transform="translate(4)"
                          fill="#fff"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={"2"}
                        />
                      </g>
                    </svg>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/order">My order</a>
                    </li>
                    <li>
                      <a href="/payment">Payment</a>
                    </li>
                    <li>
                      <a href="/login">Log Out</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="search-bar">
                <input type="text" placeholder="Search for product..." />
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"20.414"}
                    height={"20.414"}
                    viewBox="0 0 20.414 20.414"
                  >
                    <g
                      id="Search_Icon"
                      data-name="Search Icon"
                      transform="translate(1 1)"
                    >
                      <ellipse
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx={"8.158"}
                        cy={"8"}
                        rx={"8.158"}
                        ry={"8"}
                        fill="none"
                        stroke="#1a2224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        x1={"3.569"}
                        y1={"3.5"}
                        transform="translate(14.431 14.5)"
                        fill="none"
                        stroke="#1a2224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="menu-icon ml-auto">
                <ul>
                  <li>
                    <a href="/favourite-list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"22"}
                        height={"20"}
                        viewBox="0 0 22 20"
                      >
                        <g id="Heart" transform="translate(1 1)">
                          <path
                            id="Heart-2"
                            data-name="Heart"
                            d="M20.007,4.59a5.148,5.148,0,0,0-7.444,0L11.548,5.636,10.534,4.59a5.149,5.149,0,0,0-7.444,0,5.555,5.555,0,0,0,0,7.681L4.1,13.317,11.548,21l7.444-7.681,1.014-1.047a5.553,5.553,0,0,0,0-7.681Z"
                            transform="translate(-1.549 -2.998)"
                            fill="#fff"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                        </g>
                      </svg>
                      <span className="heart">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"22"}
                        height={"22"}
                        viewBox="0 0 22 22"
                      >
                        <g id="Icon" transform="translate(-1524 -89)">
                          <ellipse
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx={"0.909"}
                            cy={"0.952"}
                            rx={"0.909"}
                            ry={"0.952"}
                            transform="translate(1531.364 108.095)"
                            fill="none"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                          <ellipse
                            id="Ellipse_3"
                            data-name="Ellipse 3"
                            cx={"0.909"}
                            cy={"0.952"}
                            rx={"0.909"}
                            ry={"0.952"}
                            transform="translate(1541.364 108.095)"
                            fill="none"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M1,1H4.636L7.073,13.752a1.84,1.84,0,0,0,1.818,1.533h8.836a1.84,1.84,0,0,0,1.818-1.533L21,5.762H5.545"
                            transform="translate(1524 89)"
                            fill="none"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                        </g>
                      </svg>
                      <span className="cart">1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <!-- Mobile Menu --> */}
          <aside className="d-lg-none">
            <div id="mySidenav" className="sidenav">
              <div className="close-mobile-menu">
                <a
                  href="/#"
                  id="menu-close"
                  className="closebtn"
                  onClick={closeNav}
                >
                  &times;
                </a>
              </div>
              <div className="search-bar">
                <input type={"text"} placeholder="Search for product..." />
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"20.414"}
                    height={"20.414"}
                    viewBox="0 0 20.414 20.414"
                  >
                    <g
                      id="Search_Icon"
                      data-name="Search Icon"
                      transform="translate(1 1)"
                    >
                      <ellipse
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx={"8.158"}
                        cy={"8"}
                        rx={"8.158"}
                        ry={"8"}
                        fill="none"
                        stroke="#1a2224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        x1={"3.569"}
                        y1="3.5"
                        transform="translate(14.431 14.5)"
                        fill="none"
                        stroke="#1a2224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Account</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/order">My order</a>
                  </li>
                  <li>
                    <a href="/payment">Payment</a>
                  </li>
                  <li>
                    <a href="/login">Log out</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
            </div>
            <div className="mobile-nav d-flex align-items-center justify-content-between">
              <div className="logo">
                <a href="/">
                  <img src="../assert/dist/images/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="search-bar">
                <input type={"text"} placeholder="Search for product..." />
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"20.414"}
                    height={"20.414"}
                    viewBox="0 0 20.414 20.414"
                  >
                    <g
                      id="Search_Icon"
                      data-name="Search Icon"
                      transform="translate(1 1)"
                    >
                      <ellipse
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx={"8.158"}
                        cy={"8"}
                        rx={"8.158"}
                        ry={"8"}
                        fill="none"
                        stroke="#1a2224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        x1={"3.569"}
                        y1={"3.5"}
                        transform="translate(14.431 14.5)"
                        fill="none"
                        stroke="#1a2224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={"2"}
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="menu-icon">
                <ul>
                  <li>
                    {" "}
                    <a href="/#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"22"}
                        height={"20"}
                        viewBox="0 0 22 20"
                      >
                        <g id="Heart" transform="translate(1 1)">
                          <path
                            id="Heart-2"
                            data-name="Heart"
                            d="M20.007,4.59a5.148,5.148,0,0,0-7.444,0L11.548,5.636,10.534,4.59a5.149,5.149,0,0,0-7.444,0,5.555,5.555,0,0,0,0,7.681L4.1,13.317,11.548,21l7.444-7.681,1.014-1.047a5.553,5.553,0,0,0,0-7.681Z"
                            transform="translate(-1.549 -2.998)"
                            fill="#fff"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                        </g>
                      </svg>
                      <span className="heart">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"22"}
                        height={"22"}
                        viewBox="0 0 22 22"
                      >
                        <g id="Icon" transform="translate(-1524 -89)">
                          <ellipse
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx={"0.909"}
                            cy={"0.952"}
                            rx={"0.909"}
                            ry={"0.952"}
                            transform="translate(1531.364 108.095)"
                            fill="none"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                          <ellipse
                            id="Ellipse_3"
                            data-name="Ellipse 3"
                            cx={"0.909"}
                            cy={"0.952"}
                            rx={"0.909"}
                            ry={"0.952"}
                            transform="translate(1541.364 108.095)"
                            fill="none"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M1,1H4.636L7.073,13.752a1.84,1.84,0,0,0,1.818,1.533h8.836a1.84,1.84,0,0,0,1.818-1.533L21,5.762H5.545"
                            transform="translate(1524 89)"
                            fill="none"
                            stroke="#1a2224"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                        </g>
                      </svg>
                      <span className="cart">1</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hamburger-menu">
                <a
                  href="/#"
                  onClick={openNav}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                >
                  &#9776;
                </a>
              </div>
            </div>
          </aside>
          {/* <!-- Body overlay --> */}
          <div className="overlay" id="overlayy"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
