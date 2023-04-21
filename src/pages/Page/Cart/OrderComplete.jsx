import React, { Component } from 'react';
import Footer from '../../../components/Page/Footer';
import Header from '../../../components/Page/Header';

class OrderComplete extends Component {
    render() {
        return (
            <div id='page'>
                <Header />
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Thanh toán thành công</span></p>
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
                                    <div className="process text-center active">
                                        <p><span>03</span></p>
                                        <h3>Thành công</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1 text-center">
                                <p className="icon-addcart"><span><i className="icon-check"></i></span></p>
                                <h2 className="mb-4">Chúc mừng bạn đã đặt hàng thành công!</h2>
                                <p>
                                    <a href="/" className="btn btn-primary btn-outline-primary">Trang chủ</a>
                                    <a href="/shop" className="btn btn-primary btn-outline-primary"><i className="icon-shopping-cart"></i> Tiếp tục mua</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default OrderComplete;