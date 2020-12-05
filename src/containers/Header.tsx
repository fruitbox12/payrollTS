import React, { Component } from 'react';
//router import
import { Link } from 'react-router-dom';
//Material-UI imports
import { Box, Breadcrumbs } from '@material-ui/core'
import { StyledButton } from '../styles/Styles'

class Header extends Component {

  render() {
    return (
      <div>
        <Box display="flex"
             alignItems="center"
             justifyContent="center">
          <Breadcrumbs aria-label="breadcrumb">
            <StyledButton>
              <Link to="/">Home</Link>
            </StyledButton>
            <StyledButton color="primary">
              <Link to="/contractors">Contractors Portal</Link>
            </StyledButton>
            <StyledButton color="secondary">
              <Link to="/employer">Employer Portal</Link>
            </StyledButton>
          </Breadcrumbs>
        </Box>
      </div>
    );
  }
}

export default Header;
