import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lstCart: []
    }
  }

  componentDidMount() {
    let lstCart = JSON.parse(sessionStorage.getItem('cart'));
    if (lstCart !== null) {
      this.setState({ lstCart: lstCart });
    }
  }

  routerCheckout(){
    window.location.replace('/checkout');
  }

  routerHome() {
    window.location.replace('/');
  }

  deleteItemCart(i){
    this.state.lstCart.splice(i, 1);
    console.log(this.state.lstCart);
    sessionStorage.setItem('cart', JSON.stringify(this.state.lstCart));
    window.location.reload();
  }
  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Giỏ hàng</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="colorlib-product">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-md-10 offset-md-1">
                <div className="process-wrap">
                  <div className="process text-center active">
                    <p><span>01</span></p>
                    <h3>Giỏ hàng</h3>
                  </div>
                  <div className="process text-center">
                    <p><span>02</span></p>
                    <h3>Thanh toán</h3>
                  </div>
                  <div className="process text-center">
                    <p><span>03</span></p>
                    <h3>Thành công</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-pb-lg">
              <div className="col-md-12">
                <div className="product-name d-flex">
                  <div className="one-forth text-left px-4">
                    <span>Tên sản phẩm</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Giá</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Số lượng</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Tổng</span>
                  </div>
                  <div className="one-eight text-center px-4">
                    <span>Xóa</span>
                  </div>
                </div>
                {this.state.lstCart.map((c, index) => (
                  <div className="product-cart d-flex">
                    <div className="one-forth">
                      <div className="product-img" style={{ backgroundImage: `url(${'../../../assets' + c.productImage})` }}>
                      </div>
                      {/* <img src={'../../../assets' + c.productImage} className="product-img"></img> */}
                      <div className="display-tc">
                        <h3>{c.productName}</h3>
                      </div>
                    </div>
                    <div className="one-eight text-center">
                      <div className="display-tc">
                        <span className="price">{Number(c.productPrice).toLocaleString('en-US')} VNĐ</span>
                      </div>
                    </div>
                    <div className="one-eight text-center">
                      <div className="display-tc">
                        <input type="number" id="quantity" name="quantity" className="form-control input-number text-center" value={c.productQuantity} min="1" max="100" readOnly />
                      </div>
                    </div>
                    <div className="one-eight text-center">
                      <div className="display-tc">
                        <span className="price">{(Number(c.productPrice) * Number(c.productQuantity)).toLocaleString('en-US')} VNĐ</span>
                      </div>
                    </div>
                    <div className="one-eight text-center">
                      <div className="display-tc">
                        <a className="closed" style={{ borderRadius: '8px', cursor: "pointer" }} onClick={() => this.deleteItemCart(index)}></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6 d-flex flex-row-reverse">
                <button type="button" className="btn btn-primary d-flex flex-row-reverse" onClick={() => this.routerHome()}> Trang chủ</button>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-primary" onClick={() => this.routerCheckout()}>Thanh toán</button>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
