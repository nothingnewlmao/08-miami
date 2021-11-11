import React, { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TObjectLiteral from 'types/TObjectLiteral';

import { selectLogInFailed } from 'store/userProfile/selectors';

import history from 'utils/history';

const ProtectedRoute = (WrappedComponent: ComponentType<TObjectLiteral>) => function Comp(props: TObjectLiteral) {
    const { pathname } = history.location;

    const logInFailed = useSelector(selectLogInFailed);

    useEffect(() => {
        if (logInFailed) {
            history.push('/sign-in');
        }
    }, [logInFailed, pathname]);

    return <WrappedComponent {...props} />;
};

export default ProtectedRoute;
