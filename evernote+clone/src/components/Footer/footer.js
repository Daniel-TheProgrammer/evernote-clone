import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "images/logo.png";
import { FiFacebook as FacebookIcon, FiTwitter as TwitterIcon, FiYoutube as YoutubeIcon } from "react-icons/fi";



const Container = tw(ContainerBase)`bg-primary-500 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-10`;

const Row = tw.div`flex items-center justify-center flex-col px-8 py-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block  transition duration-300 mx-4 rounded-full border border-white p-2 hocus:text-primary-500 hocus:bg-white`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 px-10 text-sm font-normal flex flex-col sm:flex-row justify-between items-center text-gray-400`
const CopyrightNotice = tw.a`text-center font-medium tracking-wide text-sm text-gray-100`
const DevInfo = tw.a`text-center font-medium tracking-wide text-sm text-gray-100 hover:border-b-2 hover:border-gray-100 pt-10 sm:pt-0 appearance-none no-underline hocus:no-underline hocus:text-white`

const Divider = tw.div`m-10 border-b-2 border-gray-100`


const Footer = () => {

  let Year = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://github.com/Daniel-TheProgrammer">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://github.com/Daniel-TheProgrammer">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://github.com/Daniel-TheProgrammer">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </Row>

        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright {Year}, Evernote Clone</CopyrightNotice>
          <DevInfo href="https://github.com/Daniel-TheProgrammer" target="_blank">Developed by Daniel TheProgrammer</DevInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};

export default Footer;