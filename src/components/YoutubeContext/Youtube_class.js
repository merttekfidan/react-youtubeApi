import axios from "axios";

export class Youtube_class {
  KEY = "AIzaSyAPlR8SPBTtkDAGKEbfnAivSlSwnHa2who";

  youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: this.KEY, maxResults: 10 },
  });
  async onTermSubmit(term) {
    return await this.youtube.get("/search", {
      params: {
        part: "snippet",
        q: term,
      },
    });
  }
  async video(id) {
    return await this.youtube.get("/videos", {
      params: {
        part: "statistics",
        id: id,
      },
    });
  }
}
