import React from 'react';
import { FormattedMessage } from 'react-intl';

//import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
//import Banner from './banner.png';
import Logo from './GoodAppleMedia.png';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/*<Img src={Banner} alt="OSINT Good Apple Media - Logo" />*/}
        
        <NavBar>
          {/*<HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>*/}
          {/*<Img src={Logo} alt="GoodAppleMedia - Logo" />*/}
          {/*<HeaderLink to="/">
            <FormattedMessage {...messages.pivot} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.fullSearch} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.collector} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.admin} />
          </HeaderLink>*/}
        </NavBar>
      </div>
    );
  }
}

export default Header;
