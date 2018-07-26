import { Crew } from "./crew";
import { Airplane } from "./airplane";

export interface Departure {
    Id: string;
    FlightNumber: string;
    DepartureTime: string;
    Crew: Crew;
    Airplane: Airplane;
}