import React, {useState} from 'react';
import './App.css';
import AddTimezone from './components/AddTimezone';
import Header from './components/Header';
import SavedTimezones from './components/SavedTimezones';
import TrackAll from './components/TrackAll';
import shareIcon from './share-feedback.png';

type StorageType = {
  localtimezone?: string | undefined;
  timezonelist?: string[] | undefined;
  isalltrack?: boolean | undefined;
};

function App({localtimezone, timezonelist, isalltrack}: StorageType) {
  let [viewPage, setViewPage] = useState('main');
  let [zonelist, setZonelist] = useState(() => timezonelist ? timezonelist : []);
  return (
    <div className="App">
      <div className="fw-md wrapper">
        <Header localtimezone={localtimezone}/>
        {viewPage === 'main' ? (
          <>
            <TrackAll isalltrack={isalltrack}/>
            <h5
              className="text-blue text-center cursor-pointer fs-xs fw-lg"
              onClick={e => setViewPage('add')}
            >
              + Add New Timezone
            </h5>
            <SavedTimezones timezonelist={zonelist} />
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
              <AddTimezone change={setViewPage} timezonelist={zonelist} updateList={setZonelist}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
