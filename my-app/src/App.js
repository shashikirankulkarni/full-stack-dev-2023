import Video from "./components/Video";
import './App.css';
import videos from './data/data';
import PlayButton from "./components/PlayButton";
function App() {
  return (
    //"APP" Logs in console because of event bubbling
    <div className="App" onClick={()=>console.log("APP")}><div>Videos</div>
      {
        videos.map((video, index) => (
          <Video
            key={index}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            randomNumber={video.randomNumber + index}
            verified={video.verified}>

<PlayButton message="Playing" onPlay={()=>console.log("PLAYING!!!!")} onPause={()=>console.log("Paused!!!!")}>Play</PlayButton>

            </Video>
        ))
      }
      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="Playing" onPlay={()=>console.log("PLAYING!!!!")} onPause={()=>console.log("Paused!!!!")}>Play</PlayButton> */}
        {/* <PlayButton message="Paused" onClick={()=>alert("PAUSED!!!")}>Pause</PlayButton> */}
      </div>



      {/* <Video title="JavaScript Tutorial" views="25K" time="5 Months" randomNumber={randomNumber + 1} verified={false} /> */}

    </div>
  );
}

export default App;