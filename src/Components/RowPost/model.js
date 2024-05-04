import * as service from "./service";

export const Moviz = {
  state: {
    movi: [],
    moviAction: [],
    youtube: [],
  },
  reducers: {
    onFetchMoviSuccess: (state, data) => {
      return {
        ...state,
        movi: data,
      };
    },
    onFetchActionSuccess: (state, data) => {
      return {
        ...state,
        moviAction: data,
      };
    },
    onFetchYoutubeSuccess: (state, data) => {
      return {
        ...state,
        youtube: data,
      };
    },
  },
  effects: () => ({
    async getMovies(payload) {
      let res = await service.getMovies(payload);
      this.onFetchMoviSuccess(res);
      return res;
    },

    async getAction(payload) {
      let res = await service.getAction(payload);
      this.onFetchActionSuccess(res);
      return res;
    },
    async getYoutube(payload) {
      let res = await service.getYoutube(payload);
      this.onFetchYoutubeSuccess(res);
      return res;
    },
  }),
};
