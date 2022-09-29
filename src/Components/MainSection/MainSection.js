import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Dashbord from "../Dashbord/Dashbord";

const MainSection = () => {
  const [activity, setActivity] = useState([]);

  // getting data from data base
  useEffect(() => {
    fetch("DB.json")
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);

  const [addTime, SetTime] = useState([]);

  let Time = 0;
  //   click event handler
  const clickHandler = (data) => {
     SetTime(data.time);
     Time =addTime + Time;
     console.log(Time)
  };

  return (
    <main>
      <section className="main-body-section">
        <div className="upper-body-section md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <div className="body-left-part col-span-3 px-8 mb-12 md:col-span-2 md:px-8 lg:col-span-3 lg:px-10 xl:px-28">
            {/* title part here */}
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

            {/* main cards */}
            <div className="cards-main flex justify-center flex-col items-center md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activity.map((data) => (
                <Cards
                  key={data.id}
                  activity={data}
                  getTime={() => clickHandler(data)}
                ></Cards>
              ))}
            </div>
          </div>
          <Dashbord time={addTime}></Dashbord>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
