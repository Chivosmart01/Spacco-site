import "./App.css";
import FormTitle from "./components/pages/FormTitle";
import Header from "./components/header/Header";
import Main from "./components/pages/Main";
// import { Route } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/grantForm">
        <FormTitle />
      </Route>
    </>
  );
}

export default App;
