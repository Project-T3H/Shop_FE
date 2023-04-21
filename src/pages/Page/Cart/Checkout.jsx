import React, { Component } from 'react';
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";
import { checkout } from '../../../service/Page/Checkout';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lstCart: [],
      totalPrice: '',
      customerName: '',
      phone: '',
      email: '',
      address: '',
    }
  }

  componentDidMount() {
    let lstCart = JSON.parse(sessionStorage.getItem('cart'));
    let total = 0;
    if (lstCart !== null) {
      this.setState({ lstCart: lstCart });
      lstCart.forEach(e => {
        console.log(e.productPrice);
        total = Number(total) + (Number(e.productPrice) * Number(e.productQuantity));
        this.setState({totalPrice: total})
      })
    }
  }

  checkout() {
    let orders = {};
    orders.order_code = this.state.customerName;
    orders.phone = this.state.phone;
    orders.address = this.state.address;
    orders.email = this.state.email;
    orders.total_price = this.state.totalPrice;
    orders.lstOrderItem = this.state.lstCart;
    checkout(orders).then(response => {
      sessionStorage.removeItem('cart');
      window.location.replace('/order-complete');
    })
  }

  setParam = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Thanh toán</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-sm-10 offset-md-1">
                <div className="process-wrap">
                  <div className="process text-center active">
                    <p><span>01</span></p>
                    <h3>Giỏ hàng</h3>
                  </div>
                  <div className="process text-center active">
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
            <div className="row">
              <div className="col-lg-8">
                <form method="post" className="colorlib-form">
                  <h2>Chi tiết hóa đơn</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text" className="form-control" placeholder="Họ và tên" onChange={this.setParam} name="customerName" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="lname">Email</label>
                        <input type="text" className="form-control" placeholder="Email" onChange={this.setParam} name="email" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="companyname">SĐT</label>
                        <input type="text" className="form-control" placeholder="Số điện thoại" onChange={this.setParam} name="phone" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="fname">Địa chỉ</label>
                        <input type="text" className="form-control" placeholder="Địa chỉ" onChange={this.setParam} name="address" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="cart-detail">
                      <h2>Đơn hàng</h2>
                      <ul>
                        <li>
                          <ul>
                            {this.state.lstCart.map((c) =>
                              <li><span>{c.productName} x {c.productQuantity}</span> <span>{(Number(c.productPrice) * Number(c.productQuantity)).toLocaleString('en-US')} VNĐ</span></li>
                            )}
                            {/* <li><span>1 x Product Name</span> <span>$90.00</span></li> */}
                          </ul>
                        </li>
                        <li><span>Tổng tiền</span> <span>{Number(this.state.totalPrice).toLocaleString('en-US')} VNĐ</span></li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-100"></div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p><a onClick={() => this.checkout()} className="btn btn-primary" style={{color: 'white'}}>Đặt hàng</a></p>
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

export default Checkout;