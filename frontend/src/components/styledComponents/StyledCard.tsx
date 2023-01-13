import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  font-weight: 300;

  @media ${devices.tablet} {
    width: 100%;
  }

  h4 {
    font-size: 1.1rem;
    color: #65be82;
    margin: 0px 0px 10px 0px;
  }

  span {
    font-size: 0.85rem;
  }

  span.delete {
    font-size: 1.3rem;
    padding: 6px;
    cursor: pointer;
    color: #000;
    border-radius: 50%;
    background-color: #a2e4b8;
  }

  .details-bold {
    font-weight: 700;
    margin-right: 5px;
  }
`
