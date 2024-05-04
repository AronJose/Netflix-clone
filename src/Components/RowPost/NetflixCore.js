import { useState } from "react";
import React from "react";
import config from "../../Config/index";
import { useDispatch } from "react-redux";

function NetflixCore({ item, items }) {
  const dispatch = useDispatch();
  const [youtubeKey, setYoutubeKey] = useState(null);

  const handleYoutube = async (id) => {
    let youTube = await dispatch.Moviz.getYoutube(id);
    console.log(youTube, "youTube");
    setYoutubeKey(youTube);
    youTube?.results?.map((value) => {
      if (youTube.id === id) {
        setYoutubeKey(value.key);
      }
    });
  };
  console.log(youtubeKey);

  const handleClick = () => {
    if (item) {
      handleYoutube(item.id);
    } else if (items) {
      handleYoutube(items.id);
    }
  };

  return (
    <div>
      <div>
        <img
          src={`${config.img_url}${
            item ? item.backdrop_path : items.backdrop_path
          }`}
          alt="poster"
          onClick={handleClick}
        />
      </div>
      <div>
        {youtubeKey && (
          <iframe
            title="YouTube Video"
            src={`${config.youtube}/${youtubeKey}`}
            width="auto"
            height="auto"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default NetflixCore;
