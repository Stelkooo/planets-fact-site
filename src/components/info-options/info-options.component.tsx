import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentInfo, CurrentInfo } from '../../store/planet/planet.reducer';
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

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const eventValue = event.currentTarget.value as CurrentInfo;
    dispatch(setCurrentInfo(eventValue));
  }

  return (
    <InfoOptionsContainer $toggled={toggled}>
      <InfoLabel
        htmlFor="overview"
        $planetColour={currentPlanet.color}
        $toggled={toggled}
      >
        <InfoInput
          type="radio"
          id="overview"
          name="options"
          value="overview"
          defaultChecked
          $planetColour={currentPlanet.color}
          onChange={(event) => handleRadioChange(event)}
        />
        <span>Overview</span>
      </InfoLabel>
      <InfoLabel
        htmlFor="structure"
        $planetColour={currentPlanet.color}
        $toggled={toggled}
      >
        <InfoInput
          type="radio"
          id="structure"
          name="options"
          value="structure"
          $planetColour={currentPlanet.color}
          onChange={(event) => handleRadioChange(event)}
        />
        <span>Structure</span>
      </InfoLabel>
      <InfoLabel
        htmlFor="surface"
        $planetColour={currentPlanet.color}
        $toggled={toggled}
      >
        <InfoInput
          type="radio"
          id="surface"
          name="options"
          value="geology"
          $planetColour={currentPlanet.color}
          onChange={(event) => handleRadioChange(event)}
        />
        <span>Surface </span>
      </InfoLabel>
    </InfoOptionsContainer>
  );
}

InfoOptions.defaultProps = defaultProps;

export default InfoOptions;
