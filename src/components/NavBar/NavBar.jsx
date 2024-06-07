// import AuthNav from 'components/AuthMenu/AuthMenu';
import { Nav, NavigationLink, NavList, NavListItem } from './NavBar.styled';

const NavBar = ({closeNav}) => {
   return (
      <>
         <Nav>
            <NavList>
               <NavListItem>
                  <NavigationLink to="/" onClick={closeNav}>Home</NavigationLink>
               </NavListItem>
               <NavListItem>
                  <NavigationLink to="/teachers" onClick={closeNav}>Teachers</NavigationLink>
               </NavListItem>
            </NavList>
         </Nav>
         {/* <AuthNav /> */}
      </>
   );
};

export default NavBar;
