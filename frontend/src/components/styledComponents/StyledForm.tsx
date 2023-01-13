import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

interface IFormProps {
  margin?: string
  padding?: string
  background?: string
  maxwidth?: string
  borderradius?: string
}

export const StyledForm = styled.form`
  max-width: ${(props: IFormProps) => props.maxwidth || '400px'};
  margin: ${(props: IFormProps) => props.margin || '0px'};
  padding: ${(props: IFormProps) => props.padding || '0px'};
  border-radius: ${(props: IFormProps) => props.borderradius || '0px'};
  background-color: ${(props: IFormProps) => props.background || ''};

  @media ${devices.tablet} {
    max-width: 400px;
  }

  label,
  input {
    display: block;
  }

  label {
    font-size: 0.9rem;
  }

  input {
    padding: 10px;
    margin: 7px 0px 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
      outline: 1px solid #a2e4b8;
    }

    @media ${devices.tablet} {
      margin: 10px 0px 20px;
    }
  }

  h3 {
    color: #303a33;
    text-align: center;
    font-weight: 300;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: center;
    padding: 12px 0px 5px;
  }

  a {
    color: #000;
  }

  div.error {
    padding: 10px;
    font-size: 0.9rem;
    font-weight: 300;
    background: #ffefef;
    border: 1px solid #ec1919;
    color: #ec1919;
    border-radius: 4px;
    margin: 20px 0;
  }

  input.error {
    border: 1px solid #ec1919;
  }
`
