import { City } from '../models/City';
import { CityCreateData, CityUpdateData, CityFilter } from '../types/city.types';
import * as cityRepository from '../repository/city-repository';

// Create city service function
export const createCity = async (data: CityCreateData): Promise<City> => {
    try {
        return await cityRepository.createCity(data);
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

// Delete city service function
export const deleteCity = async (cityId: number): Promise<boolean> => {
    try {
        return await cityRepository.deleteCity(cityId);
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

// Update city service function
export const updateCity = async (cityId: number, data: CityUpdateData): Promise<City> => {
    try {
        return await cityRepository.updateCity(cityId, data);
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

// Get single city service function
export const getCity = async (cityId: number): Promise<City> => {
    try {
        return await cityRepository.getCity(cityId);
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

// Get all cities service function
export const getAllCities = async (filter: CityFilter): Promise<City[]> => {
    try {
        return await cityRepository.getAllCities(filter);
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};