// Global Imports
import React from 'react';
import ReactDOM from 'react-dom';
// Local Imports
import SearchBar from './components/search_bar';

const API_KEY = config.API_KEY;


// Create new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


// Take this component's generated HTML and put on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));