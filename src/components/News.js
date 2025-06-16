import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchInitialNews = async () => {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
      setPage(1);
      setHasMore((parsedData.articles?.length || 0) > 0);
      setLoading(false);
    };

    document.title = `${capitalizeFirstLetter(props.category)} - NewsGrid`;
    fetchInitialNews();
  }, [props.apiKey, props.category, props.country, props.pageSize]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    const newArticles = parsedData.articles || [];

    if (
      newArticles.length === 0 ||
      articles.length + newArticles.length >= totalResults
    ) {
      setHasMore(false);
    }

    setArticles((prevArticles) => [...prevArticles, ...newArticles]);
    setPage(nextPage);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center mt-5 mb-3">NewsGrid - Top Headlines</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Yay! You have seen it all.
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.length > 45
                        ? element.title.slice(0, 45) + "..."
                        : element.title
                      : ""
                  }
                  description={
                    element.description
                      ? element.description.length > 88
                        ? element.description.slice(0, 88) + "..."
                        : element.description
                      : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png"
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
