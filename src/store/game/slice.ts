/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TObjectLiteral from 'types/TObjectLiteral';

import { IPoint } from 'services/Game/types';
import { LVLs } from 'services/Game/lvls';

export type TGameState = {
    lvlNum: number;
    richedKeys: TObjectLiteral;
    initPoint: IPoint;
};

export const initialState: TGameState = {
    lvlNum: 0,
    richedKeys: {},
    initPoint: LVLs[0].entryPointA,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameProps(state, { payload }: { payload: TGameState }) {
            state.lvlNum = payload.lvlNum;
            state.richedKeys = payload.richedKeys;
            state.initPoint = payload.initPoint;
        },

        clearGameProps(state) {
            state.lvlNum = initialState.lvlNum;
            state.richedKeys = initialState.richedKeys;
            state.initPoint = initialState.initPoint;
        },
    },
});

export const { setGameProps, clearGameProps } = gameSlice.actions;

export default gameSlice.reducer;
