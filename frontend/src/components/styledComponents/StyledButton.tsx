import styled from 'styled-components'

interface IButtonProps {
  background?: string
  border?: string
}

export const StyledButton = styled.button`
  border: ${(props: IButtonProps) => props.border || '2px solid #a2e4b8'};
  background-color: ${(props: IButtonProps) => props.background || '#a2e4b8'};
  color: #000;
  padding: 10px;
  font-family: 'Poppins';
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;

  &:hover {
    background-color: #9dd9b1;
    border: 2px solid #9dd9b1;
  }
`
