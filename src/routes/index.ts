import express from 'express';
import v1ApiRoute from './v1/v1index';  // Correctly import the router
// import v2ApiRoute from './v2/v2index';  // Correctly import the router if using v2

const router = express.Router();

// Use the v1 and v2 routes correctly
router.use('/v1', v1ApiRoute);  // Pass the v1ApiRoute router here
// router.use('/v2', v2ApiRoute);  // Pass the v2ApiRoute router here

export default router;  // Export the router to use it in your app
