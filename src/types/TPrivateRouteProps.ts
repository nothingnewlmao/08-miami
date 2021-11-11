import React from 'react';
import { RouteProps } from 'react-router-dom';

type TPrivateRouteProps = {
    path: RouteProps['path'];
    component: React.ElementType;
};

export default TPrivateRouteProps;
