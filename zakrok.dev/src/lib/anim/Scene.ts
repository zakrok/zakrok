import type {ArttAnimation} from "./ArttAnimation";

export interface Scene {
    animations: ArttAnimation[],
    rate: number,
    duration: number
}

