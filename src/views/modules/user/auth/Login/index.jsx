import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../../services/auth";
import { notification, setAccessToken } from "../../../../../utils/helpers";

export default function Login() {
  const navigate = useNavigate();
  let form = useRef({
    email: null,
    password: null,
  });

  // on submit call login service
  const submit = useCallback(async (e) => {
    e.preventDefault();

    let { data } = await login(form.current);
    if (data) {
      notification(data?.data?.message);
      setAccessToken(data?.data?.token);
      window.location.reload();
    }
  });
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
                      <h3>Login</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <form onSubmit={(e) => submit(e)}>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={(e) =>
                              (form.current.email = e.target.value)
                            }
                            placeholder="Email address"
                            required=""
                            className="single-input"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={(e) =>
                              (form.current.password = e.target.value)
                            }
                            placeholder="password"
                            required=""
                            className="single-input"
                          ></input>
                        </div>
                        <button
                          type="submit"
                          className="genric-btn primary circle"
                        >
                          Login
                        </button>
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
