import AnonymousFunction from "./AnonymousFunction";
import ArrayListsAndKeys from "./ArrayListsAndKeys";
import BoxColorChange from "./BoxColorChange";
import ListItems from "./ListItems";
import LocalStorage from "./LocalStorage";
import PropsAndDrilling from "./PropsAndDrilling";
import UseStateFunction from "./UseStateFunction";

function App(){
  return (
    <div>
      {/* Change the components accordingly to view changes in code */}
      <h1>Sub</h1>
      <AnonymousFunction/>
      <UseStateFunction />
      <ArrayListsAndKeys />
      <ListItems />
      <LocalStorage />
      <PropsAndDrilling />
      <BoxColorChange />
    </div>
  );
}

export default App;