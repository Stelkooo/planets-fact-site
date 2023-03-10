import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentInfo } from '../../store/planet/planet.reducer';
import { selectCurrentPlanet } from '../../store/planet/planet.selector';

// style import
import {
  InfoOptionsContainer,
  InfoLabel,
  InfoInput,
} from './info-options.styled';

type Props = {
  toggled?: boolean;
} & typeof defaultProps;

const defaultProps = {
  toggled: false,
};

function InfoOptions({ toggled }: Props) {
  const dispatch = useAppDispatch();
  const currentPlanet = useAppSelector(selectCurrentPlanet);

  return (
    <InfoOptionsContainer $toggled={toggled}>
      <InfoLabel htmlFor="overview">
        <InfoInput
          type="radio"
          id="overview"
          name="options"
          value="overview"
          defaultChecked
          $planetColour={currentPlanet.color}
        />
        <span>Overview</span>
      </InfoLabel>
      <InfoLabel htmlFor="structure">
        <InfoInput
          type="radio"
          id="structure"
          name="options"
          value="structure"
          $planetColour={currentPlanet.color}
        />
        <span>Structure</span>
      </InfoLabel>
      <InfoLabel htmlFor="surface">
        <InfoInput
          type="radio"
          id="surface"
          name="options"
          value="surface"
          $planetColour={currentPlanet.color}
        />
        <span>Surface </span>
      </InfoLabel>
    </InfoOptionsContainer>
  );
}

InfoOptions.defaultProps = defaultProps;

export default InfoOptions;
