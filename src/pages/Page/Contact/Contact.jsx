import React, { Component } from 'react';
import Footer from '../../../components/Page/Footer';
import Header from '../../../components/Page/Header';

class Contact extends Component {
    render() {
        return (
            <div id='page'>
                <Header />
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Liên hệ</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="colorlib-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Thông tin liên hệ</h3>
                                <div className="row contact-info-wrap">
                                    <div className="col-md-3">
                                        <p><span><i className="icon-location"></i></span> 999 Cổ Nhuế, Bắc Từ Liêm, Hà Nội</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-phone3"></i></span> <a href="#">0987654321</a></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-paperplane"></i></span> <a href="#">myshop@gmail.com</a></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-globe"></i></span> <a href="#">myshop.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact-wrap">
                                    <h3>Thông tin liên hệ</h3>
                                    <form action="#" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Họ</label>
                                                    <input type="text" className="form-control" placeholder="Nhập họ của bạn" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Tên</label>
                                                    <input type="text" className="form-control" placeholder="Nhập tên của bạn" />
                                                </div>
                                            </div>
                                            <div className="w-100"></div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control" placeholder="Nhập địa chỉ email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Số điện thoại</label>
                                                    <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                                                </div>
                                            </div>
                                            <div className="w-100"></div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label for="subject">Tiêu đề</label>
                                                    <input type="text" className="form-control" placeholder="Nhập tiêu đề" />
                                                </div>
                                            </div>
                                            <div className="w-100"></div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Nội dung</label>
                                                    <textarea name="message" cols="50" rows="30" className="form-control" placeholder="Nhập nội dung"></textarea>
                                                </div>
                                            </div>
                                            <div className="w-100"></div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary">Gửi liên hệ</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default Contact;