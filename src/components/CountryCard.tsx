
interface CountryCardProps {
    countryName: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
}

export default function CountryCard({ countryName, population, region, capital, flag}: CountryCardProps) {
    return (
        <div>
            <img src={flag} alt={`${countryName} flag`}/>
            <h2>{countryName}</h2>
            <p>Population: {population.toLocaleString()}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    )
}