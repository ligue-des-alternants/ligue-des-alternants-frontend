import axios, { type AxiosError } from 'axios';

import type News from '@/interfaces/news';
import type { StrapiResponse } from '@/interfaces/news';

const strapiUrl = import.meta.env.STRAPI_URL;

if (!strapiUrl) {
  throw new Error('STRAPI_URL environment variable is not defined');
}

const strapiClient = axios.create({
  baseURL: strapiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchNews(): Promise<News[]> {
  try {
    const response = await strapiClient.get<StrapiResponse<News[]>>('/api/news', {
      params: {
        sort: 'publishedAt:desc',
        populate: '*',
      },
    });

    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // eslint-disable-next-line no-console
    console.error('Error fetching news from Strapi:', axiosError.message);

    if (axiosError.response) {
      // eslint-disable-next-line no-console
      console.error('Response status:', axiosError.response.status);
      // eslint-disable-next-line no-console
      console.error('Response data:', axiosError.response.data);
    }

    throw new Error(`Failed to fetch news: ${axiosError.message}`);
  }
}
