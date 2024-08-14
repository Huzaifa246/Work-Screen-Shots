import React from 'react';
import { screenshots } from './Reuseable/ERPData';
import FileCard from './Reuseable/FileCard';

const ErpSS = () => {
  return (
    <div className="erp-app">
      <h1 className="text-center">ERP Management System</h1>
      <h6 className="text-center">(Screenshots)</h6>
      <div className="d-flex flex-wrap justify-content-around">
        {screenshots.map((screenshot) => (
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

export default ErpSS;
