import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import Table from "./components/Table";
const App = () => {
  return (
    <div>
      <SignUp />
      <div className="container">
        <Table />
      </div>
    </div>
  );
};

export default App;
