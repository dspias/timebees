import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import TrackAll from './components/TrackAll';

function App() {
  let [viewPage, setViewPage] = useState('main');
  return (
    <div className="App">
      <div className="fw-md wrapper">
        <Header />
        {viewPage === 'main' ? (
          <>
            <TrackAll />
            <h5
              className="text-blue text-center cursor-pointer fs-xs fw-lg"
              onClick={e => setViewPage('add')}
            >
              + Add New Timezone
            </h5>
          </>
        ) : (
          <>
            <p className="text-center">Add location to list</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
