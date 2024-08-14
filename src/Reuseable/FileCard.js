import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const FileCard = ({ title, description, imageSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Card 
        style={{ 
          width: '20rem', 
          margin: '15px', 
          border: 'none', 
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px'
        }}
        className="text-center"
        onClick={openModal}
      >
        <Card.Img 
          variant="top" 
          src={imageSrc} 
          style={{ 
            borderRadius: '10px 10px 0 0', 
            height: '200px',
            objectFit: 'cover'
          }} 
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold' }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={openModal}>View Details</Button>
        </Card.Body>
      </Card>

      <Modal show={modalIsOpen} onHide={closeModal} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageSrc} alt={title} className="img-fluid" />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FileCard;
