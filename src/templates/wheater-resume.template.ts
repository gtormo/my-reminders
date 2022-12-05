import { WheaterTemplateProps } from "../models/wheater"

const getHTML = (props: WheaterTemplateProps): string => {
    return `
        <div>
            <h2>¡Buenos días ${props.name}!<h2>
            <span>Aquí tienes un resumen del tiempo para hoy ${props.date}<span>
            <ul>
                <li><strong>Temperatura máxima: </strong>${props.maxTemperature}°C</li>
                <li><strong>Temperatura mínima: </strong>${props.minTemperature}°C</li>
                <li><strong>Velocidad máxima de viento: </strong>${props.maxWindSpeed} km/h</li>
            </ul>

            <a href="https://www.aemet.es/es/eltiempo/prediccion/municipios/alcoy-alcoi-id03009">Ver información más detallada</a>
        </div>
    `
}

export const WheaterResumeTemplate = {
    getHTML
}