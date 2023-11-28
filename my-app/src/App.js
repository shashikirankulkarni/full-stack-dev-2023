import Video from "./components/Video";
import './App.css';
import videos from './data/data';
function App() {
  return (
    <div className="App"><div>Videos</div>
      {
        videos.map((video, index) => (
          <Video
          key={index} 
          title={video.title} 
          channel={video.channel} 
          views={video.views} 
          time={video.time} 
          randomNumber={video.randomNumber + index} 
          verified={video.verified} />
        ))
      }

      {/* <Video title="JavaScript Tutorial" views="25K" time="5 Months" randomNumber={randomNumber + 1} verified={false} /> */}

    </div>
  );
}

export default App;