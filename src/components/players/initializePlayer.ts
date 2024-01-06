import { Player } from "../../App"

export const initalizePlayer = (name: string, id:any): Player => {
    return {
        name: name,
        id: id,
        crops: {
            hay: 10,
            grain: 10,
            fruit: 0,
            cows: 0
        },
        debt: 10000,
        equipment: {
            tractor: false,
            harvester: false
        },
        totalWealth: 0
    }
}