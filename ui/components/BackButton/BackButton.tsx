import styled from 'styled-components';

import { colors } from 'ui/colors';

import { BaseButton } from 'uicomponents/BaseButton/BaseButton';

export const BackButton = styled(BaseButton)`
    background-color: ${colors.danger};

    & a {
        text-decoration: none;
        color: ${colors.white};
    }
`;
