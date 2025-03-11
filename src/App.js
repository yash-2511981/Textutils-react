import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //handling alert events
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  //handlig dark mode
  const handleMode = () => {
    let color = document.getElementById("theme").value;
    setMode(color);
    document.body.classList.remove(
      "bg-light",
      "bg-success",
      "bg-danger",
      "bg-dark",
      "bg-primary"
    );
    document.body.classList.add("bg-" + color);
    showAlert("them changed successfully", "success");
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={handleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Play With Your Text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
