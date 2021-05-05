import regeneratorRuntime from "regenerator-runtime";

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw new Error("An error occured fetching data");
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
