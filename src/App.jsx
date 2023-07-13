import { useState } from "react";

// Write your Color component here
const Color = (props) => {
  return <div className={props.color === props.selectedColor ? `${props.color} selected` : `${props.color}`} onClick={() => (
    props.setSelectedColor(props.color)
    )}></div>
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState ("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor} </div>
      </div>
      <div id="colors-list">
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
