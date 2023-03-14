import React from "react";

export default function Register() {

  const registerUser  = async () => {
    

  }
  return (
    <>
      <main>
        {/* Whats New Start */}
        <section className="whats-news-area pt-50 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-lg-8">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-12 col-md-12">
                    <div className="section-tittle mb-30">
                      <h3>Sign up</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <form>
                      <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="name" placeholder="name"  required="" class="single-input"></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email address"  required="" class="single-input"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="password"  required="" class="single-input"></input>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirm" placeholder="confirm password"  required="" class="single-input"></input>
                        </div>
                        <a href="#" class="genric-btn primary circle">Register</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
