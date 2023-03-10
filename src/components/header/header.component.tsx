import { useState } from 'react';

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
      <InfoOptions toggled={toggleHamburger} />
    </HeaderContainer>
  );
}

export default Header;
