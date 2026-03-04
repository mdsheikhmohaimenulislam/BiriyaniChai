import React from "react";

const SingleCard = ({ ifterData }) => {
  const { description, upazila, mosque, iftar, district } = ifterData || {};
 
  return (
    <div>
      <div className="card card-dash bg-gray-300 ">
        <div className="card-body">
          <div>
            <h2 className="text-xl">
              <span className="text-gray-500">District:</span>{" "}
              <span className="font-bold">{district}</span>
            </h2>
            <h2 className="text-xl">
              <span className="text-gray-500">Upazila:</span>{" "}
              <span className="font-bold">{upazila}</span>
            </h2>
          </div>
          <div>
            <h2 className="text-xl">
              <span className="text-gray-500">Mosque:</span>{" "}
              <span className="font-bold">{mosque}</span>
            </h2>
            <h2 className="text-xl">
              <span className="text-gray-500">Iftar:</span>{" "}
              <span className="font-bold">{iftar}</span>
            </h2>
            <h2 className="text-xl">
              <span className="text-gray-500">Description: </span>
            </h2>
            <span className="text-xl font-bold">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
