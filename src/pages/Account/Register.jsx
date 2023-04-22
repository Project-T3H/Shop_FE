import { Link } from "react-router-dom";
import Header from '../../components/Header';
import { register } from "../../service/Register";
import { Component } from "react";
import { showNotification } from "../../service/NotificationService";

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      phone: '',
      email: ''
    }
  }

  setParam = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }


  register = () => {
    var username = this.state.username;
    var password = this.state.password;
    var phone = this.state.phone;
    var email = this.state.email;
    var dataRegister = {
      username: username,
      password: password,
      phone: phone,
      email: email,
      role: '2'
    }
    register(dataRegister)
      .then(response => {
        console.log(response)
        if(response.Message === 'Success'){
          showNotification('Tạo tài khoản thành công', 'success');
          window.location.replace("/login")
        }
      }).catch(error => {
        console.log(error)
        showNotification('Tạo tài khoản thất bại', 'danger');
      });
  }

  render() {
    return (
      <div id="page" >
        <section className="vh-100">
          <Header />
          <div
            className="container py-5 border border-light round-left shadow"
            style={{ marginTop: 50, marginBottom: 100 }}
          >
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h2 className="form-title mb-3 text-center text-uppercase font-weight-bolder">
                  Đăng ký tài khoản
                </h2>
                <div id="register-form">
                  <div className="form-outline mb-3">
                    {/* Username */}
                    <label>Tên đăng nhập</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Nhập tên đăng nhập"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>
                  <div className="form-outline mb-3">
                    {/* FullName */}
                    <label>Họ và tên</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Nhập họ và tên"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-outline mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Nhập email"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Nhập số điện thoại"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    {/* Password */}
                    <label>Mật khẩu</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    {/* ConfirmPassword */}
                    <label htmlFor="user">Nhập lại mật khẩu</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Nhập lại mật khẩu"
                      className="form-control"
                      onChange={this.setParam}
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg w-100"
                      onClick={this.register}
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Đăng ký
                    </button>
                    <p className="text-center small fw-bold mt-2 pt-1 mb-0">
                      Bạn đã có tài khoản ?
                      <Link
                        to={"/login"}
                        className="text-center link-danger text-decoration-none mb-6"
                      >
                        {" "}
                        Đăng nhập
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-7 col-xl-6">
                <figure>
                  <img
                    src="../assets/images/bg-sign.jpg"
                    alt="image_register"
                    title="register"
                    style={{ marginLeft: 150 }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Register;
