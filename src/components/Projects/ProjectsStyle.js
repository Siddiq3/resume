import styled from 'styled-components';
import _default from '../themes/default';

export const Container = styled.div`
    background: #0B0E15;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    position: relative;
    z-index: 1;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 20px 0;
    gap: 32px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    color: #FFFFFF;
    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

export const Desc = styled.div`
    font-size: 20px;
    text-align: center;
    max-width: 800px;
    color: #CCCCCC;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    background: #1E1E1E;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    width: 300px;
    &:hover {
        transform: translateY(-10px);
    }
    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    padding: 16px;
`;

export const CardTitle = styled.h3`
    font-size: 24px;
    color: #FFFFFF;
    margin: 0 0 10px 0;
`;

export const CardDesc = styled.p`
    font-size: 16px;
    color: #CCCCCC;
    margin: 0;
`;
