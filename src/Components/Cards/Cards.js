import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch("DB.json")
    .then(res=>res.json())
    .then(data=>setActivity(data))
  }, []);

console.log(activity)

  return (
    <div className="body-left-part col-span-3 px-28 mb-12">
      {/* website title part here */}
      <div className="title flex items-center text-blue-600 mb-12 mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clip-rule="evenodd"
          />
        </svg>

        <h1 className="text-blue-500 font-mono font-bold text-2xl">
          Jonakr Activity Club
        </h1>
      </div>

      {/* main card section */}

      <div className="cards-main grid grid-cols-3 gap-4">
        {/* cards bodies */}

       {
        activity.map(data=><Card key={data.id} activity={data}></Card>)
       }
      </div>
    </div>
  );
};

export default Cards;