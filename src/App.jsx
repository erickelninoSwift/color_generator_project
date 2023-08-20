import { Form } from "./Form";
import { ColorList } from "./ColorList";
// import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
const App = () => {
  const [colors, setColors] = useState([]);

  return (
    <main>
      <div className="container">
        <Form setCurrentColor={setColors} colorTost={toast} />
      </div>
      <ColorList myColors={colors} />
      <div>
        <ToastContainer position="top-center" />
      </div>
    </main>
  );
};
export default App;
