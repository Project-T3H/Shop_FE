import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="colorlib-footer" role="contentinfo">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col footer-col colorlib-widget">
                <h4>Thông tin</h4>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                <p>
                  <ul className="colorlib-social-icons">
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin"></i></a></li>
                    <li><a href="#"><i className="icon-dribbble"></i></a></li>
                  </ul>
                </p>
              </div>
              <div className="col footer-col colorlib-widget">
                <h4>Dịch vụ khách hàng</h4>
                <p>
                  <ul className="colorlib-footer-links">
                    <li><a href="/news">Giới thiệu</a></li>
                    <li><a href="#">Hướng dẫn đặt hàng</a></li>
                    <li><a href="#">Chính sách đổi trả</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Hệ thống cửa hàng</a></li>
                  </ul>
                </p>
              </div>
              <div className="col footer-col colorlib-widget">
                <h4>Thông tin</h4>
                <p>
                  <ul className="colorlib-footer-links">
                    <li><a href="#">Thông tin về chúng tôi</a></li>
                    <li><a href="#">Thông tin giao hàng</a></li>
                    <li><a href="#">Hỗ trợ</a></li>
                    <li><a href="#">Kiểm tra đơn hàng</a></li>
                  </ul>
                </p>
              </div>

              <div className="col footer-col">
                <h4>Tin tức</h4>
                <ul className="colorlib-footer-links">
                  <li><a href="">Blog</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Exhibitions</a></li>
                </ul>
              </div>

              <div className="col footer-col">
                <h4>Thông tin liên hệ</h4>
                <ul className="colorlib-footer-links">
                  <li>999 Cổ Nhuế, <br /> Bắc Từ Liêm, Hà Nội</li>
                  <li><a href="tel://0987654321">0987654321</a></li>
                  <li><a href="mailto:info@yoursite.com">myshop@gmail.com</a></li>
                  <li><a href="#">myshop.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p>
                  <span>
                    Copyright &copy;MyShop
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;