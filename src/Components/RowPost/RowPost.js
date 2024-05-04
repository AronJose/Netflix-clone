import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { useDispatch } from "react-redux";
import NetflixCore from "./NetflixCore";

function RowPost() {
  const dispatch = useDispatch();
  const [ismovi, setIsmovi] = useState([]);
  const [isaction, setIsaction] = useState([]);

  const originMovies = async () => {
    let res = await dispatch.Moviz.getMovies();
    setIsmovi(res.results);
  };
  const actionMovies = async () => {
    let res = await dispatch.Moviz.getAction();
    setIsaction(res.results);
  };

  useEffect(() => {
    originMovies();
    actionMovies();
  }, []);

  return (
    <div className="row">
      <h2>Netflix Movies</h2>
      <div className="posters">
        {ismovi &&
          ismovi.map((item) => (
            <div className="poster">
              <NetflixCore item={item} />
            </div>
          ))}
      </div>
      <div>
        <h2>Action</h2>
        <div className="posters">
          {isaction &&
            isaction.map((items) => (
              <div className="smallposter">
                <NetflixCore items={items} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RowPost;
