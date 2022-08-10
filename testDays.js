function formatDate(dateFormat, hourFormat){
    
        let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

        let formatDate = new Date(dateFormat);
        let day = days[formatDate.getDay()];
        let month = months[formatDate.getMonth()];
        date = `${day} ${formatDate.getDate()+1} de ${month}`;
        
        hour = String(hourFormat);
        let hours = hour[0] + hour[1];
        let minute = hour[3] + hour[4];

        if (Number(hours) > 12){
        hour = `0${hours-12}:${minute}pm`;
        } else {
        hour = `${hours}:${minute}am`;
        }

        let result = [date, hour];

        return result;
    }


date = '2019-01-01';
hour = '13:00:00';

console.log(formatDate(date, hour));