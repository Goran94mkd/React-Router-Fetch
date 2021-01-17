import './App.css';
import Header from "./components/Header.js"
// import Counter from "./components/Counter.js"
// import ConditionalRendering1 from "./components/ConditionalRendering&&.js"
// import ConditionalRendering2 from "./components/ConditionalRenderingTernary.js"
import FormsInReact from "./components/FormsInReact.js"
import FuncFormValidation from "./components/FuncFormValidation.js"
// import ClassFormValidation from "./components/ClassFormValidation.js"
import FetchClass from "./components/FetchClass.js"

function App() {
  const add = (a, b) => a + b;
  return (
    <div className="App">
      {/* <Counter />
      <ConditionalRendering1 />
      <ConditionalRendering2 /> */}
      <FormsInReact />
      <br />
      <FuncFormValidation />
      <br />
      {/* <ClassFormValidation /> */}
      <FetchClass />
      <Header
       title="Hello from App"
       num={7}
       myArr={[10, 2, 3]}
       myFunc={add}
       myObj={{
         a: 5,
         b: 6
       }}
      />
    </div>
  );
}

export default App;
