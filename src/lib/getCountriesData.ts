import localData from '@/data/data.json';

export async function getCountriesData() {
  const isLocal = process.env.USE_LOCAL_DATA === 'true'; // true or false
  if (isLocal) return localData;

  try {
    const result = await fetch(
        'https://restcountries.com/v3.1/all', {
        next: { revalidate: 86400 }
    });
    if (!result.ok) throw new Error('API Fail');
    return await result.json();
  } catch (error) {
    console.warn('The API request failed, and the system fell back to local JSON data.', error);
    return localData; 
  }
}