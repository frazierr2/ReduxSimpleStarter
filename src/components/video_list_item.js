//Global Imports
import React from 'react';

const VideoListItem = (/*props*/ {video, onVideoSelect}) => {
    // const video = props.video;
    // ES6 is just the {video} which means we passed a property video. 
    // ES5 could be anything like data. Then you'd do data.video
    const imageUrl = video.snippet.thumbnails.default.url;
    
    
    {/*"onClick" when user clicks, pass a function that takes particular list item video and passes it to "onVideoSelect()"*/}
    return (
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                
                <div className="media-body">
                    <div className="media-heading"> { video.snippet.title } </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;