import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.buttonLink.border};
    color: ${({ theme }) => theme.color.buttonLink.text};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    background: ${({ theme }) => theme.color.primary};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color.buttonLink.shadow};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mibileMax}px) {
        font-size: 18px;
    }
`;