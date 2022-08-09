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

    price(passengers, webPrice, exchange){
        let usdPrice = webPrice + 5;
        let penPrice = Math.round(usdPrice*exchange);

        let totalPricePassengersPen = passengers * penPrice;
        let totalPricePassengersUsd = passengers * usdPrice;
        // let exchange = 3.97;

        let printPrice = `✔️ Precio de pasaje 🎫, tasas 💰 y mochila 🎒 a *${penPrice} soles.*\n\n`;

        if (passengers < 2) {
            printPrice += `_PRECIO EN DÓLARES 💱_\n`;
            printPrice += `_Precio por pasajero: *$${usdPrice} dólares*_\n`;
            printPrice += `\_💲Tipo de cambio referencial: ${exchange}_`;
            
        } else {
            
            printPrice += `_💲El precio total para *${passengers}* pasajeros es de *${totalPricePassengersPen} soles*_\n\n`;

            printPrice += `_PRECIO EN DÓLARES 💱_\n`;
            printPrice += `_Precio por pasajero: *$${usdPrice} dólares*_\n`;
            printPrice += `_Precio para *${passengers}* pasajeros: *$${totalPricePassengersUsd} dólares*_`;
            printPrice += `\_💲Tipo de cambio referencial: ${exchange}_`;
            
        }

        return printPrice;
    }

}

let newFlight = new Flight();

const quote = 'One Way';
const option = 'Onec Way';
const exchange = 3.99;

let newQuote = '';

// Declare local variables
let printT = newFlight.printTitle()[0];
let printOW = newFlight.printTitle()[1];
let printRT = newFlight.printTitle()[2];

let origin = 'Cancun';
let destination = 'Puerto Vallarta';
let hour = '10:00am';
let date = 'Viernes 12 de Agosto';
let webPrice = 95;
let passengers = 1;

switch (quote) {
    case option:
        newQuote = printT;
        newQuote += printOW;
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
        newQuote += newFlight.price(passengers, webPrice, exchange);
        break;
    default:
        // Additonal variables
        let rhour = '12:00pm';
        let rdate = 'Viernes 13 de Agosto';

        newQuote = printT;
        newQuote += printOW;
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
        newQuote += printRT;
        newQuote += newFlight.infoFlight(destination, origin, rhour, rdate);
        newQuote += newFlight.price(passengers, webPrice, exchange);
        break;
}

console.log(newQuote);

