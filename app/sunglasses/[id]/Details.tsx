import React, { useState } from "react";
import DetailsButton from "./DetailsButton";

export enum DetailsType {
  DETAILS = "DETAILS",
  DESCRIPTION = "DESCRIPTION",
  LENSES = "LENSES",
}

const Details = () => {
  const [selectedDetails, setSelectedDetails] = useState(DetailsType.DETAILS);
  const handleSetSelectedDetails = (details: DetailsType) => {
    setSelectedDetails(details);
  };

  let body = <div></div>;

  console.log(selectedDetails);

  if (selectedDetails === DetailsType.DETAILS) {
    body = (
      <ul className="list-detail-sectio px-4 py-6 space-y-2">
        <li className="flex items-center">
          <span className="attr-title font-semibold w-20 ">Size:</span>
          <span className="ml-1">Large |</span>
          <span className="ml-1">55</span>
          <span className="sizes-symbol ml-1">□</span>
          <span className="ml-1">17-142</span>
        </li>
        <li className="flex items-center">
          <span className="attr-title font-semibold w-20 ">Color:</span>
          <a
            className="detail-attr-color   ml-1"
            title="Click to view all Navy Gray sunglasses"
            href="/sunglasses/blue"
          >
            Navy Gray Sunglasses
          </a>
        </li>
        <li className="flex items-center">
          <span className="attr-title font-semibold w-20 ">Weight:</span>
          <span className="ml-1">Lightweight (15g)</span>
        </li>
        <li className="flex items-center">
          <span className="attr-title font-semibold w-20 ">Material:</span>
          <span className="ml-1">plastic</span>
        </li>
        <li className="flex items-center">
          <span className="attr-title font-semibold w-20 ">Shape:</span>
          <a className="detail-attr-shape ml-1">Square</a>
        </li>
      </ul>
    );
  } else if (selectedDetails === DetailsType.DESCRIPTION) {
    body = (
      <div className="px-4 py-6">
        <h2 className="text-3xl font-semibold mb-4">About Vynil</h2>
        <p className="text-[14px]">
          When the weather’s perfect, nothing beats taking a trip to the
          waterside. Crest keeps things cool with its chill navy color and deep
          gray lenses — but what really makes it special is its unique plastic
          material. Accidentally drop this square frame in the water, and it’ll
          float back to the surface before you can even panic. Prescription
          lenses not available.
        </p>
      </div>
    );
  } else if (selectedDetails === DetailsType.LENSES) {
    body = <div>Lenses</div>;
  }

  return (
    <div>
      <div className="flex border-t-[1px] border-b-[1px] border-gray-400  w-full justify-evenly">
        <DetailsButton
          detailsType={DetailsType.DETAILS}
          handleClick={handleSetSelectedDetails}
        />
        <DetailsButton
          detailsType={DetailsType.DESCRIPTION}
          handleClick={handleSetSelectedDetails}
        />
        <DetailsButton
          detailsType={DetailsType.LENSES}
          handleClick={handleSetSelectedDetails}
        />
      </div>
      <div>{body}</div>
    </div>
  );
};

export default Details;
