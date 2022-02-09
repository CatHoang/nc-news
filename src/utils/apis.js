import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://cats-new-news.herokuapp.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, order, sort_by) => {
  return ncNewsApi
    .get("/articles", { params: { topic, order, sort_by } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, username, body) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchArticle = (article_id, inc_votes) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, inc_votes)
    .then(({ data }) => {
      return data.articles;
    });
};

export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};
