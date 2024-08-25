import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, namaPengguna, fotoprofile, btnName, btnHapus, children, Close, simpanPerubahan }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
      <div className='fp-profile'>
          <img src={fotoprofile} alt='Profile' />
        </div>
        <div className='d-flex flex-column ms-5'>
          <p className='text-blue-100 fw-bold fs-4 mb-2'>{namaPengguna}</p>
          <div>
            <button className='btn btn-primary btn-sm'>{btnName}</button>
            <button className='btn btn-red-200 btn-sm ms-2'>{btnHapus}</button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {Close}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {simpanPerubahan}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
