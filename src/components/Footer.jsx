function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row main-footer">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="main-footer-info">
                <img
                  src="../assert/dist/images/logo/white.png"
                  alt="Logo"
                  className="img-fluid"
                />
                <p>
                  'The shoe mania is really cool – you have more freedom, you
                  can exaggerate things without any worries. But if the truth is
                  not ordinary.' - Miuccia Prada
                </p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-2 col-md-4 col-sm-6 col-12">
              <div className="main-footer-quicklinks">
                <h6>Company</h6>
                <ul className="quicklink">
                  <li>
                    <a href="#/">About</a>
                  </li>
                  <li>
                    <a href="#/">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="#/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#/">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="main-footer-quicklinks">
                <h6>Quick links</h6>
                <ul className="quicklink">
                  <li>
                    <a href="#/">New Realease</a>
                  </li>
                  <li>
                    <a href="#/">Customize</a>
                  </li>
                  <li>
                    <a href="#/">Sale &amp; Discount</a>
                  </li>
                  <li>
                    <a href="/shop">Men</a>
                  </li>
                  <li>
                    <a href="/shop">Women</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="main-footer-quicklinks">
                <h6>Account</h6>
                <ul className="quicklink">
                  <li>
                    <a href="#/">Your Bag</a>
                  </li>
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="/order">Order Completed</a>
                  </li>
                  <li>
                    <a href="/">Log-out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
