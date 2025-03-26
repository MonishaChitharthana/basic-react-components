import AnonymousFunction from "./AnonymousFunction";
import RandomName from "./RandomName";
import UseStateFunction from "./UseStateFunction";

function App(){
  return (
    <div>
      {/* Change the components accordingly to view changes in code */}
      <h1>Sub</h1>
      <p>I have <RandomName/> the money</p>
      <AnonymousFunction/>
      <UseStateFunction />
    </div>
  );
}

export default App;