import axios from "axios";

export class Youtube_class {
  KEY = "AIzaSyD8c9phsIn2isBkCneLPBuwJ2nUnjCVKJ4";
  youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
  });
  async onTermSubmit(term) {
    return await this.youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: this.KEY,
        q: term,
      },
    });
  }
}
