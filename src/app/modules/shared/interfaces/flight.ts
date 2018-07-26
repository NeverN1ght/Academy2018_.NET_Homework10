import { Ticket } from "./ticket";

export interface Flight {
    Number: string;
    DeparturePoint: string;
    DestinationPoint: string;
    ArrivalTime: string;
    Tickets: Ticket[];
}