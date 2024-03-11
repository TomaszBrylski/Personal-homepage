import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I am a frontend programming enthusiast who continuously explores the
        world of web technologies and hones my skills. Fascinated by innovations
        in the industry, I am constantly seeking new ways to create interactive
        and appealing user interfaces.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
