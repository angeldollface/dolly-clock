/*
DOLLY CLOCK by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Loading our components.
import ClockCog from './ClockCog';
import SearchCog from './SearchCog';
import FooterCog from './FooterCog';

// Registering them.
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
