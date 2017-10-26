import React  from 'react';
import FileList from './components/fileList';

import './App.css'

const App = () => {
  return(
        <div className="App">
            <h1>Add Files</h1>
            <FileList />
        </div>
  );
}

export default App;