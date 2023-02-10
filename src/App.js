import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";

function App() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="App">
      <h1>App: React Router</h1>
      <p>This app uses react-router for it's navigation.</p>

      <Route exact path="/" component={() => <h2>Home Component</h2>} />
      <Route path="/dashboard" component={() => <h2>Dashboard Component</h2>} />
      <Route path="/gallery" component={() => <h2>Gallery Component</h2>} />

      <button onClick={toggleMenu} className="primary-button">
        Toggle Menu
      </button>
    </div>
  );
}

export default App;
