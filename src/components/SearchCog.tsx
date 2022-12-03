/*
DOLLY CLOCK by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/
  
// Importing React to define our
// component.
import React from 'react';
  
// Importing types for Typescript.
import { ReactElement } from 'react';
  
// Defining our class-based component.
export class SearchCog extends React.Component<
{}, 
{
  query: string
}
> {

    // Setting up
    // our stateful variables
    // here.
    constructor(props: any) {
        super(props);
        this.state = {
            query: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
    }

    // Handling input field changes!
    handleChange(event: any): void {
        this.setState(
            {
                query: event.target.value
            }
        );
    }

    // Submits a search to Google!
    searchQuery(): void {
        let searchURL: string = 'http://www.google.com/search?q='+this.state.query;
        window.open(searchURL);
    }

    // Returning our stateful
    // clock element.
    render(): ReactElement {
        return (
            <div className='search'>
             <input
              className='search' 
              type='text'
              value={this.state.query}
              onChange={this.handleChange}
             />
             <button className='search' onClick={this.searchQuery}>SEARCH</button>
            </div>
        );
    }
}

// Exporting our component.
export default SearchCog;