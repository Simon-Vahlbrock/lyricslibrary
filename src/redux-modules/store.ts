import {configureStore} from '@reduxjs/toolkit'
import {appReducer} from "./app/slice";
import {userReducer} from "./user/slice";
import {songsReducer} from "./songs/slice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
        songs: songsReducer
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        });

        if (process.env.NODE_ENV === 'development' || process.env.BUILD_ENV === 'qa') {
            /**
             * This inline require will get removed by Terser during minification
             * when NODE_ENV is not `development` and BUILD_ENV is not `qa`.
             * Do not make it an import.
             */
                // eslint-disable-next-line
            const {createLogger} = require('redux-logger');

            // eslint-disable-next-line
            const logger = createLogger({collapsed: true, duration: true});

            return defaultMiddleware.concat(logger);
        }

        return defaultMiddleware;
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetAppState = () => RootState;
