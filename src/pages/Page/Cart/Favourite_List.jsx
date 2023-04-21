import React, { Component } from 'react';
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";


class Favourite_List extends Component {
  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Danh sách ưa thích</span></p>
              </div>
            </div>
          </div>
        </div>


        <div className="colorlib-product">
          <div className="container">
            {/* <div className="row row-pb-lg">
              <div className="col-md-10 offset-md-1">
                <div className="process-wrap">
                  <div className="process text-center active">
                    <p><span>01</span></p>
                    <h3>Shopping Cart</h3>
                  </div>
                  <div className="process text-center">
                    <p><span>02</span></p>
                    <h3>Checkout</h3>
                  </div>
                  <div className="process text-center">
                    <p><span>03</span></p>
                    <h3>Order Complete</h3>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row row-pb-lg">
              <div className="col-md-12">
                <div className="product-name d-flex">
                  <div className="one-forth text-left px-4">
                    <span>Sản phẩm</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Giá</span>
                  </div>
                  {/* <div className="one-eight text-center">
                    <span>Quantity</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Total</span>
                  </div> */}
                  <div className="one-eight text-center px-4">
                    <span>Xóa</span>
                  </div>
                </div>
                <div className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(../assets/images/item-6.jpg)` }}>
                    </div>
                    <div className="display-tc">
                      <h3>Product Name</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$68.00</span>
                    </div>
                  </div>
                  {/* <div className="one-eight text-center">
                    <div className="display-tc">
                      <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$120.00</span>
                    </div>
                  </div> */}
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed"></a>
                    </div>
                  </div>
                </div>
                <div className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(../assets/images/item-7.jpg)` }}>
                    </div>
                    <div className="display-tc">
                      <h3>Product Name</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$68.00</span>
                    </div>
                  </div>
                  {/* <div className="one-eight text-center">
                    <div className="display-tc">
                      <form action="#">
                        <input type="text" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                      </form>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$120.00</span>
                    </div>
                  </div> */}
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed"></a>
                    </div>
                  </div>
                </div>
                <div className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(../assets/images/item-8.jpg)` }}>
                    </div>
                    <div className="display-tc">
                      <h3>Product Name</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$68.00</span>
                    </div>
                  </div>
                  {/* <div className="one-eight text-center">
                    <div className="display-tc">
                      <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$120.00</span>
                    </div>
                  </div> */}
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Xem thêm</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Women's Minam Meaghan</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Men's Taja Commissioner</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Russ Men's Sneakers</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Favourite_List;
