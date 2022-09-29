import React from "react";
import Cards from "../Cards/Cards";
import Dashbord from "../Dashbord/Dashbord";

const MainSection = () => {
  return (
    <main>
      <section className="main-body-section">
        <div className="upper-body-section md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <Cards></Cards>
          <Dashbord className="relative"></Dashbord>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
