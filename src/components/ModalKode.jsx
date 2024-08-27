import React from 'react';
import { Modal} from 'react-bootstrap';

const CustomModal = ({show, handleClose, namaKode, children}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='d-flex justify-content-center' style={{ backgroundColor: '#02225A' }}>
        <label className='text-white  fw-bold fs-3'>{namaKode}</label>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
