import { useEffect } from "react";
import { Content } from "./Content";
import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { githubUsername } from "./githubUsername";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../../presonalHomepageSlice";

export const Portfolio = () => {
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);


    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>

            <Content/>

        </Section>
    );
};