import express from 'express';
import { getRiskAdvice } from '../controller/riskController.js'; // assuming this is the file where you defined it

const router = express.Router();

router.post('/info', getRiskAdvice); // clean and proper

export default router;
