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
export class FooterCog extends React.Component {

    // Returning our stateful
    // clock element.
    render(): ReactElement {
        return (
            <div className='footer'>
             <a className='footer' href="https://github.com/angeldollface/dolly-clock">
              <i className="fa fa-github"></i>
             </a>
            </div>
        );
    }
}
export default FooterCog;