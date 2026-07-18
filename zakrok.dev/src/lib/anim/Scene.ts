import type {ArttAnimation} from "$lib/anim/ArttAnimation";

export interface Scene {
    animations: ArttAnimation[],
    rate: number,
    duration: number
}

