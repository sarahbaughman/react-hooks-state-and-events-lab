import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

//DARK MODE BUTTON STUFF
const [isDark, setIsDark] = useState(false)
 
const appClass = isDark ? "App dark" : "App light"

const buttonText = isDark ? "Light Mode" : "Dark Mode"

function toggleDarkMode(){
  setIsDark(!isDark)
}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
