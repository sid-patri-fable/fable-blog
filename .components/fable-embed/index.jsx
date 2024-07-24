import React, { useEffect, useState } from "react";

const FableEmbed = (props) => {
  const [showEmbedFrame, setShowEmbedFrame] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowEmbedFrame(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <div className="fable-embed-con">
      {showEmbedFrame && (
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", height: "60vh" }}
          width="100%"
          height="100%"
          src={props.src}
          allowFullScreen
        ></iframe>
      )}
      {!showEmbedFrame && (
        <div
          style={{
            width: "100%",
            height: "60vh",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}
        ></div>
      )}
    </div>
  );
};

export default FableEmbed;
