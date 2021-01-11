import {Dimensions} from 'react-native'

export const {width, height} = Dimensions.get('window')
export const SIZE = 64
export const SPACING = 12

const s = width * 0.88

export const spec = {
    ITEM_WIDTH:s,
    ITEM_HEIGHT: height * 0.80,
    RADIUS: 18,
    SPACING,
    FULL_SIZE: s + SPACING * 2,
    SNAP_INTERVAL: s + SPACING * 2,
    SMALL_RADIUS: 8
}