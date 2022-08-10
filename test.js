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

        printPrice += `\n\n_*Propuesta válida por 15 minutos trascurrido éste tiempo, vuelva a pedir una nueva propuesta._`;

        return printPrice;
    }

    printFormatDate(dateFormat, hourFormat){
        let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        
        // Parse date
        let formatDate = new Date(dateFormat);
        let day = days[formatDate.getDay()];
        let month = months[formatDate.getMonth()];
        let date = `${day} ${formatDate.getDate()+1} de ${month}`;
        
        // Parse hour
        let hour = String(hourFormat);
        let hours = hour[0] + hour[1];
        let minute = hour[3] + hour[4];

        if (Number(hours) > 12){
            if (hours == 22 || hours == 23){
                 hour = `${hours-12}:${minute}pm`;
            } else {
                hour = `0${hours-12}:${minute}pm`;            
            }
         } else {
            if (hours == 12){
                hour = `${hours}:${minute}pm`;
            } else {
            hour = `${hours}:${minute}am`;
            }
        }

        let result = [date, hour];

        return result;
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
    
    const quote = document.getElementById('get-return').checked;
    const exchange = document.getElementById('get-exchange').value;
    let newQuote = '';
    
    let origin = document.getElementById('get-origin').value;
    let destination = document.getElementById('get-destination').value;
    let date = document.getElementById('get-date').value;
    let hour = document.getElementById('get-time').value;
    
    let webPrice = Number(document.getElementById('get-price').value);
    let passengers = Number(document.getElementById('get-np').value);
    let bag = document.getElementById('get-bag').checked;
    
    let newDate = newFlight.printFormatDate(date, hour);
    date = newDate[0];
    hour = newDate[1];

    switch (quote) {
    case false:
        newQuote = newFlight.printTitle()[0];
        newQuote += newFlight.printTitle()[1];
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
        newQuote += newFlight.price(passengers, bag, webPrice, exchange);
        break;
    default:
        // Additonal variables
        let rhour = document.getElementById('get-return-time').value;
        let rdate = document.getElementById('get-return-date').value;
        newDate = newFlight.printFormatDate(rdate, rhour);
        rdate = newDate[0];
        rhour = newDate[1];

        newQuote = newFlight.printTitle()[0];
        newQuote += newFlight.printTitle()[1];
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
        newQuote += newFlight.printTitle()[2];
        newQuote += newFlight.infoFlight(destination, origin, rhour, rdate);
        newQuote += newFlight.price(passengers, bag, webPrice, exchange);
        break;
    }

    if (!origin == '' && !destination == '' && !date == '' && !hour == '' && !webPrice == '' && !passengers == '') {
        document.getElementById('printResult').innerHTML = newQuote;
        // document.getElementById('printResult').innerHTML = newQuote;
    } else {
        alert('Por favor, complete todos los campos.');
    }

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