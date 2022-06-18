import styled from 'styled-components';

const Wrapper = styled.header`
  height: ${({ theme }) => theme.spacing.S72};
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.OFFWHITE};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.GREY_LIGHT}`};
`;

const Logo = styled.p`
  ${({ theme }) => theme.font.S4040};
  font-weight: ${({ theme }) => theme.fontWeight.BOLD};
  font-style: italic;
`;

function Header() {
  return (
    <Wrapper>
      <Logo>Fractal</Logo>
    </Wrapper>
  );
}

export { Header };
