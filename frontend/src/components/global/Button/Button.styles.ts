import styled from 'styled-components';

export const StyledButton = styled.button<{ $primary?: boolean }>`
  background: ${props => (props.$primary ? props.theme.colors.primary : "white")};
  color: ${props => (props.$primary ? "white" : props.theme.colors.primary)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
`;