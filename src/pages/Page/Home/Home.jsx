import React, { Component } from "react";
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";
import bg01 from "../../../assets/images/img_bg_1.jpg";
import bg02 from "../../../assets/images/img_bg_2.jpg";
import bg03 from "../../../assets/images/img_bg_3.jpg";
import men from "../../../assets/images/men.jpg";
import women from "../../../assets/images/women.jpg";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { getListProductHome } from "../../../service/Page/Home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        <div style={{ backgroundImage: `url(${bg01})` }}>
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">Men's</h1>
                    <h2 className="head-2">Shoes</h2>
                    <h2 className="head-3">Collection</h2>
                    <p className="category">
                      <span>New trending shoes</span>
                    </p>
                    <p>
                      <a href="/shop" className="btn btn-primary">
                        Shop Collection
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        <div style={{ backgroundImage: `url(${bg02})` }}>
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">Huge</h1>
                    <h2 className="head-2">Sale</h2>
                    <h2 className="head-3">
                      <strong className="font-weight-bold">50%</strong> Off
                    </h2>
                    <p className="category">
                      <span>Big sale sandals</span>
                    </p>
                    <p>
                      <a href="/shop" className="btn btn-primary">
                        Shop Collection
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        <div style={{ backgroundImage: `url(${bg03})` }}>
          <div className="overlay"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">New</h1>
                    <h2 className="head-2">Arrival</h2>
                    <h2 className="head-3">
                      up to <strong className="font-weight-bold">30%</strong>{" "}
                      off
                    </h2>
                    <p className="category">
                      <span>New stylish shoes for men</span>
                    </p>
                    <p>
                      <a href="/shop" className="btn btn-primary">
                        Shop Collection
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      ],
      listProduct: [],
    };
  }

  componentDidMount() {
    let promise;
    promise = getListProductHome();
    promise
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
    const options = {
      items: 1,
      rewind: true,
      autoplay: true,
      loop: false,
    };

    const events = {
      onDragged: function (event) {
        console.log("onDragged: " + event.type);
      },
      onChanged: function (event) {
        console.log("onChanged: " + event.type);
      },
      onTranslate: function (event) {
        console.log("onTranslate: " + event.type);
      },
    };
    return (
      <div id="page">
        <Header />
        <aside id="colorlib-hero">
          <div className="flexslider">
            <OwlCarousel ref="banners" options={options} events={events}>
              {this.state.items}
            </OwlCarousel>
          </div>
        </aside>
        <div className="colorlib-intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="intro">
                  Chúng tôi chỉ bán những sản phẩm tốt nhất
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="colorlib-product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a
                    href="/shop"
                    className="featured-img"
                    style={{ backgroundImage: `url(${men})` }}
                  >
                    {""}
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="/shop">Sản phẩm nam</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a
                    href="/shop"
                    className="featured-img"
                    style={{ backgroundImage: `url(${women})` }}
                  >
                    {""}
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="/shop">Sản phẩm nữ</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                <h2>Sản phẩm bán chạy</h2>
              </div>
            </div>
            <div className="row row-pb-md">
              {this.state.listProduct.map((p) => (
                <div className="col-lg-3 mb-4 text-center">
                  <div className="product-entry border">
                    <a href="#/" className="prod-img">
                      <img
                        src={p.image}
                        className="img-fluid"
                        alt="Free html5 bootstrap 4 template"
                      />
                    </a>
                    <div className="desc" onClick={() => this.detailProduct(p)}>
                      <h2>
                        <a href="#/">{p.product_name}</a>
                      </h2>
                      <span className="price">
                        {Number(p.price).toLocaleString("en-US")} VNĐ
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  <a href="/shop" className="btn btn-primary btn-lg">
                    Tất cả sản phẩm
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Các nhãn hàng</h2>
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
                  src="../assets/images/converse.png"
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

export default Home;
