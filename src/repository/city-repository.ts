// in repository level we are just make async function to Create , Read , Update & Delete -> City ( Model )



import { Repository } from 'typeorm';
import AppDataSource from '../config/dataSource';
import { City } from '../models/City';
import { CityCreateData, CityUpdateData, CityFilter } from '../types/city.types';
import { SelectQueryBuilder } from "typeorm";

// Initialize repository
const cityRepository = AppDataSource.getRepository(City);

// Create a new city
export const createCity = async ({ name, country, pincode }: CityCreateData) => {
    try {
        const now = new Date();
        const city = cityRepository.create({ 
            name, 
            country, 
            pincode,
            createdAt: now,
            updatedAt: now
        });
        await cityRepository.save(city);
        return city;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw error;
    }
};

// Delete a city by its ID
export const deleteCity = async (cityId: number): Promise<boolean> => {
    try {
        const result = await cityRepository.delete(cityId);
        return result.affected > 0;
    } catch (error) {
        console.error("Repository Error:", error);
        throw new Error('Failed to delete city');
    }
};

// Update a city's properties
export const updateCity = async (cityId: number, data: CityUpdateData) => {
    try {
        const city = await cityRepository.findOneBy({ id: cityId });
        if (city) {
            Object.assign(city, {
                ...data,
                updatedAt: new Date()
            });
            await cityRepository.save(city);
            return city;
        }
        throw new Error('City not found');
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw error;
    }
};

// Get a city by its ID
export const getCity = async (cityId: number): Promise<City> => {
    try {
        const city = await cityRepository.findOneBy({ id: cityId });
        if (!city) throw new Error('City not found');
        return city;
    } catch (error) {
        console.error("Repository Error:", error);
        throw new Error('Failed to fetch city');
    }
};

// Get all cities with optional filtering
export const getAllCities = async (filter: CityFilter): Promise<City[]> => {
    try {
        const queryBuilder = cityRepository.createQueryBuilder("city");

        if (filter.name) {
            queryBuilder.andWhere("city.name LIKE :name", { name: `${filter.name}%` });
        }
        if (filter.country) {
            queryBuilder.andWhere("city.country LIKE :country", { country: `${filter.country}%` });
        }
        if (filter.pincode) {
            queryBuilder.andWhere("city.pincode LIKE :pincode", { pincode: `${filter.pincode}%` });
        }

        return await queryBuilder.getMany();
    } catch (error) {
        console.error("Repository Error:", error);
        throw new Error('Failed to fetch cities');
    }
};
