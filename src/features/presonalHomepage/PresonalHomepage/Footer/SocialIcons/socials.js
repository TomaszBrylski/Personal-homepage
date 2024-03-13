import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FaceBookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/TomaszBrylski",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/BrylskiTomasz",
        Icon: styleIcon(FaceBookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tomasz-brylski-470332279/",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/tomasz_brylski/",
        Icon: styleIcon(InstagramIcon),
    },
];
