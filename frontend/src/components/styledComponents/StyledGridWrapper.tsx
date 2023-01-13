import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 10px;

  @media ${devices.tablet} {
    padding: 20px 60px;
    gap: 90px;
    grid-template-columns: 2fr 1fr;
  }
`
