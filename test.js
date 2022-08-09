class Flight{

    printTitle(){
        let printProposal = '*PROPUESTA* 📝\n\n';
        let printFlight = '*-VUELO DE IDA  🛫*\n\n';
        let printRoundTrip = '*-VUELO DE VUELTA  🛫*\n\n';

        let result = [printProposal, printFlight, printRoundTrip];

        return result;
    }

    infoFlight(origin, destination, hour, date){
        this.typeTrip = 'One Way';

        let printProposal = `*_${origin} - ${destination}_*\n`;
        printProposal += `*_${date}_*\n`;
        printProposal += `*_Hora de salida: ${hour}_*\n\n`;
    
        return printProposal;
    }

}

let newFlight = new Flight();

function newFlightOW(origin, destination, hour, date){
    // let printNewFlight = newFlight.printTitle()[0];
    // printNewFlight += newFlight.printTitle()[1];
    let printNewFlight = newFlight.infoFlight(origin, destination, hour, date);

    return printNewFlight;
}

function newFlightRW(origin, destination, hour, date){

    let rhour = '02:30pm';
    let rdate = 'Viernes 12 de Agosto';
    
    let printNewFlight = newFlightOW(origin, destination, hour, date);
    printNewFlight += newFlight.printTitle()[2]; 
    printNewFlight += newFlight.infoFlight(destination, origin, rhour, rdate);
    
    return printNewFlight;
}

const quote = 'One Way';
const option = 'Onse Way';

let newQuote = '';

// Declare local variables
let printT = newFlight.printTitle()[0];
let printOW = newFlight.printTitle()[1];
let printRT = newFlight.printTitle()[2];

let origin = 'Cancun';
let destination = 'Puerto Vallarta';
let hour = '10:00am';
let date = 'Viernes 12 de Agosto';

if (quote == option) {
    newQuote = printT;
    newQuote += printOW;
    newQuote += newFlight.infoFlight(origin, destination, hour, date);
}
else {

    // Additional variables
    let rhour = '03:30pm';
    let rdate = 'Sábado 13 de Agosto';
    
    newQuote = printT;
    newQuote += printOW;
    newQuote += newFlight.infoFlight(origin, destination, hour, date);
    newQuote += printRT;
    newQuote += newFlight.infoFlight(destination, origin, rhour, rdate);
}

console.log(newQuote);

