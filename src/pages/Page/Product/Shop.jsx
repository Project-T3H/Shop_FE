import React, { Component } from "react";
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";
import {
  getListBranch,
  getListColor,
  getListProduct,
  getListSize,
} from "../../../service/Page/Shop";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBranch: [],
      listColor: [],
      listSize: [],
      listProduct: [],
    };
  }

  componentDidMount() {
    let promise, promiseSize, promiseColor, promiseProduct;
    promise = getListBranch();
    promise
      .then((response) => {
        this.setState({
          listBranch: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    promiseColor = getListColor();
    promiseColor
      .then((response) => {
        this.setState({
          listColor: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    promiseSize = getListSize();
    promiseSize
      .then((response) => {
        this.setState({
          listSize: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    promiseProduct = getListProduct();
    promiseProduct
      .then((response) => {
        this.setState({
          listProduct: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  detailProduct(product) {
    window.location.replace("/detail/" + product.id);
  }
  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread">
                  <span>
                    <a href="/">Trang chủ</a>
                  </span>{" "}
                  / <span>Shop</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-featured">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <div
                    className="featured-img featured-img-2"
                    style={{
                      backgroundImage: `url(../assets/images/img_bg_2.jpg)`,
                    }}
                  >
                    <h2>Casuals</h2>
                    <p>
                      <a href="#/" className="btn btn-primary btn-lg">
                        Mua ngay
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <div
                    className="featured-img featured-img-2"
                    style={{
                      backgroundImage: `url(../assets/images/women.jpg)`,
                    }}
                  >
                    <h2>Dress</h2>
                    <p>
                      <a href="#/" className="btn btn-primary btn-lg">
                        Mua ngay
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <div
                    className="featured-img featured-img-2"
                    style={{
                      backgroundImage: `url(../assets/images/item-11.jpg)`,
                    }}
                  >
                    <h2>Sports</h2>
                    <p>
                      <a href="#/" className="btn btn-primary btn-lg">
                        Mua ngay
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-xl-3">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="side border mb-1">
                      <h3>Nhãn hàng</h3>
                      <ul>
                        {this.state.listBranch.map((b) => (
                          <li style={{ cursor: "pointer" }}>{b.branch_name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="side border mb-1">
                      <h3>Size</h3>
                      <div className="block-26 mb-2">
                        <h4>Size</h4>
                        <ul>
                          {this.state.listSize.map((s) => (
                            <li style={{ cursor: "pointer" }}>{s.size_name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="side border mb-1">
                      <h3>Màu</h3>
                      <ul>
                        {this.state.listColor.map((c) => (
                          <li style={{ cursor: "pointer" }}>{c.color_name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-xl-9">
                <div className="row row-pb-md">
                  {this.state.listProduct.map((p) => (
                    <div className="col-lg-4 mb-4 text-center">
                      <div className="product-entry border">
                        <a href="#/" className="prod-img">
                          <img
                            src={p.image}
                            className="img-fluid"
                            alt="Free html5 bootstrap 4 template"
                          />
                        </a>
                        <div className="desc">
                          <h2>
                            <a href="#/" onClick={() => this.detailProduct(p)}>
                              {p.product_name}
                            </a>
                          </h2>
                          <span className="price">
                            {Number(p.price).toLocaleString("en-US")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Trusted Partners</h2>
              </div>
            </div>
            <div className="row">
              <div className="col partner-col text-center">
                <img
                  src="../assets/images/brand-1.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="../assets/images/brand-2.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="../assets/images/brand-3.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="../assets/images/brand-4.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="../assets/images/brand-5.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Shop;
