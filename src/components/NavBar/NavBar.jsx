// import AuthNav from 'components/AuthMenu/AuthMenu';
import { Nav, NavigationLink, NavList, NavListItem } from './NavBar.styled';

const NavBar = ({showNav}) => {
   return (
      <>
         <Nav>
            <NavList>
               <NavListItem>
                  <NavigationLink to="/" onClick={showNav}>Home</NavigationLink>
               </NavListItem>
               <NavListItem>
                  <NavigationLink to="/teachers" onClick={showNav}>Teachers</NavigationLink>
               </NavListItem>
            </NavList>
         </Nav>
         {/* <AuthNav /> */}
      </>
   );
};

export default NavBar;
