import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://cats-new-news.herokuapp.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    console.log(data);
    return data.topics;
  });
};

export const getArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    console.log(data);
    return data.articles;
  });
};
