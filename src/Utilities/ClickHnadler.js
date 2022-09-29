let Time = 0;
const clickHandler = (data=0) => {
  const { time } = data;
  const newTime = time + Time;
  Time = newTime;
  console.log(Time)
  return Time
};

export{
    clickHandler
}