import React from "react";
import PageBanner from "components/PageBanner";

const Home: React.FC = () => {
  return (
    <div>
      <PageBanner />
      {/* <hr />
      <h3>Environmental variables:</h3>
      <p>
        process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
      </p>
      <p>
        process.env.NAME: <b>{process.env.NAME}</b>
      </p>
      <p>
        process.env.VERSION: <b>{process.env.VERSION}</b>
      </p> */}
    </div>
  );
};

export default Home;
