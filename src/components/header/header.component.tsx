import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// component import
import PlanetOptions from '../planet-options/planet-options.component';
import InfoOptions from '../info-options/info-options.component';

// style import
import {
  HeaderContainer,
  TitleAndNavigation,
  SiteName,
  PlanetMenu,
  HamburgerIcon,
} from './header.styled';

function Header() {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  function handleHamburgerToggle(): void {
    setToggleHamburger(!toggleHamburger);
  }

  return (
    <HeaderContainer>
      <TitleAndNavigation>
        <SiteName>The Planets</SiteName>
        <PlanetMenu>
          <HamburgerIcon
            onClick={() => handleHamburgerToggle()}
            $toggled={toggleHamburger}
          />
          <PlanetOptions
            toggleHamburger={toggleHamburger}
            setToggleHamburger={setToggleHamburger}
          />
        </PlanetMenu>
      </TitleAndNavigation>
      {isTablet || <InfoOptions toggled={toggleHamburger} />}
    </HeaderContainer>
  );
}

export default Header;
