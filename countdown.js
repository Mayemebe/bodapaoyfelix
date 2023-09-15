// Establecer la fecha objetivo del evento (año, mes - 1, día, hora, minuto, segundo)
const targetDate = new Date(2023, 12, 09, 13, 00, 59).getTime();

// Actualizar el contador cada segundo
const interval = setInterval(() => {
    // Obtener la fecha y hora actual
    const currentDate = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la actual
    const timeLeft = targetDate - currentDate;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Mostrar el contador en el elemento con el id "countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Si el tiempo ha terminado, mostrar un mensaje
    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);
