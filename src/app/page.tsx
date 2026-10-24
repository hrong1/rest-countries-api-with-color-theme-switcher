import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar"
import CountryCard from "@/components/CountryCard";
import { getCountriesData } from '@/lib/getCountriesData';

export default async function Home() {

  const countries = await getCountriesData();
  console.log(countries);
  return (
    <div>
      <main>
        <Header />
        <SearchBar />
        <div className="grid">
                {countries.map((country: any) => (
                    <CountryCard

                      key={
                        typeof country.name === 'object' 
                        ? country.name.common
                        : country.name
                      }
                      countryName={
                        typeof country.name === 'object' 
                        ? country.name.common 
                        : country.name
                      }
                      population={country.population}
                      region={country.region}
                      capital={country.capital?.[0] || 'None'}
                      flag={country.flags.png}
                    />
                ))}
            </div>
      </main>
    </div>
  );
}
