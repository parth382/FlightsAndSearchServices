import { City } from '../models/City';

export interface CityCreateData {
    name: string;
    country: string;
    pincode: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CityUpdateData {
    name?: string;
    country?: string;
    pincode?: number;
    updatedAt?: Date;
}

export interface CityFilter {
    name?: string;
    country?: string;
    pincode?: string;
}

export interface ApiResponse<T = any> {
    data: T;
    success: boolean;
    message: string;
    err: any;
} 