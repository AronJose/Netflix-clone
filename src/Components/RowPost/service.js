import config from "../../Config/index";
import { api } from "../../Helper/Helper";
console.log(config.youtube, "fcsdhgsdfhfcvsdnhfv");

export async function getMovies(payload) {
  return api()
    .get(config.routes.en_us, payload)
    .then((res) => res.data);
}

export async function getAction(payload) {
  return api()
    .get(config.routes.ComedyMovies, payload)
    .then((res) => res.data);
}
export async function getYoutube(payload) {
  console.log(payload, "payload");
  return api()
    .get(
      `${config.routes.youtube1}/${payload}/${config.routes.youtube2}`,
      payload
    )
    .then((res) => res.data);
}
