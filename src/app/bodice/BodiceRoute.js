import { Router } from 'express';
import BodiceController from './BodiceController';

const router = Router();

router.post('/bodice_cad', BodiceController.GeneratePattern);
router.post('/bodice_json', BodiceController.GeneratePatternData);
