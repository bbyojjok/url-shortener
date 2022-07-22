import client from './client';

export const createUrl = (originalUrl: string) => client.post('/api/url', { originalUrl });

export const findUrl = (urlCode: string) => client.get(`/api/url/${urlCode}`);
