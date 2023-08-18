import { Form } from "./Form";
import { ColorList } from "./ColorList";
import Values from "values.js";
import { useState } from "react";
const App = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <main>
      <div className="container">
        <Form setCurrentColor={setColors} />
      </div>
      <ColorList myColors={colors} />
    </main>
  );
};
export default App;
