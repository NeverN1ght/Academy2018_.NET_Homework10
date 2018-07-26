import { Pilot } from "./pilot";
import { Stewardesse } from "./stewardesse";

export interface Crew {
    Id: string;
    Pilot: Pilot;
    Stewardesses: Stewardesse[];
}