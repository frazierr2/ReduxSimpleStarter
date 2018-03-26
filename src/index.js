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
class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: [] }
        //Now once page loads constructor will immediately fire with a list of videos instantiated below
        YTSearch({ key: API_KEY, term: 'golf' }, (videos) => {
            this.setState({ videos })
            // When key and property are same with ES6, you can simply put it once like above. 
            // ES5 version would be this.setState({ videos: videos })
        });
    }
    
    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/> {/*passing "prop" videos (the State of videos) to VideoList*/}
            </div>
        );
    }
}

// Take this component's generated HTML and put on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));