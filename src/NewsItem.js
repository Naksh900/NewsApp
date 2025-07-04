import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  const myStyleItem = {
    color: "black",
    fontWeight: 'bold',
    backgroundColor: "#eed2cd",
    fontFamily: "sans-serif",
    border: "2px"
  }

  return (
    <div clss="my-3">
      <div className="card" style={myStyleItem}>
        <img src={imageUrl} className="card-img-top" alt="/" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
