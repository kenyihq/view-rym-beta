
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
    let date = document.getElementById('date').value;

    let printProposal = '*PROPUESTA* 📝\n\n';
    printProposal += '*-VUELO DE IDA  🛫*\n';
    printProposal += `*_${origin} - ${destination}_*\n`;
    printProposal += `*_Martes 26 de Julio_*\n`
    printProposal += `*_Hora de salida: 12:20pm_*\n\n`

    let totalPrice = `_✔️ Precio de pasaje 🎫, tasas 💰 y mochila 🎒 a *85 soles*._\n\n`

    totalPrice += `_PRECIO EN DÓLARES 💱_\n`
    totalPrice += `_Precio por pasajero: *$21 dólares*_\n`
    totalPrice += `_💲Tipo de cambio referencial: *4.03*_\n\n`

    let dangerInfo = '_*Propuesta válida por 15 minutos trascurrido éste tiempo, vuelva a pedir una nueva propuesta_'


    let sale = `${printProposal}${totalPrice}${dangerInfo}`;

    document.getElementById('printResult').innerHTML = sale;
}


getCity();

