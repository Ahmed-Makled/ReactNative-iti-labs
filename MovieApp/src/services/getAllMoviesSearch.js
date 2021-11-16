import {client} from './client';

export const getAllMoviesSearch = async query => {
  const params = {
    s: query,
  };
  try {
    const {data} = await client.get('/', {params});
    if (data.Response === 'True') {
      // console.log('data services------', data);
      return data.Search;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
