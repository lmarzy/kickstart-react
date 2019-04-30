import styled from 'styled-components';
import { maxWidth, spacers } from '../../styles/settings';
import { rem } from '../../styles/utils';

export const Container = styled.div`
  max-width: ${maxWidth};
  padding-left: ${rem(spacers[2])};
  padding-right: ${rem(spacers[2])};
  margin-left: auto;
  margin-right: auto;
`;
