import Myrouter from "./Myrouter";
import Chart from "./pages/Chart";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Usage from "./pages/Usage";


function App() {
  return (
    <Myrouter>
        <Home path="home"/>
        <Usage path="usage"/>
        <Settings path="settings"/>
        <Chart path="chart"/>
    </Myrouter>
  );
}

export default App;
