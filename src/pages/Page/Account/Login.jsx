import { Link } from "react-router-dom";
import Header from "../../../components/Page/Header";

import React, { Component } from 'react';
import { login } from "../../../service/Page/Login";
import { showNotification } from "../../../service/NotificationService";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  setParam = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }


  login = () => {
    var username = this.state.username;
    var password = this.state.password;
    login(username, password)
      .then(response => {
        localStorage.setItem('accessToken', response.jwt);
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        showNotification('Đăng nhập thành công', 'success');
        console.log(response.user);
        if (response.user !== null) {
          if (response.user[0].role_name === "ADMIN") {
            window.location.replace("/admin/home")
          } else {
            window.location.replace("/")
          }
        }
      }).catch(error => {
        console.log(error)
        showNotification('Đăng nhập thất bại!', 'danger');
      });
  }

  render() {
    return (
      <div id="page">
        <section className="vh-100">
          <Header />
          <div
            className="container py-5 pb-3 border border-light round-left shadow"
            style={{ marginTop: 50, marginBottom: 100 }}
          >
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <figure>
                  <img
                    src="../assets/images/bg-login.jpg"
                    alt="image_login"
                    title="image_login"
                    style={{ marginLeft: 150 }}
                  />
                </figure>
              </div>

              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h2 className="form-title mb-3 text-center text-uppercase">
                  Đăng nhập
                </h2>
                <form id="login-form">
                  {/* User Input */}
                  <div className="form-outline mb-3">
                    <label htmlFor="user">Tên đăng nhập</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Tên đăng nhập"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  {/* Password Input */}
                  <div className="form-outline mb-4">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Mật khẩu"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center text-right">
                    {/* Checkbox */}
                    <Link
                      to={"/forgot-password"}
                      className="text-decoration-none"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg w-100"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      onClick={this.login}
                    >
                      Đăng nhập
                    </button>
                    <p className="text-center small fw-bold mt-2 pt-1 mb-0">
                      Bạn chưa có tài khoản?
                      <Link
                        to={"/register"}
                        className="text-center link-danger text-decoration-none mb-6"
                      >
                        {" "}
                        Đăng ký
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
