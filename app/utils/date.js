const styleDate = (date) => {
    const shortDate = date.slice(0,10);
    const dateParts = shortDate.split('-')
    const day = dateParts[2];
    const month = getMonth(dateParts[1]);
    const year = dateParts[0];

    return `${day} de ${month}, ${year}`
    
}

const getMonth = (month) => {
    let mes;

    switch (month) {
        case "01":
            mes = 'Enero'
            break;
        case "02":
            mes = 'Febrero'
            break;
        case "03":
            mes = 'Marzo'
            break;
        case "04":
            mes = 'Abril'
            break;
        case "05":
            mes = 'Mayo'
            break;
        case "06":
            mes = 'Junio'
            break;
        case "07":
            mes = 'Julio'
            break;
        case "08":
            mes = 'Agosto'
            break;
        case "09":
            mes = 'Septiembre'
            break;
        case "10":
            mes = 'Octubre'
            break;
        case "11":
            mes = 'Noviembre'
            break;
        case "12":
            mes = 'Diciembre'
            break;
    }

    return mes;
}

export default styleDate;