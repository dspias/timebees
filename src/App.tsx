import React, {useState} from 'react';
import './App.css';
import AddTimezone from './components/AddTimezone';
import Header from './components/Header';
import SavedTimezones from './components/SavedTimezones';
import TrackAll from './components/TrackAll';
import shareIcon from './share-feedback.png';

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
            <SavedTimezones />
            <div className="gutter">
              <p className="cursor-pointer flex mb-4">
                <img src={shareIcon} alt="share Icon" width={18} height={18} />
                <span className="ml-2 fs-sm text-primary">Share your feedback</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="gutter">
              <AddTimezone change={setViewPage}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
