import styled from 'styled-components';

const colors = {
  primary: "#4361ee",
  secondary: "#b5179e",
  text: "#64748b",
};

const Heading = styled.h1`
  font-size: 2.44rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 1.59rem;
  color: ${colors.secondary};
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const Typography = {
  Heading,
  SubHeading,
  Paragraph,
};

export default Typography;
