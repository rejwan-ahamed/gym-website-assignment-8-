const Cards = (props) => {
  const { img, name, time, age } = props.activity;

  // button click handler
  return (
    <div className="max-w-[18rem]  bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="/">
        <img
          className="rounded-t-lg max-h-[12rem] w-full"
          src={img}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-[24px] font-bold font-mono tracking-tight text-gray-900">
            {name}
          </h5>
          <h5 className="mb-2 text-[20px] font-bold font-mono tracking-tight text-gray-700">
            For-Age: {age}
          </h5>
          <h5 className="mb-4 text-[20px] font-bold font-mono tracking-tight text-gray-700">
            Time: {time}s
          </h5>
        </a>
        <button className="cursor-pointer w-full inline-flex items-center justify-center py-3 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={()=>props.getTime(props.activity)}>
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Cards;
