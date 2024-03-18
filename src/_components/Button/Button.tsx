import React from 'react';
import styled from 'styled-components';

import ArrowRight from '@/_assets/svg/arrow-right.svg';

interface Button {
  text: string;
  onClick: Function;
  iconName?: IconName;
}

type IconName = 'arrow-right';

const setIcon = (icon: IconName) => {
  const iconWidth = '1.5rem';

  switch (icon) {
    case 'arrow-right':
      return <ArrowRight width={iconWidth} />;
    default:
      return null;
  }
};

const StyledButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--main-text-color);
  font-weight: 600;
  border-radius: 100px;
  border: none;

  display: flex;
  gap: 0.5rem;

  cursor: pointer;

  padding: var(--spacing-sm) var(--spacing-md);
  width: fit-content;

  svg {
    fill: var(--main-text-color);
  }
`;

export function Button({ text, onClick, iconName }: Button) {
  return (
    <StyledButton onClick={() => onClick}>
      {iconName && setIcon(iconName)}
      {text}
    </StyledButton>
  );
}
