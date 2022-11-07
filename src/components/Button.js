import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButtonBase = styled.button`
    border-radius: 4px;
    font-weight:400;
    font-style: normal;
    margin: 10px;
    text-align: center;
    border-color: transparent;

    padding: ${(props) => (props.size === "large" ? "12px 20px" : "8px 16px")};
    font-size: ${(props) => (props.size === "large" ? "18px" : "16px")} ;
    line-height: ${(props) => (props.size === "large" ? "25px" : "22px")};
`;


const StyledPrimaryButton = styled(StyledButtonBase)`
  background-color: #605DEC;
  color: #FAFAFA;
 
  :hover {
    background: #1513A0;
  }

  :disabled {
    background: rgba(203, 212, 230, 0.3);
    border: 1px solid #7C8DB0;
    color: #7C8DB0;
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: white;
  border: 1px solid #605DEC;
  color: #605DEC;

  :hover {
    background: #E9E8FC;
  }

  :disabled {
    border: 1px solid #7C8DB0;
    color: #7C8DB0;
  }
`;

const Button = ({ children, onClick, color, size, disabled }) => {
    const buttonProps = {
    disabled,
    onClick,
    size,
    children
    };
    
     if (color === "secondary") {
         return <StyledSecondaryButton {...buttonProps} />;
    }

    return <StyledPrimaryButton {...buttonProps} />;
};

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["primary", "secondary"]),
    size: PropTypes.oneOf(["large", "medium", "small"]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Button.defaultProps = {
  color: "primary",
  disabled: false,
  size: "small",
};

export default Button;