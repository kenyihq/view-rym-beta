
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
    let mounts = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let formatDate = new Date(date);
    let day = days[formatDate.getDay()];
    date = `${day} ${formatDate.getDate()+1} de ${mounts[formatDate.getMonth()]}`;

    // Hour parse
    let hour = formatDate.getHours();
    let minutes = formatDate.getMinutes();
    let timeFlights = `${hour}:${minutes}`;

    console.log(hour, minutes);
    



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
        document.getElementById('printResult').innerHTML = sale;
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

