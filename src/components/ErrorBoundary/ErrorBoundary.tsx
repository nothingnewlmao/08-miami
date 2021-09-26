import React from 'react';

import { ErrorMessage } from 'Pages/ErrorMessage';
import { IErrorBoundaryState, IErrorBoundaryProps } from './types';

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <ErrorMessage />;
        }

        return children;
    }
}

export default ErrorBoundary;
