import React, { useState } from 'react';
import './App.css';
import UploadForm from './Components/UploadForm'
import ImageGrid from './Components/ImageGrid'
import Modal from './Components/Modal'

function App() {
  const [selectedImage, setSelectedimage] = useState(null)

  return (
    <div className="App">
      <div className="title">
        <div className="app-title-left">
          Image Gallery App
        </div>
        <div className="screen-heading">
          Your Pictures
        </div>
        <UploadForm/>
        <ImageGrid setSelectedimage={setSelectedimage}/>
        {
          selectedImage && <Modal selectedImage={selectedImage} setSelectedimage={setSelectedimage}/>
        }
        
      </div>
    </div>
  );
}

export default App;
