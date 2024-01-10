import React from "react";
import { Player } from "../App";

export type PlayerContextType = {
    player: Player;
    setPlayer: React.Dispatch<React.SetStateAction<Player>>
}

export const PlayerContext =  React.createContext<PlayerContextType | null>(null)

