import styled from 'styled-components';
import { rem } from '../../styles/utils';
import { spacers } from '../../styles/settings';

interface SpacerProps {
  size: number;
}

export const Spacer = styled.div`
  margin-bottom: ${({ size }: SpacerProps) => rem(spacers[size])};
`;
