import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import GoToAction from './go-to-action'

const StyledDiv = styled.div(props => props.styles);

export default class HomeButton extends Component {
  render() {
    return (
      <GoToAction render={goToSlide =>
        <StyledDiv styles={[this.context.styles.homeButton.container]} onClick={() => goToSlide(1)}>
          <svg width="100%" height="100%" viewBox="0 0 48 51">
            <path d="M32,51 L32,31 C32,30.4477153 31.5522847,30 31,30 L17,30 C16.4477153,30 16,30.4477153 16,31 L16,51 L1,51 C0.44771525,51 6.76353751e-17,50.5522847 0,50 L0,15.5542476 C-6.54694735e-16,15.2094576 0.177619697,14.8889877 0.47000106,14.7062493 L23.4700011,0.331249338 C23.7942713,0.12858041 24.2057287,0.12858041 24.5299989,0.331249338 L47.5299989,14.7062493 C47.8223803,14.8889877 48,15.2094576 48,15.5542476 L48,50 C48,50.5522847 47.5522847,51 47,51 L32,51 Z" />
          </svg>
        </StyledDiv>} />
    );
  }
}

HomeButton.propTypes = {};

HomeButton.contextTypes = {
  styles: PropTypes.object
};
