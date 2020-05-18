import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Store";
import { Youtube_class } from "./Youtube_class";
import Scope from "./Scope";
import Test from "./Test";
function YoutubeContext() {
  const [state, dispatch] = useContext(Context);
  const [results, setResults] = useState([]);
  const [video, setVideo] = useState([]);
  const youtube = new Youtube_class();
  async function getVideo(id) {
    youtube.video(id).then((data) => {
      return data.data.items[0].statistics;
    });
  }

  useEffect(() => {
    youtube.onTermSubmit(state.searchTerm).then((data) => {
      setResults(data.data.items);
    });
  }, [state.searchTerm]);

  return (
    <div>
      <div className="container">
        {console.log({ video, results })}

        {results.map((res, i) =>
          res.snippet.liveBroadcastContent === "none" ? (
            <div key={"key" + i}>
              <Scope key={"scope-" + i} val={res.snippet} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default YoutubeContext;
