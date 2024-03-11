import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
    <Wrapper>
        Please wait, projects are&nbsp;being&nbps;loaded...
        <StyledSpinner />
    </Wrapper>
);