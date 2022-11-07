import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as CloseIcon } from '../assets/icons/close-img.svg';

const StyledCloseButton = styled.button`
border:none;
background-color:  hsl(0, 0%, 0%, 0);
position: absolute;
right:50px;
top:10px;
`
const StyledCloseIcon = styled(CloseIcon)`
    path {
      fill: #1513A0;
    }
`;

const StyledAlertBase = styled.div`
 position: relative;
 margin-top: 50px;
 padding: 14px 0;
 text-align: center;
 border-color: transparent;
 font-weight: 600;
 font-size: 18px;
 line-height: 25px;
 width: 100%;
 max-width: 1440px;
`;

const StyledPrimaryAlert = styled(StyledAlertBase)`
  background: #605DEC;
  color:#F6F6FE;
`;

const StyledErrorAlert = styled(StyledAlertBase)`
  background: #EB5757;
  color: #FAFAFA;
`;

const StyledWarningAlert = styled(StyledAlertBase)`
  background: #FFD12F;
  color: #1513A0;
`;
   
const Alert = ({ children, onClose, color }) => {
     
    if (color === "error") {
      return <StyledErrorAlert onClick={onClose }>
        {children}
        <StyledCloseButton><CloseIcon/></StyledCloseButton>
      </StyledErrorAlert>;
    }

    if (color === "warning") {
      return <StyledWarningAlert onClick={onClose }>
        {children}
          <StyledCloseButton><StyledCloseIcon /></StyledCloseButton>
      </StyledWarningAlert>;
    }

  return <StyledPrimaryAlert onClick={onClose }>
      {children} 
        <StyledCloseButton ><CloseIcon /></StyledCloseButton>
    </StyledPrimaryAlert>;
};

Alert.propTypes = {
    onClose: PropTypes.func,
    color: PropTypes.oneOf(["primary", "error", "warning"]),
    children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  color: "primary",
};

export default Alert;