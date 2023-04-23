import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { filterProduct, getListBranch, getListCategory, getListColor, getListProduct, getListSize } from '../../service/Shop';

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listBranch: [],
      listColor: [],
      listSize: [],
      listProduct: [],
      listCategory: [],
      branchId: '',
      categoryId: ''
    }
  }

  componentDidMount() {
    let promise, promiseSize, promiseColor, promiseProduct;
    promise = getListBranch();
    promise
      .then(response => {
        this.setState({
          listBranch: response
        })
      }).catch(error => {
        console.log(error)
      });
    promiseColor = getListColor();
    promiseColor
      .then(response => {
        this.setState({
          listColor: response
        })
      }).catch(error => {
        console.log(error)
      });
    getListCategory()
      .then(response => {
        this.setState({
          listCategory: response
        })
      }).catch(error => {
        console.log(error)
      });
    promiseSize = getListSize();
    promiseSize
      .then(response => {
        this.setState({
          listSize: response
        })
      }).catch(error => {
        console.log(error)
      });
    promiseProduct = getListProduct();
    promiseProduct
      .then(response => {
        this.setState({
          listProduct: response
        })
      }).catch(error => {
        console.log(error)
      });
  }

  detailProduct(product) {
    window.location.replace('/detail/' + product.id);
  }

  onSearch = () => {
    filterProduct(this.state.branchId, this.state.categoryId)
      .then(response => {
        this.setState({
          listProduct: response.item
        })
      }).catch(error => {
        console.log(error)
      });
  }

  setBranchId = (id) => {
    this.setState({ branchId: id });
    setTimeout(() => this.onSearch(), 1000);
  }

  setCategoryId = (id) => {
    this.setState({ categoryId: id });
    setTimeout(() => this.onSearch(), 1000);
  }

  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Shop</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="colorlib-featured">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <div className="featured-img featured-img-2" style={{ backgroundImage: `url(../assets/images/img_bg_2.jpg)` }}>
                    <h2>Casuals</h2>
                    <p><a href="#" className="btn btn-primary btn-lg">Mua ngay</a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <div className="featured-img featured-img-2" style={{ backgroundImage: `url(../assets/images/women.jpg)` }}>
                    <h2>Dress</h2>
                    <p><a href="#" className="btn btn-primary btn-lg">Mua ngay</a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="featured">
                  <div className="featured-img featured-img-2" style={{ backgroundImage: `url(../assets/images/item-11.jpg)` }}>
                    <h2>Sports</h2>
                    <p><a href="#" className="btn btn-primary btn-lg">Mua ngay</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-xl-3">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="side border mb-1">
                      <h3>Loại sản phẩm</h3>
                      <ul>
                        {this.state.listCategory.map((c) => (
                          <li style={{ cursor: "pointer" }} onClick={() => this.setCategoryId(c.id)}>{c.category_name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="side border mb-1">
                      <h3>Nhãn hàng</h3>
                      <ul>
                        {this.state.listBranch.map((b) => (
                          <li style={{ cursor: "pointer" }} onClick={() => this.setBranchId(b.id)}>{b.branch_name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-sm-12">
                    <div className="side border mb-1">
                      <h3>Size</h3>
                      <div className="block-26 mb-2">
                        <h4>Size</h4>
                        <ul>
                          {this.state.listSize.map((s) => (
                            <li style={{ cursor: "pointer" }}>{s.size_name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-9 col-xl-9">
                <div className="row row-pb-md">
                  {this.state.listProduct.map((p) => (
                    <div className="col-lg-4 mb-4 text-center" onClick={() => this.detailProduct(p)}>
                      <div className="product-entry border">
                        <a className="prod-img">
                          <img src={'../../../assets' + p.image} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                        </a>
                        <div className="desc">
                          <h2><a href="#">{p.product_name}</a></h2>
                          <span className="price">{Number(p.price).toLocaleString('en-US')}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                {/* <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="block-27">
                      <ul>
                        <li><a href="#"><i className="ion-ios-arrow-back"></i></a></li>
                        <li className="active"><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><i className="ion-ios-arrow-forward"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Trusted Partners</h2>
              </div>
            </div>
            <div className="row">
              <div className="col partner-col text-center">
                <img src="../assets/images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
              </div>
              <div className="col partner-col text-center">
                <img src="../assets/images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
              </div>
              <div className="col partner-col text-center">
                <img src="../assets/images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
              </div>
              <div className="col partner-col text-center">
                <img src="../assets/images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
              </div>
              <div className="col partner-col text-center">
                <img src="../assets/images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Shop;
