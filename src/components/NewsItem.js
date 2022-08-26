import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, Newsurl, author, date} = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18 rem" }}>
          <img
            src={
              !imageUrl
                ? "https://img.etimg.com/thumb/msid-92598336,width-1070,height-580,imgsize-120268,overlay-economictimes/photo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{title}....</h4>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted" />By {!author?"Unknown":author} on {date}</p>
            <a href={Newsurl} target="_blank" className="btn btn-primary">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }
}
