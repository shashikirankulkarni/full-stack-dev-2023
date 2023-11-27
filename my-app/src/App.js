import Video from "./components/Video";
import './App.css';
function App() {
  let randomNumber = Math.random() * 10;
  let object = { title:"React JS Tutorial",
  channel:"Inspire Coding",
   views:"10M",
    time:"2 Years",
    randomNumber:randomNumber };
  return (
    <div className="App"><div>Videos</div>
      <Video {...object} />
      <Video title="JavaScript Tutorial" views="25K" time="5 Months" randomNumber={randomNumber + 1} />

    </div>
  );
}

export default App;