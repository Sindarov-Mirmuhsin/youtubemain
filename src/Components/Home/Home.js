import React, { useState, useEffect } from "react";
import InputSearch from "../../Assets/Images/search.png";
import Video from "../../Assets/Images/video.png";
import Point from "../../Assets/Images/nuqta.png";
import Bell from "../../Assets/Images/qongiroq.png";
import Person from "../../Assets/Images/person.png";

import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [photosRow1, setPhotosRow1] = useState([]);
  const [photosRow2, setPhotosRow2] = useState([]);
  const [photosRow3, setPhotosRow3] = useState([]);
  const [photosRow4, setPhotosRow4] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/album/1/photos?albumId=1")
      .then((response) => response.json())
      .then((json) => {
        setPhotosRow1(json);
        setLoading(false);
      });
    fetch("https://jsonplaceholder.typicode.com/album/2/photos?albumId=2")
      .then((response) => response.json())
      .then((json) => {
        setPhotosRow2(json);
        setLoading(false);
      });
    fetch("https://jsonplaceholder.typicode.com/album/3/photos?albumId=3")
      .then((response) => response.json())
      .then((json) => {
        setPhotosRow3(json);
        setLoading(false);
      });
    fetch("https://jsonplaceholder.typicode.com/album/4/photos?albumId=4")
      .then((response) => response.json())
      .then((json) => {
        setPhotosRow4(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <div className="home__inner">
        <img src={InputSearch} alt="InputSearch" />
        <div className="home__box">
          <img className="home__video" src={Video} alt="Video" />
          <img className="home__point" src={Point} alt="Point" />
          <img className="home__bell" src={Bell} alt="Bell" />
          <img className="home__person" src={Person} alt="Person" />
        </div>
      </div>
      <div className="videos__list">
        {!loading ? (
          photosRow1.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className="videos__item"
            >
              <img className="home__img" src={item.url} alt="image" />
              <h3>{item?.title}</h3>
            </Link>
          ))
        ) : (
          <>
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="videos__loading">
                <div className="videos__loading--animation" />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="videos__list">
        {!loading ? (
          photosRow2.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className="videos__item"
            >
              <img className="home__img" src={item.url} alt="image" />
              <h3>{item?.title}</h3>
            </Link>
          ))
        ) : (
          <>
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="videos__loading">
                <div className="videos__loading--animation" />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="videos__list">
        {!loading ? (
          photosRow2.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className="videos__item"
            >
              <img className="home__img" src={item.url} alt="image" />
              <h3>{item?.title}</h3>
            </Link>
          ))
        ) : (
          <>
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="videos__loading">
                <div className="videos__loading--animation" />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="videos__list">
        {!loading ? (
          photosRow3.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className="videos__item"
            >
              <img className="home__img" src={item.url} alt="image" />
              <h3>{item?.title}</h3>
            </Link>
          ))
        ) : (
          <>
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="videos__loading">
                <div className="videos__loading--animation" />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="videos__list">
        {!loading ? (
          photosRow4.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              key={item.id}
              className="videos__item"
            >
              <img className="home__img" src={item.url} alt="image" />
              <h3>{item?.title}</h3>
            </Link>
          ))
        ) : (
          <>
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="videos__loading">
                <div className="videos__loading--animation" />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
