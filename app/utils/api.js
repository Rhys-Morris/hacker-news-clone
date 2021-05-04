import regeneratorRuntime from "regenerator-runtime";

export const fetchTopArticles = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const fetchStory = async (id) => {};
