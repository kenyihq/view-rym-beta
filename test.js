class Flight{

    printTitle(){
        let printProposal = '*PROPUESTA* 📝\n';
        let printFlight = '*-VUELO DE IDA  🛫*\n';
        let printRoundTrip = '*-VUELO DE VUELTA  🛫*\n';

        let result = [printProposal, printFlight, printRoundTrip];

        return result;
    }

    oneWay(origin, destination, hour, departure, arrival, price){
        this.typeTrip = 'One Way';
        this.origin = origin;
        this.destination = destination;
        this.hour = hour;
        this.departure = departure;
        this.arrival = arrival;
        this.price = price;

        let printProposal = `*_${origin} - ${destination}_*\n`;
        printProposal += `*__*\n`
        printProposal += `*_Hora de salida: _*\n\n`
    
        return printProposal;
    }

    roundTrips(oneWay, origin, destination, hour, departure, arrival, price){
        this.typeTrip = 'Round Trip';
        this.oneWay = oneWay;
        this.origin = origin;
        this.destination = destination;
        this.hour = hour;
        this.departure = departure;
        this.arrival = arrival;
        this.price = price;
    
        return `${this.typeTrip} - ${this.oneWay} - ${this.origin} - ${this.destination} - ${this.hour} - ${this.departure} - ${this.arrival} - ${this.price}`;
    }

}

let flight = new Flight();
let flightO = flight.oneWay('Arequipa', 'Lima', '12:00', '12:00', '12:00', '$100');

//console.log(flight);
let rt = flight.roundTrips(flightO, 'Lima', '12:00', '12:00', '12:00', '$100');


let pt = flight.printTitle();

console.log(pt[0]);
console.log(pt[1]);
console.log(flightO);
