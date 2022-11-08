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
      fill: ${(props) => (props.color === "warning" ? "#1513A0" : "#F6F6FE")};
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
 background: ${props => getBackgroundColor(props.color)};
 color: ${props => getTextColor(props.color)};
`;

const getBackgroundColor = (color) => {
	  switch (color) {
	    case "warning":
	      return "#FFD12F;";
	    case "error":
	      return "#EB5757;";
	    default:
	      return "#605DEC";
	  };
};

const getTextColor = (color) => {
  switch (color) {
    case "warning":
      return  "#1513A0;";
    case "error":
      return "#FAFAFA;";
    default:
      return "#F6F6FE;";
  };
};
   
const Alert = ({ children, onClose, color }) => {
      
  return <StyledAlertBase onClick={onClose } color={color}>
      {children} 
        <StyledCloseButton ><StyledCloseIcon color={color} /></StyledCloseButton>
    </StyledAlertBase>;
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