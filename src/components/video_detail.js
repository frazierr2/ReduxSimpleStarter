// Global Import
import React from 'react';


const VideoDetail = ( {video} ) => {
    // Since Video list state is empty on page load, then kicks off an API Call the DOM tries to load which we would get nothing eventually. To handle that we can check to see if no videos and if so add loading in the meantime while it waits for data from API Call 
    if (!video) {
        return <div> Loading... </div>;
    }
    
    const videoId = video.id.videoId;
    // const url = 'http://www.youtube.com/embed/' + videoId;   //ES5 version
    const url = `https://www.youtube.com/embed/${videoId}`;   //ES6 version with "Template Literals"

    return (
        <div className="video-detail col-md-8">
    
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
    
            <div className="details">
                <div> { video.snippet.title } </div>
                <div> { video.snippet.description } </div>
            </div>
    
        </div>
    );    
}


export default VideoDetail;

