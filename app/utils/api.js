import regeneratorRuntime from "regenerator-runtime";

export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};
