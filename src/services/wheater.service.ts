import { Json } from "../models"
/**
 * @docs
 * Learn more about how to use Open Meteo API
 * @url https://open-meteo.com/en/docs#api_form
 */

const search = async (): Promise<Json> => {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=38.71&longitude=-0.47&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,windspeed_10m,windspeed_80m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max&timezone=auto')
    return res.json()
}

export const WheaterService = {
    search
}