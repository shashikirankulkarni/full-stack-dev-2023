import './Video.css';

function Video({ title, channel="Shashi Coding", views, time, randomNumber }) {
    let topic = title;
    let imgValue = Math.floor(randomNumber);
    return (<>
        <div className='container'>
            <div className="pic"><img
                src={"https://picsum.photos/500/500?random="+imgValue}
                alt="Katherine Johnson"
            /></div>

            <div className="title">{topic}</div>
            <div className="channel">{channel}</div>
            <div className="views">
                {views} views <span>.</span> {time}
            </div>
        </div>


    </>);
}

export default Video;