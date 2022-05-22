import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Trending = ({ id, url, title }) => {
  const [photo, setPhoto] = useState({});
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = useParams();
  console.log("query", photo);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos?id=" + query.id)
      .then((response) => response.json())
      .then((json) => {
        setPhoto(json[0]);
        setLoading(false);
      });
    fetch("https://jsonplaceholder.typicode.com/album/1/photos?albumId=1")
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="trending">
      <div className="trending__inner">
        <img className="trending__img" src={photo.url} alt="image" />
        <h3>{photo.title}</h3>
      </div>
      <div className="treding__list">
        {!loading ? (
          photos?.map((item) => (
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

export default Trending;
