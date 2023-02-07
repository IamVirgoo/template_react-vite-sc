import { Link } from "react-router-dom";

import styled from "styled-components";
export default function IndexPage() {

    const MainWrapper = styled.main`
      max-width: 1040px;
      margin: 0 auto;
    `
    const HeroSection = styled.section`
      padding-top: 100px;
    `
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px
    `
    const Title = styled.h1`
      font-size: 48px;
      letter-spacing: .10em;
    `
    const NavLink = styled(Link)`
      font-size: 16px;
      color: #3110F1;
      letter-spacing: .10em;
      text-decoration: underline;
      text-underline-offset: 5px;
    `

    return <MainWrapper>
        <HeroSection>
            <Container>
                <Title>Hello 👋</Title>
                <NavLink to={"/app/"}>go to app</NavLink>
            </Container>
        </HeroSection>
    </MainWrapper>
}