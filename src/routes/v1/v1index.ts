import express, { Router } from 'express';
// import * as cityController from '../../controllers/city-controller';
import { 
    createCity,
    destroyCity,
    updateCity,
    getCity,
    getAllCities
} from '../../controllers/city-controller';

const router: Router = express.Router();

/**
 * City Routes
 * Base URL: /api/v1
 */

router.post('/cities', createCity);
router.get('/cities', getAllCities);
router.get('/cities/:id', getCity);
router.patch('/cities/:id', updateCity);
router.delete('/cities/:id', destroyCity);

export default router;
