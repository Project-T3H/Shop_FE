import Footer from "../../../components/Page/Footer";
import Header from "../../../components/Page/Header";

import React, { Component } from 'react';

class Forgot_Password extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="account section mt-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="login-form border p-5 shadow">
                  <div className="text-center heading">
                    <h3 className="mb-2 h2">Quên mật khẩu</h3>
                  </div>
                  <form action="/">
                    <div className="form-group mb-4">
                      <label>Email đăng ký</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập email đăng ký"
                      />
                    </div>
                    <a href="/" className="btn mt-3 btn-primary w-100">
                      Lấy mã OTP
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Forgot_Password;