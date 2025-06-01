// import styles from "./Footer.module.css";

// function Footer(){
//     return(
//         <div className={styles.container}>
//             <footer className={styles.footer}>
//                 <h2 className={styles.footer_title}>Movie App</h2>
//                 <p className={styles.footer_author}>Created By Marsela</p>
//             </footer>

//         </div>
//     );
// }

// export default Footer;

import styled from "styled-components";

const Container = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h2`
  margin-bottom: 1rem;
`;

const FooterAuthor = styled.p`
  margin-bottom: 1rem;
`;

function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <FooterTitle>Movie App</FooterTitle>
        <FooterAuthor>Created By Marsela</FooterAuthor>
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
