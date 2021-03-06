import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import Button from '../Button';
import Carousel from '../Carousel';
import { dark } from '../../styles/Themes';

const Section = styled.div`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
  width: 75%;
  min-height: 100vh;
  margin: 0 auto;
  /* background-color: pink; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid white; */
`;

const Title = styled.h2`
align-self: flex-start;
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.body};
width: 80%;
margin-bottom: 0 auto;
margin-bottom: 0.5rem;
`

const SubText = styled.p`
align-self: flex-start;
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
/* width: 80%; */
margin: 0.5rem auto;
margin-bottom: 1rem;
font-weight: 400;
`

const SubTextLight = styled.p`
align-self: flex-start;
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
margin: 0.5rem auto;
margin-bottom: 1.2rem;
`

const ButtonContainer = styled.div`
align-self: flex-start;
`

const About = () => {
  return (
    <Section id="about">
    <Container>
    <Box>
    <Carousel/>
    </Box>
    <Box>
    <Title>
    Welcome To The Weirdos Club.
    </Title>
    <SubText>
    The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
    </SubText>
    <SubTextLight>
    With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
    </SubTextLight>
    <ButtonContainer>
    <ThemeProvider theme={dark}>
    <Button text="Join the Discord" link="#" />
    </ThemeProvider>
    </ButtonContainer>
    </Box>
    </Container>
    </Section>
  )
}

export default About