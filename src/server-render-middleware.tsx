import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet, { HelmetData } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router';

import rootSaga from 'store/sagas';
import { IState } from 'store/types';

import App from 'pages/App';

import { configureStore } from './store/rootStore';
import { getInitialState } from './store/getInitialState';

function getHtml({
    reactHtml,
    reduxState,
    helmetData,
    chunkExtractor,
    styles,
}: {
    reactHtml: string;
    reduxState: IState;
    helmetData: HelmetData;
    chunkExtractor: ChunkExtractor;
    styles: string;
}): string {
    const scriptTags = chunkExtractor.getScriptTags();
    const linkTags = chunkExtractor.getLinkTags();
    const styleTags = chunkExtractor.getStyleTags();

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            ${styles}
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            ${linkTags}
            ${styleTags}
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            ${scriptTags}
        </body>
        </html>
    `;
}

export default (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};
    const { store } = configureStore(getInitialState(location), location);

    function renderApp() {
        const statsFile = path.resolve('./dist/loadable-stats.json');
        const chunkExtractor = new ChunkExtractor({ statsFile });

        const sheet = new ServerStyleSheet();

        const jsx = chunkExtractor.collectChunks(
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={location}>
                    <StyleSheetManager sheet={sheet.instance}>
                        <App />
                    </StyleSheetManager>
                </StaticRouter>
            </ReduxProvider>,
        );

        const styles = sheet.getStyleTags();

        const reactHtml = renderToString(jsx);
        const reduxState = store.getState();
        const helmetData = Helmet.renderStatic();

        if (context.url) {
            res.redirect(context.url);
            return;
        }

        res.status(context.statusCode || 200).send(
            getHtml({
                reactHtml,
                reduxState,
                helmetData,
                chunkExtractor,
                styles,
            }),
        );
    }

    store
        .runSaga(rootSaga)
        .toPromise()
        .then(() => renderApp())
        .catch(err => {
            throw err;
        });

    const dataRequirements: (Promise<void> | void)[] = [];

    return Promise.all(dataRequirements)
        .then(() => store.close())
        .catch(err => {
            throw err;
        });
};
