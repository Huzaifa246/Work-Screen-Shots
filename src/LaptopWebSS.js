import React from 'react'
import FileCard from './Reuseable/FileCard'
import { screenshotsLaptop } from './Reuseable/LaptopData'

const LaptopWebSS = () => {
  return (
    <>
    <div className="erp-app">
      <h1 className="text-center">Laptop Web APP</h1>
      <h6 className="text-center">(Screenshots)</h6>
      <div className="d-flex flex-wrap justify-content-around">
        {screenshotsLaptop?.map((screenshot) => (
          <FileCard
            key={screenshot.id}
            title={screenshot.title}
            description={screenshot.description}
            imageSrc={screenshot.src}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default LaptopWebSS