export interface FlightDef {
    flightID: number;
    flightNumber: string;
    destination: string;
    departureAirport: string;
    departureTime: string;
    arrivalAirport: string;
    arrivalTime: string;
    maxCapacity: number;
}

export interface FlightDefDto{
    flightNumber: string;
    destination: string;
    departureAirport: string;
    departureTime: string;
    arrivalAirport: string;
    arrivalTime: string;
    maxCapacity: number;
}
