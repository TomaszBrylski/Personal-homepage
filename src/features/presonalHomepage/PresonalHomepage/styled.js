import styled from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    padding: 115px 15px 0px;
    margin: 0px auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 12px;
    }
`;

export const Icon = styled.img`
    vertical-align: middle;
    margin-left: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: 16px;
    }
`;