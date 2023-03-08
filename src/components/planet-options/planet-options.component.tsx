import React from 'react';

// style import
import {
  PlanetOptionsContainer,
  Planet,
  PlanetColor,
  PlanetName,
  Chevron,
} from './planet-options.styled';
import defaultTheme from '../../theme';

function PlanetOptions() {
  return (
    <PlanetOptionsContainer>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.mercury} />
        <PlanetName>Mercury</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.venus} />
        <PlanetName>Venus</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.earth} />
        <PlanetName>Earth</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.mars} />
        <PlanetName>Mars</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.jupiter} />
        <PlanetName>Jupiter</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.saturn} />
        <PlanetName>Saturn</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.uranus} />
        <PlanetName>Uranus</PlanetName>
        <Chevron />
      </Planet>
      <Planet>
        <PlanetColor $planet={defaultTheme.planetColors.neptune} />
        <PlanetName>Neptune</PlanetName>
        <Chevron />
      </Planet>
    </PlanetOptionsContainer>
  );
}

export default PlanetOptions;
