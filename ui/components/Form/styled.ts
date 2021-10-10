import styled from 'styled-components';

export const DynamicFormBox = styled.div`
    box-shadow: 0 0 56px rgba(151, 151, 151, 0.38);
    border-radius: 34px;
    max-width: 340px;
    margin: 30px auto auto;
    padding: 50px 30px 20px;

    & button {
        width: 100%;
    }
`;

export const FieldsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 32px;
    line-height: 32px;
    margin: 0;
`;
