import React from "react";
import moment from "moment";
import "./scope.css";
const Scope = ({ val }) => {
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  return (
    <div>
      <div className="row " style={{ height: "200px" }}>
        <div className="col-12 mh-100">
          <div className="card">
            <div className="card-horizontal">
              <div className="img-square-wrapper ">
                <img
                  className="align-middle"
                  src={val.thumbnails.medium.url}
                  alt={val.channelTitle}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">{renderHTML(val.title)}</h4>
                <div className="row">
                  <div className="col-4">{val.channelTitle}</div>
                  <div className="col-4">views</div>
                  <div className="col-4">
                    {moment(val.publishedAt).format("DD MMM, YYYY")}
                  </div>
                </div>
                <p className="card-text">{val.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scope;
