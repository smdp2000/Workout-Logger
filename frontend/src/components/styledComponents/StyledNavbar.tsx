import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { devices } from '../../breakpoints/Breakpoints'
import { useLogout } from '../../hooks/useLogout'
import { StyledButton } from './StyledButton'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <Wrapper>
      <StyledNavbar>
        <StyledHeader>
          <NavLink to="/">Workout Buddy</NavLink>
        </StyledHeader>
        <StyledNavLinks>
          {user ? (
            <>
              <span className="material-symbols-outlined">account_circle</span>
              <div className="user">{user.email}</div>
              <StyledButton
                background="#fff"
                border="2px solid #89cb9f"
                onClick={handleClick}
              >
                Logout
              </StyledButton>
            </>
          ) : (
            <div className="startpage-header-links">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'underline' : '')}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'underline' : '')}
              >
                Signup
              </NavLink>
            </div>
          )}
        </StyledNavLinks>
      </StyledNavbar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px;
  margin: 0px;

  @media ${devices.tablet} {
    padding: 10px 60px;
  }
`

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
    color: #000;
  }

  .startpage-header-links {
    display: flex;
    gap: 15px;
  }

  .underline {
    border-bottom: 2px solid #a2e4b8;
  }
`

const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    border-bottom: 2px solid #fff;
    transition: border-bottom 0.2s ease-in-out;

    &:hover {
      border-bottom: 2px solid #a2e4b8;
    }
  }

  .user {
    margin: 0px 10px 0px 3px;
    font-size: 0.8rem;
    font-weight: 300;

    @media ${devices.tablet} {
      margin: 0px 30px 0px 3px;
      font-size: 1rem;
    }
  }
`

const StyledHeader = styled.header`
  a {
    font-size: 1.2rem;
    color: #303a33;

    @media ${devices.tablet} {
      font-size: 1.6rem;
    }
  }
`
