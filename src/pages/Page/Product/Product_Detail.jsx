import React, { Component } from 'react';
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";
import { getProductDetail } from '../../../service/Page/ProductDetail';
import { showNotification } from '../../../service/NotificationService';

class Product_Detail extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      product: {},
      id: (window.location.pathname).toString().substring(8,10),
    }
  }

  componentDidMount() {
    let promise = getProductDetail(this.state.id);
    console.log(promise)
    promise
      .then(response => {
        this.setState({
          product: response
        })
      }).catch(error => {
        console.log(error)
      });
    console.log(this.state.product);
  }

  addCart() {
    let lstCart = [];
    let cart = {};
    cart.productId = this.state.id;
    cart.productName = this.state.product.product_name;
    cart.productQuantity = 1;
    cart.productPrice = this.state.product.price;
    cart.productImage = this.state.product.image;
    lstCart.push(cart);
    sessionStorage.setItem('cart', JSON.stringify(lstCart));
    window.location.reload();
    showNotification('Thêm sản phẩm vào giỏ hàng thành công', 'success');
  }

  pay(){
    window.location.replace('/checkout');
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Chi tiết sản phẩm</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row row-pb-lg product-detail-wrap">
              <div className="col-sm-8">
                <div>
                  <div className="item">
                    <div className="product-entry border">
                      <a href="#" className="prod-img">
                        <img src={this.state.product.image} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-desc">
                  <h3>{this.state.product.product_name}</h3>
                  <p className="price">
                    <span>{Number(this.state.product.price).toLocaleString('en-US')} VNĐ</span>
                    <span className="rate">
                      <i className="icon-star-full"></i>
                      <i className="icon-star-full"></i>
                      <i className="icon-star-full"></i>
                      <i className="icon-star-full"></i>
                      <i className="icon-star-full"></i>
                    </span>
                  </p>
                  <p>{this.state.product.description}</p>
                  <div className="size-wrap">
                    <div className="block-26 mb-2">
                      <h4>Size</h4>
                      <ul>
                        <li><a href="#">38</a></li>
                        <li><a href="#">39</a></li>
                        <li><a href="#">40</a></li>
                        <li><a href="#">41</a></li>
                        <li><a href="#">42</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="">
                        <i className="icon-minus2"></i>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="100" />
                    <span className="input-group-btn ml-1">
                      <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
                        <i className="icon-plus2"></i>
                      </button>
                    </span>
                  </div>
                  <div className="row">
                    <a style={{ color: 'white' }} className="btn btn-primary btn-addtocart" onClick={() => this.addCart()}><i className="icon-shopping-cart"></i> Thêm vào giỏ hàng</a>
                    <a style={{ color: 'white' }} className="btn btn-primary" onClick={() => this.pay()}>Thanh toán</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-md-12 pills">
                    <div className="bd-example bd-example-tabs">
                      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                        <li className="nav-item">
                          <a className="nav-link active" id="pills-description-tab" data-toggle="pill" role="tab" aria-controls="pills-description" aria-expanded="true">Nội dung</a>
                        </li>
                      </ul>

                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                          {this.state.product.content}
                        </div>

                      </div>
                    </div>
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

export default Product_Detail;
