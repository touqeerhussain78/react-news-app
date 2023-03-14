import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../services/config/baseUrl.config";
import { news } from "../../../../services/news";
import Pagination from "../../../components/pagination";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [garticles, setGArticles] = useState([]);
  const [newsType, setNewsType] = useState("guardian");

  const fetchData = async () => {
    try {
      const { data } = await news(newsType);
      if (data.data.docs) {
        setArticles(data.data.docs);
      } else {
        setGArticles(data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [newsType]);
  return (
    <div>
      <main>
        {/* Whats New Start */}
        <section className="whats-news-area pt-50 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-3 col-md-3">
                    <div className="section-tittle mb-30">
                      <h3>Whats New</h3>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="properties__button">
                      {/*Nav Button  */}
                      <select
                        value={newsType}
                        onChange={(e) => setNewsType(e.target.value)}
                      >
                        <option>Select news</option>
                        <option value="newYork">New Yorks</option>
                        <option value="guardian">guardian</option>
                      </select>
                      {/*End Nav Button  */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    {/* Nav Card */}
                    <div className="tab-content" id="nav-tabContent">
                      {/* card one */}
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div className="whats-news-caption">
                          <div className="row">
                            {newsType == "newYork"
                              ? articles.map((d) => (
                                  <div key={d.id} className="col-lg-6 col-md-6">
                                    <div className="single-what-news mb-100">
                                      <div className="what-img">
                                        <img
                                          src={
                                            "https://static01.nyt.com/" +
                                            d?.multimedia[0]?.url
                                          }
                                          alt=""
                                        />
                                      </div>
                                      <div className="what-cap">
                                        <span className="color1">
                                          {d.news_desk}
                                        </span>
                                        <h4>
                                          <a href="#">{d.headline.main}</a>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              : garticles?.results?.map((d) => (
                                  <div key={d.id} className="col-lg-6 col-md-6">
                                    <div className="single-what-news mb-100">
                                      <div className="what-img">
                                        <img src={d.fields.thumbnail} alt="" />
                                      </div>
                                      <div className="what-cap">
                                        <span className="color1">
                                          {d.pillarName}
                                        </span>
                                        <h4>
                                          <a href="#">{d.webTitle}</a>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Nav Card */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* Section Tittle */}
                <div className="section-tittle mb-40">
                  <h3>Follow Us</h3>
                </div>
                {/* Flow Socail */}
                <div className="single-follow mb-45">
                  <div className="single-box">
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#">
                          <img src="assets/img/news/icon-fb.png" alt="" />
                        </a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#">
                          <img src="assets/img/news/icon-tw.png" alt="" />
                        </a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#">
                          <img src="assets/img/news/icon-ins.png" alt="" />
                        </a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#">
                          <img src="assets/img/news/icon-yo.png" alt="" />
                        </a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Fans</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* New Poster */}
                <div className="news-poster d-none d-lg-block">
                  <img src="assets/img/news/news_card.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Whats New End */}
        {/*Start pagination */}
        {/* PAGINATION */}
        <div className="pagination-area pb-45 text-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="single-wrap d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="flaticon-arrow roted" />
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="flaticon-arrow right-arrow" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End pagination  */}
      </main>
    </div>
  );
}
