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

    price(passengers, bag, webPrice, exchange){
        let usdPrice = webPrice + 5;
        let penPrice = Math.round(usdPrice*exchange);

        let totalPricePassengersPen = passengers * penPrice;
        let totalPricePassengersUsd = passengers * usdPrice;
        // let exchange = 3.97;

        let printPrice = `✔️ Precio de pasaje 🎫, tasas 💰 y mochila 🎒 a *${penPrice} soles.*\n\n`;
        
        if (bag) {
            printPrice = `_✔️ Precio de pasaje 🎫, tasas 💰, mochila 🎒 y equipaje de bodega de 20kg 🧳 a *${penPrice} soles*._\n\n`;
        }


        if (passengers < 2) {
            printPrice += `_PRECIO EN DÓLARES 💱_\n`;
            printPrice += `_Precio por pasajero: *$${usdPrice} dólares*_\n`;
            printPrice += `\_💲Tipo de cambio referencial: ${exchange}_`;
            
        } else {
            
            printPrice += `_💲El precio total para *${passengers}* pasajeros es de *${totalPricePassengersPen} soles*_\n\n`;

            printPrice += `_PRECIO EN DÓLARES 💱_\n`;
            printPrice += `_Precio por pasajero: *$${usdPrice} dólares*_\n`;
            printPrice += `_Precio para *${passengers}* pasajeros: *$${totalPricePassengersUsd} dólares*_\n`;
            printPrice += `\_💲Tipo de cambio referencial: ${exchange}_`;
            
        }

        printPrice += `\n\n*Propuesta válida por 15 minutos trascurrido éste tiempo, vuelva a pedir una nueva propuesta.`;

        return printPrice;
    }

}

function getCity (){

    let iata_peru = ['Arequipa', 'Andahuaylas', 'Anta (Huaraz)', 'Ayacucho', 'Cajamarca', 'Chimbote', 'Cuzco', 'Chachapoyas', 'Chiclayo', 'Huanuco', 'Ilo', 'Iquitos', 'Juanjui', 'Juliaca', 'Lima', 'Moyobamba', 'Pisco', 'Piura', 'Pucallpa', 'Puerto Maldonado', 'Rioja', 'Tacna', 'Talara', 'Tarapoto', 'Tingo Maria', 'Trujillo', 'Tumbes', 'Yurimaguas'];
    
    let options = '';
    
    for (let i = 0; i < iata_peru.length; i++){
        options += `<option value="${iata_peru[i]}">${iata_peru[i]}</option>\n`;
    }
    // console.log(options);
    document.getElementById('origin').innerHTML = options;
    document.getElementById('destination').innerHTML = options;
}


const getDataTravel = () => {
    let newFlight = new Flight();

    const quote = 'One Way';
    const option = 'One Way';
    const exchange = 3.99;


    let newQuote = '';
    
    // let origin = document.getElementById('origin').value;
    let origin = document.getElementById('get-origin').value;
    let destination = document.getElementById('get-destination').value;
    let date = document.getElementById('get-date').value;
    let hour = document.getElementById('get-time').value;

    let webPrice = Number(document.getElementById('get-price').value);
    let passengers = Number(document.getElementById('get-np').value);
    let bag = true;
    
    // Date parse
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let formatDate = new Date(date);
    let day = days[formatDate.getDay()];
    let month = months[formatDate.getMonth()];
    date = `${day} ${formatDate.getDate()+1} de ${month}`;
    hour = String(hour);
    let hours = hour[0] + hour[1];
    let minute = hour[3] + hour[4];
    if (Number(hours) > 12){
      hour = `0${hours-12}:${minute}pm`;
    }else {
      hour = `${hours}:${minute}am`;
    }

    switch (quote) {
    case option:
        newQuote = newFlight.printTitle()[0];
        newQuote += newFlight.printTitle()[1];
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
        newQuote += newFlight.price(passengers, bag, webPrice, exchange);
        break;
    default:
        // Additonal variables
        let rhour = '12:00pm';
        let rdate = 'Viernes 13 de Agosto';

        newQuote = newFlight.printTitle()[0];
        newQuote += newFlight.printTitle()[1];
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
        newQuote += newFlight.printTitle()[2];
        newQuote += newFlight.infoFlight(destination, origin, rhour, rdate);
        newQuote += newFlight.price(passengers, bag, webPrice, exchange);
        break;
}

document.getElementById('printResult').innerHTML = newQuote;    

    // if (!origin || !destination || !date || !price) {
    //     alert('Por favor, complete todos los campos');    
    // } else {
    //     document.getElementById('printResult').innerHTML = newQuote;
    // }

}


copiador.addEventListener("click", function(event) {   
  // el método select es utilizado para seleccionar el contenido del campo de texto
    printResult.select();
 try {
      // el método document.execCommand("copy") copia el texto seleccionado al portapapeles
      let exito = document.execCommand("copy");// devuelve true o false
      let msg = exito ? "\351xito" : "error";
      console.log(msg);
      alert("Copiado al portapapeles!")
} catch (error) {
      let err = error;
      console.log("No fue posible copiar el texto seleccionado!");
    }
  }); 

getCity();