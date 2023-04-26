import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  width: calc(100% - 1.25em);
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0.5em;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 7.5em);
  margin-top: 3em;
  border-radius: 0.5em;
  background-color: #ffffffcc;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  padding: 1.25em 0.6em 0px 0.6em;
`;

export const ContactAvatar = styled.img`
  display: block;
  border-radius: 50%;
  border: 3px solid #c272ce;
  margin: 0 auto 1.25em;
`;

export const ContactName = styled.h1`
  font-size: 1.5em;
  margin: 0 auto 1.25em;
`;

export const ContactPhoneMail = styled.p`
  font-size: 1em;
  margin: 0 auto 1em;
`;
