import styled from 'styled-components';

import { colors } from 'ui/colors';
import { Wrapper } from 'ui/components/Wrapper/styled';

export const CustomWrapper = styled(Wrapper)`
    width: 60px;
    border-right: 1px ${colors.lightGray} solid;
    cursor: pointer;
    box-sizing: border-box;
`;
