/*
DOLLY CLOCK by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Loading the component where
// the 3D things happen.
import ClockCog from './ClockCog';
import SearchCog from './SearchCog';
import FooterCog from './FooterCog';

// Regsitering it.
function App() {
  return (
   <>
    <ClockCog/>
    <SearchCog/>
    <FooterCog/>
   </>
  );
}

// And exporting the whole
// "main" component.
export default App;