import { client } from './client';

export const getAllMoviesSearch = async query => {
    const params = {
        s: query,
    };
    try {
        const { data } = await client.get('/', { params });

        return data

    } catch (error) {
        console.log(error);
    }
};
