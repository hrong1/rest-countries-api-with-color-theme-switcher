import localData from '@/data/data.json';

export async function getCountriesData() {
  const isLocal = process.env.USE_LOCAL_DATA === 'true'; // true or false
  if (isLocal) return localData;

  try {
    const result = await fetch(
        'https://restcountries.com/v5/all', {
        next: { revalidate: 86400 }
    });
    const data = await result.json();
    if (!result.ok || data.success === false) throw new Error('API Deprecated or Failed');
    return data;
  } catch (error) {
    console.warn('The API request failed, and the system fell back to local JSON data.', error);
    return localData; 
  }
}