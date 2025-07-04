const fetch = require('node-fetch');
const api = process.env.REACT_APP_NEWS_API;
exports.handler = async (event, context) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}&pageSize=9&page=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong." })
    };
  }
};
