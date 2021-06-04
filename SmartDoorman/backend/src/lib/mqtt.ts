import MQTT from 'mqtt';
import dotenv from 'dotenv';

dotenv.config()

let config: MQTT.IClientOptions = {
  host: process.env.MQTT_HOST || 'localhost',
  port: Number(process.env.MQTT_PORT) || 1883,
}

const mqtt = MQTT.connect(config)

mqtt.on('connect', () => {
  console.log(' > MQTT connected successfully')
})

mqtt.on('error', (err) => {
  console.log(' > MQTT error occurred \n')
  console.error(err)
})

export { mqtt }