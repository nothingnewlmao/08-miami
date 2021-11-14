import { isServer } from 'store/rootStore';

export const DISCRET_WIDTH_SIZE = 75;

const innerWidth = isServer ? 1000 : window.innerWidth;

export const PERFECT_ONE = innerWidth / DISCRET_WIDTH_SIZE;

// movement
export const LEFT_RIGHT_SPEED_BUST = PERFECT_ONE / 8;
export const FADING_COEF = 0.95;

export const FALLING_COEF = 0.72;
export const MAX_JUMP_HEIGHT = PERFECT_ONE * 2;
export const JUMP_BUST_LIMIT = 16;
export const JUMP_VELOCITY = PERFECT_ONE / 40 / 1.5;
export const JUMP_VELOCITY_MODIFICATOR = 10;

export const MAX_GAMER_SPEED = PERFECT_ONE / 5;

// ball sizes
export const GAMER_RAD = PERFECT_ONE / 1.4;
export const GAMER_INNER_COEF = [3.5714285714285716, -8.33333333, 1.666];
export const GAMER_BLICK_COEF = [1.6666, -3.125, 0.2];

// coin sizes

export const COIN_RAD_X = PERFECT_ONE / 3.5;
export const COIN_RAD_Y = PERFECT_ONE / 2;
