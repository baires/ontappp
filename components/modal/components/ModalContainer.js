import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 880px;
  z-index: 3;
  overflow: scroll;
  backface-visibility: hidden;
  transform: translateX(-50%) translateY(-50%);
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  height: 600px;

  /* stylelint-disable */
  ${breakpoint('desktop')`
    height: auto;
  `};
`;
export default ModalContainer;
