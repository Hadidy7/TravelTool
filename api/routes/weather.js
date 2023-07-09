import express from 'express';
import { getWeatherByCity } from '../controllers/weather.js';

const router = express.Router();

router.get('/city/:city', getWeatherByCity);

export default router;
