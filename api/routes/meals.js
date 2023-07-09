import express from 'express';
import { getMealsByCountry } from '../controllers/meal.js';

const router = express.Router();

router.get('/country/:country', getMealsByCountry);

export default router;
