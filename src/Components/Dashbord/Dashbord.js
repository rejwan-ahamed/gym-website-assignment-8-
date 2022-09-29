import React from "react";

const Dashbord = () => {
  return (
    <div className="body-right-part">
      <div className="main-dashboard bg-white w-full h-max p-8">
        {/* dash board avatar section */}
        <div className="avatar flex items-center">
          <img
            src="https://yt3.ggpht.com/ytc/AMLnZu-QHJPJL38XCYs6Zj8Fq2LytPQlDdZEKAdCatuhTw=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            srcset=""
            className="w-16 h-16 rounded-full"
          />
          <div className="details ml-2">
            <h2 className="font-mono font-bold text-[20px]">Jhankar Mahbub</h2>
            <p className="font-mono font-bold text-[16px] text-gray-700 flex items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              CA, USA
            </p>
          </div>
        </div>

        {/* body details section */}
        <div className="personal-info bg-blue-200 w-full h-auto rounded-md mt-12 flex justify-between items-center gap-4 px-10 py-3">
          <div className="details-1 text-center">
            <h2 className="font-mono text-[25px] font-bold">70</h2>
            <p className="font-mono font-bold text-gray-700">Weight</p>
          </div>
          <div className="details-1 text-center">
            <h2 className="font-mono text-[25px] font-bold">5.5</h2>
            <p className="font-mono font-bold text-gray-700">Height</p>
          </div>
          <div className="details-1 text-center">
            <h2 className="font-mono text-[25px] font-bold">28</h2>
            <p className="font-mono font-bold text-gray-700">Age</p>
          </div>
        </div>

        {/* add break section here */}
        <div className="add-break">
          <h2 className="text-[20px] font-mono font-bold mt-10 mb-4">
            Add break
          </h2>
          <div className="break-main bg-blue-200 w-full h-auto rounded-md flex justify-between items-center gap-4 px-10 py-3">
            <a href="/" className=" cursor-pointer h-6 w-6 text-center bg-white p-6 rounded-full flex items-center justify-center font-mono font-bold hover:bg-blue-500 hover:text-white"> 20</a>
            <a href="/" className=" cursor-pointer h-6 w-6 text-center bg-white p-6 rounded-full flex items-center justify-center font-mono font-bold hover:bg-blue-500 hover:text-white"> 30</a>
            <a href="/" className=" cursor-pointer h-6 w-6 text-center bg-white p-6 rounded-full flex items-center justify-center font-mono font-bold hover:bg-blue-500 hover:text-white"> 40</a>
            <a href="/" className=" cursor-pointer h-6 w-6 text-center bg-white p-6 rounded-full flex items-center justify-center font-mono font-bold hover:bg-blue-500 hover:text-white"> 50</a>
          </div>
        </div>

        {/* exercise main part here */}
        <div className="ex-main">
          <h2 className="text-[20px] font-mono font-bold mt-10 mb-4">
            Exercise Details
          </h2>

          <div className="ex-time bg-blue-200 w-full h-auto rounded-md flex p-5 justify-between mb-4">
            <h1 className="font-mono text-xl font-bold">Exercise time</h1>
            <h2 className="font-mono text-xl font-bold text-gray-600">200 second</h2>
          </div>
          <div className="ex-time bg-blue-200 w-full h-auto rounded-md flex p-5 justify-between mb-4">
            <h1 className="font-mono text-xl font-bold">Break time</h1>
            <h2 className="font-mono text-xl font-bold text-gray-600">200 second</h2>
          </div>
        </div>

        {/* activity button */}
        <button className="cursor-pointer bg-blue-500 text-white w-full p-4 text-center rounded-md font-mono font-bold text-xl border hover:border-blue-500 hover:text-blue-500 hover:bg-transparent">Activity Completed</button>
      </div>
    </div>
  );
};

export default Dashbord;
