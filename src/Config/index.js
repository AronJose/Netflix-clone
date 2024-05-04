const env = {
  development: {
    api: "https://api.themoviedb.org/3",
    img_url: "https://image.tmdb.org/t/p/w500",
    youtube: "https://www.youtube.com/embed",
  },
};
var api_key ="d8d89ac4533f23ab7f5b883346bbd36c"
const all = {
  routes: {
    en_us: "/trending/all/day?language=en-US",
    ComedyMovies: `/discover/movie?api_key=${api_key}7D&with_genres=35`,
    youtube1: `/movie`,
    youtube2: `videos?api_key=${api_key}&language=en-US`,
  },
};
console.log("process.env.NODE_ENV", process.env.REACT_APP_ENV);
const config = {
  api_key,
  ...all,
  ...env[process.env.REACT_APP_ENV || "development"],
};

export default config;
