import React, { Component } from 'react';
// { Component } is same as React.Component which comes after extend on ES6 Class


// const SearchBar = () => {
//     return <input />;
// }

// ES6 Class  :  render is a "method"
class SearchBar extends Component {
    // ========================================================================
        // Constructor gets called at ever Class Initiated before it's mounted. 
        // Used for set up like initializing variables.
        // If "super(props);" isn't put first... "this.props" will be undefined.    
    // ========================================================================
    constructor(props){
        super(props);
        // this.state is only in constructor. Elsewhere, it would be this.setState({})
        this.state = { term: '' };
    }
    
    render() {
        // return <input onChange={(e) => console.log(e.target.value)} />
        // Must put "".bind(this)"" to bind context of "this" in onInputChange Method
        // basically to use "this."
        return (
            <div>
                {/* When Value is set to 'value={this.state.term}' what's happening is it looks at the term state and set it to what that is. In this case, it's blank. As the user starts to type the "onChange" method rerenders each change and then what was typed is setting the state therefor making the value equal to what was typed.  "Called Controlled Components where you receive the value from state" */}
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} 
                />
            </div> 
        );
    
    }
    
    // Event handlers = Below is Methods
    onInputChange(e){
         this.setState({ term: e.target.value });
    }
}

export default SearchBar;
