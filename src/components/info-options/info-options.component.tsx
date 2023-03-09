import React from 'react';

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
  return (
    <InfoOptionsContainer $toggled={toggled}>
      <InfoLabel htmlFor="overview">
        <InfoInput
          type="radio"
          id="overview"
          name="options"
          value="overview"
          defaultChecked
        />
        <span>Overview</span>
      </InfoLabel>
      <InfoLabel htmlFor="structure">
        <InfoInput
          type="radio"
          id="structure"
          name="options"
          value="structure"
        />
        <span>Structure</span>
      </InfoLabel>
      <InfoLabel htmlFor="surface">
        <InfoInput type="radio" id="surface" name="options" value="surface" />
        <span>Surface </span>
      </InfoLabel>
    </InfoOptionsContainer>
  );
}

InfoOptions.defaultProps = defaultProps;

export default InfoOptions;
