import React, { Component } from 'react';

class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			quantity: ''
		}
	}

	componentDidMount(){
		let quantity = JSON.parse(sessionStorage.getItem('cart'));
		if(quantity !== null){
			console.log(quantity.length);
			this.setState({quantity: quantity.length});
		}else{
			this.setState({quantity: 0})
		}
	}

	render() {
		return (
			<nav className="colorlib-nav" role="navigation">
			<div className="top-menu">
				<div className="container">
					<div className="row">
						<div className="col-sm-7 col-md-9">
							<div id="colorlib-logo"><a href="/">MyShop</a></div>
						</div>
						<div className="col-sm-5 col-md-3">
							<div className="search-wrap">
								<div className="form-group">
									<input type="search" className="form-control search" placeholder="Tìm kiếm" />
									<button className="btn btn-primary submit-search text-center"><i className="icon-search"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 text-left menu-1">
							<ul>
								<li className="active"><a href="/">Trang chủ</a></li>
								{/* <li class="has-dropdown">
									<a href="/shop">Thể loại</a>
									<ul class="dropdown">
										<li><a href="/shop">Nam</a></li>
										<li><a href="/shop">Nữ</a></li>
									</ul>
								</li> */}
								<li ><a href='/shop'>Shop</a></li>
								<li><a href="/news">Tin tức</a></li>
								<li><a href="/contact">Liên hệ</a></li>
								<li className="cart"><a href="/cart"><i className="icon-shopping-cart"></i> Giỏ hàng [{this.state.quantity}]</a></li>
								<li><a href="/login"><i className="icon-user"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="sale">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center">
							<div className="row">
								<div className="owl-carousel2">
									<div className="item">
										<div className="col">
											<h3><a href="#">Giảm giá 25% cho tất cả các mặt hàng</a></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		);
	}
}

export default Header;