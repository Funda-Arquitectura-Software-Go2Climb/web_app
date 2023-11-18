import { Travel } from "./travel";

export interface Activity {
    id: number;
    name: string;
    description: string; 
    travel: Travel;
}