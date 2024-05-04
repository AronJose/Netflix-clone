import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useDispatch } from "react-redux";
import config from "../../Config/index";

function Banner() {
  const dispatch = useDispatch();
  const [ismovi, setIsmovi] = useState([]);

  const Movies = async () => {
    let res = await dispatch.Moviz.getMovies();
    setIsmovi(res.results[1]);
  };
  useEffect(() => {
    Movies();
  }, []);
  const backgroundImageUrl = `${config.img_url}/${ismovi.backdrop_path}`;

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="content">
        <p className="titles">{ismovi.title}</p>
        <div className="banner_button">
          <button className="button">play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{ismovi.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
