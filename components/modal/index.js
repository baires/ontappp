import React from 'react';
import PropTypes from 'prop-types';

import ModalContent from './components/ModalContent';
import ModalContainer from './components/ModalContainer';
import Overlay from './components/Overlay';

const noOp = () => {};

const Modal = ({ show, onClose = noOp, children }) =>
  <div>
    <ModalContainer show={show}>
      <ModalContent show={show}>
        {children}
      </ModalContent>
    </ModalContainer>

    <Overlay show={show} onClick={onClose} />
  </div>;

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

export default Modal;
