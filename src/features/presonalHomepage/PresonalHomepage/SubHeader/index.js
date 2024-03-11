import styled from "styled-components";

export const SubHeader = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 900px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18;
    }
`;