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

switch (quote) {
    case option:
        newQuote = printT;
        newQuote += printOW;
        newQuote += newFlight.infoFlight(origin, destination, hour, date);
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
        break;
}

function getCity(){

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
    // let origin = document.getElementById('origin').value;
    let origin = document.getElementById('get-origin').value;
    let destination = document.getElementById('get-destination').value;
    let date = document.getElementById('get-date').value;
    let timeFlight = document.getElementById('get-time').value;
    
    // Date parse
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let formatDate = new Date(date);
    let day = days[formatDate.getDay()];
    let month = months[formatDate.getMonth()];
    date = `${day} ${formatDate.getDate()+1} de ${month}`;
    timeFlight = String(timeFlight);
    let hour = timeFlight[0] + timeFlight[1];
    let minute = timeFlight[3] + timeFlight[4];
    if (Number(hour) > 12){
      timeFlight = `0${hour-12}:${minute}pm`;
    }else {
      timeFlight = `${hour}:${minute}am`;
    }

    let price = document.getElementById('get-price').value;

    let printProposal = '*PROPUESTA* 📝\n\n';
    printProposal += '*-VUELO DE IDA  🛫*\n';
    printProposal += `*_${origin} - ${destination}_*\n`;
    printProposal += `*_${date}_*\n`
    printProposal += `*_Hora de salida: ${timeFlight}_*\n\n`

    let totalPrice = `_✔️ Precio de pasaje 🎫, tasas 💰 y mochila 🎒 a *85 soles*._\n\n`

    totalPrice += `_PRECIO EN DÓLARES 💱_\n`
    totalPrice += `_Precio por pasajero: *$${price} dólares*_\n`
    totalPrice += `_💲Tipo de cambio referencial: *4.03*_\n`

    let dangerInfo = '_*Propuesta válida por 15 minutos trascurrido éste tiempo, vuelva a pedir una nueva propuesta_\n'


    let sale = `${printProposal}${totalPrice}${dangerInfo}`;

    if (!origin || !destination || !date || !price) {
        alert('Por favor, complete todos los campos');    
    } else {
        document.getElementById('printResult').innerHTML = newQuote;
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

