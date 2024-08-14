import React from 'react';
import { screenshotsEzra } from './Reuseable/EzraData';
import FileCard from './Reuseable/FileCard';

const EzraSS = () => {
  return (
    <div className="erp-app">
      <h1 className="text-center">EZRA Managment System</h1>
      <h6 className="text-center">(Screenshots)</h6>
      <div className="d-flex flex-wrap justify-content-around">
        {screenshotsEzra?.map((screenshot) => (
          <FileCard
            key={screenshot.id}
            title={screenshot.title}
            description={screenshot.description}
            imageSrc={screenshot.src}
          />
        ))}
      </div>
    </div>
  );
};

export default EzraSS;
