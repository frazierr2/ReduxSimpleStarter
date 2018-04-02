// Global Import
import React from 'react';
// Local Import
import VideoListItem from './video_list_item';

/*
    Wont be any state so you can use functional based component
    
    In a functional component, props is passed in as an Argument. Hence why you just do "props.videos" beause videos is what we passed as the name.
    
    In an Class based component, props are defined in any method we define as "this.props"
*/

const VideoList = (props) => {
    // for each element of videos call a function with a single video. 
    //basically for each item in array.
    const videoItems = props.videos.map((video) => {
        // console.log('video', video);
        return <VideoListItem 
            key={video.etag} 
            video={video}
            onVideoSelect = { props.onVideoSelect }
            />
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;