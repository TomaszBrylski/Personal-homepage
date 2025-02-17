import tomaszBrylskiProfile from "./DSC_0839-2.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, Icon } from "./styled";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={tomaszBrylskiProfile} alt="Tomasz Brylski" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Tomasz Brylski</Name>
            <Summary>
                <Icon src={faceIcon} alt="" />
                <Icon src={laptopIcon} alt="" />
                My path is one of continuous development and deepening knowledge in the field of front-end, in search of new possibilities and self-improvement as a programmer.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);
