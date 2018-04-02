// Global Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Local Imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = config.API_KEY;
/*
React has what's known as downwards data flow. Only the most parent component should be
responsible for fetching data.
*/


// Create new component. This component should produce some HTML.
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }
// Above is a example of (Functional Component), Below is a example of(Class Base Component)

// When using state we need to use the Class based component instead of Functional.

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null //Initial for what was "selected" being nothing
        }
        //Now once page loads constructor will immediately fire with a list of videos instantiated below
        YTSearch({ key: API_KEY, term: 'golf' }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            })
            // When key and property are same with ES6, you can simply put it once like above. 
            // ES5 version would be this.setState({ videos: videos })
        });
    }
    
    render(){

        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }/>
                    {/*passing "prop" videos (the State of videos) to VideoList*/}
                   {/* called "onVideoSelect" function which takes a video (selectedVideo) and defines App state (setState) with a video from VideoList*/}
                   {/* 
                       with ES6... arrow functions () => don't have to have (). So it could have been
                       selectedVideo => this.setState()
                    */}
            </div>
        );
    }
}

// Take this component's generated HTML and put on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));