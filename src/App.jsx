import { Form } from "./Form";
import { ColorList } from "./ColorList";
// import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import Values from "values.js";
const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

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
