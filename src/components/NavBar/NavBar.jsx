// import AuthNav from 'components/AuthMenu/AuthMenu';
import { Nav, NavigationLink, NavList, NavListItem } from './NavBar.styled';

const NavBar = () => {
   return (
      <>
         <Nav>
            <NavList>
               <NavListItem>
                  <NavigationLink to="/">Home</NavigationLink>
               </NavListItem>
               <NavListItem>
                  <NavigationLink to="/teachers">Teachers</NavigationLink>
               </NavListItem>
            </NavList>
         </Nav>
         {/* <AuthNav /> */}
      </>
   );
};

export default NavBar;
