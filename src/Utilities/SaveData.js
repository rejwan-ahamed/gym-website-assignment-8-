const saveData = (data) => {
  localStorage.setItem("breakTime", data);
};

const getData =()=>{
  let storedData = localStorage.getItem("breakTime")
  return(storedData)
}

export { saveData, getData };
