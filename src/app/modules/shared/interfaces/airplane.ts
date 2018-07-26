import { AirplaneType } from "./airplaneType";

export interface Airplane {
    Id: string;
    Name: string;
    Type: AirplaneType;
    ReleaseDate: string;
    ExploitationTerm: string;
}