// import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom"

// function Navbar() {
//     return (
//         <div className={styles.container}>
//             <nav className={styles.navbar}>
//                 <div>
//                     <h1 className={styles.navbar__brand}>Movie App</h1>
//                 </div>
//                 <div>
//                     <ul className={styles.navbar__list}>
//                         <li className={styles.navbar__item}>
//                             <Link className={styles.navbar__link} to="/">Home</Link>
//                             </li>
//                         <li className={styles.navbar__item}>
//                             <Link className={styles.navbar__link} to="movie/create">Add Movie</Link>
//                             </li>
//                         <li className={styles.navbar__item}>
//                             <Link className={styles.navbar__link} to="movie/popular">Popular</Link>
//                             </li>
//                         <li className={styles.navbar__item}>
//                             <Link className={styles.navbar__link} to="movie/now">Now Playing</Link></li>
//                         <li className={styles.navbar__item}>
//                             <Link className={styles.navbar__link} to="movie/top">Top Rated</Link>
//                             </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// }

// export default Navbar;

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Brand = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

function Navbar() {
  return (
    <Container>
      <Nav>
        <div>
          <Brand>Movie App</Brand>
        </div>
        <div>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="movie/create">Add Movie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="movie/popular">Popular</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="movie/now">Now Playing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="movie/top">Top Rated</NavLink>
            </NavItem>
          </NavList>
        </div>
      </Nav>
    </Container>
  );
}

export default Navbar;

