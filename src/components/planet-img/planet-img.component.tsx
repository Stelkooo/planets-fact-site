import React from 'react';
import { useAppSelector } from '../../store/hooks';
import {
  selectCurrentPlanet,
  selectCurrentInfo,
} from '../../store/planet/planet.selector';

// style import
import { PlanetImgContainer, Img, Geology } from './planet-img.styled';

function PlanetImage() {
  const currentPlanet = useAppSelector(selectCurrentPlanet);
  const currentInfo = useAppSelector(selectCurrentInfo);

  const currentImgSrc =
    currentInfo === 'structure'
      ? `/assets/planet-${currentPlanet.name.toLowerCase()}-internal.svg`
      : `/assets/planet-${currentPlanet.name.toLowerCase()}.svg`;

  return (
    <PlanetImgContainer>
      <Img
        src={currentImgSrc}
        alt=""
        $mobileHeight={currentPlanet.sizes.mobile}
        $tabletHeight={currentPlanet.sizes.tablet}
        $desktopHeight={currentPlanet.sizes.desktop}
      />
      {currentInfo === 'geology' ? (
        <Geology
          src={`/assets/geology-${currentPlanet.name.toLowerCase()}.png`}
          alt=""
        />
      ) : null}
    </PlanetImgContainer>
  );
}

export default PlanetImage;
