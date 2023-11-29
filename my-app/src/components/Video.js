import './Video.css';
function Video({ title, channel = "Shashi Coding", views, time, randomNumber, verified, children }) {
    let topic = title;
    let imgValue = Math.floor(randomNumber);
    //console.log(imgValue);

    return (<>
        <div className='container'>
            <div className="pic"><img
                src={`https://picsum.photos/500/500?random=${imgValue}`}
                alt="Katherine Johnson"
            /></div>

            <div className="title">{topic}</div>
            <div className="channel">{channel} {verified && '✅'} </div>
            <div className="views">
                {views} views <span>.</span> {time}
            </div>
            <div>{children}</div>


        </div>


    </>);
}

export default Video;