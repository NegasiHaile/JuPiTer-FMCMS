import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState'

import Index from './Components/pages/public/Index'
import Header from './Components/pages/public/Header'

// import Header from './Components/headers/Header';
// import Pages from './Components/mainPages/Pages'

function App() {
  return (
    <DataProvider>
      <Router>
        {/* <div className="App"> */}
          <Header />
          <Index />
        {/* </div> */}
      </Router>
    </DataProvider>
  );
}

export default App;
