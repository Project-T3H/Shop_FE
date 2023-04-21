import Header from "../../../components/Page/Header";

function Account() {
  return (
    <>
      <Header />
      <section className="breadcrumb-area mt-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Account
                  </li>
                </ol>
              </nav>
              <h5>Account</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="account">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="account-setting">
                <h6>Account setting</h6>
                <form action="/#">
                  <div className="form__div">
                    <input
                      type={"text"}
                      className="form__input"
                      placeholder="Full Name"
                    />
                    <label htmlFor="" className="form__label"></label>
                  </div>
                  <div className="form__div">
                    <input
                      type={"email"}
                      className="form__input"
                      placeholder="Email"
                    />
                    <label htmlFor="" className="form__label"></label>
                  </div>
                  <button type={"submit"} className="btn bg-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="change-password">
                <h6>Change password</h6>
                <form action="/#">
                  <div className="form__div">
                    <input
                      type={"password"}
                      className="form__input"
                      placeholder="Current password"
                    />
                    <label htmlFor="" className="form__label"></label>
                  </div>
                  <div className="form__div">
                    <input
                      type={"password"}
                      className="form__input"
                      placeholder="New passwords"
                    />
                    <label htmlFor="" className="form__label">
                      New passwords
                    </label>
                  </div>
                  <div className="form__div mb-40">
                    <input
                      type={"password"}
                      className="form__input"
                      placeholder="Confirm passwords"
                    />
                    <label htmlFor="" className="form__label"></label>
                  </div>
                  <button type={"submit"} className="btn bg-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
