import "./App.css";
import Cards from "./Components/Cards/Cards";
import Dashbord from "./Components/Dashbord/Dashbord";

function App() {
  return (
    <div className="App">
      <main>
        <section className="main-body-section">
          <div className="upper-body-section grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <Cards></Cards>
            <Dashbord className="relative"></Dashbord>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
