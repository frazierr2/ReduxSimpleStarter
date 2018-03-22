import React, { Component } from 'react';
// { Component } is same as React.Component which comes after extend on ES6 Class


// const SearchBar = () => {
//     return <input />;
// }

// ES6 Class  :  render is a "method"
class SearchBar extends Component {
    render() {
        return <input />
    }
}

export default SearchBar;