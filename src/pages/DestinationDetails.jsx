import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function DestinationDetails() {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${id}?fields=cca3,name,region,flags,population,capital,languages,currencies`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data[0]);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching country details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }
    if (!country) {
        return <div>Country not found</div>; // Show error state
    }

  return (
    <div>
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-64 h-32 object-cover my-4 rounded" />
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
          <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
        </div>
    )
}
      
