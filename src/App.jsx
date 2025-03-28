import AnonymousFunction from "./AnonymousFunction";
import ArrayListsAndKeys from "./ArrayListsAndKeys";
import ListItems from "./ListItems";
import PropsAndDrilling from "./PropsAndDrilling";
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
      <ArrayListsAndKeys />
      <ListItems />
      <PropsAndDrilling />
    </div>
  );
}

export default App;