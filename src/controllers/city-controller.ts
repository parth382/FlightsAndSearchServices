import { Request, Response, RequestHandler } from 'express';
import { CityCreateData, CityUpdateData, CityFilter, ApiResponse } from '../types/city.types';
import * as cityService from '../services/city-service';
import { City } from '../models/City';

type CityRequestHandler = RequestHandler<any, ApiResponse<City | City[] | boolean>>;

// Create City
export const createCity: CityRequestHandler = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body as CityCreateData);
        res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: null
        });
    } catch (error) {
        res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to create city',
            err: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Delete City
export const destroyCity: CityRequestHandler = async (req, res) => {
    try {
        const result = await cityService.deleteCity(parseInt(req.params.id));
        res.status(200).json({
            data: result,
            success: true,
            message: 'Successfully deleted the city',
            err: null
        });
    } catch (error) {
        res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to delete city',
            err: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Get City by ID
export const getCity: CityRequestHandler = async (req, res) => {
    try {
        const city = await cityService.getCity(parseInt(req.params.id));
        res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched the city',
            err: null
        });
    } catch (error) {
        res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch city',
            err: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Update City
export const updateCity: CityRequestHandler = async (req, res) => {
    try {
        const city = await cityService.updateCity(parseInt(req.params.id), req.body as CityUpdateData);
        res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully updated the city',
            err: null
        });
    } catch (error) {
        res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to update city',
            err: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Get All Cities
export const getAllCities: CityRequestHandler = async (req, res) => {
    try {
        const filter: CityFilter = {
            name: req.query.name as string,
            country: req.query.country as string,
            pincode: req.query.pincode as string
        };
        
        const cities = await cityService.getAllCities(filter);
        res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: null
        });
    } catch (error) {
        res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch cities',
            err: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
