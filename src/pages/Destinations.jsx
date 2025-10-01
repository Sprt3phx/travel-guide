import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Destinations() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('') // New state for search input

    console.log('destinations rendered')

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=cca3,name,region,flags")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error fetching countries:", err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    // Filter countries based on search input
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );


  return (
   <div>
          <h1 className="text-3xl font-bold mb-4">Destinations</h1>
          
          {/* Search Bar */}
          <input 
              type="text"
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-2 border border-gray-500 rounded w-full"
/>  

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCountries.map((country) => (
                  <Link to={`/destinations/${country.cca3}`} key={country.cca3} className="border p-4 rounded hover:shadow-lg transition">
                      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-full h-32 object-cover mb-2 rounded" />
                      <h2 className="text-xl font-semibold">{country.name.common}</h2>
                      <p className="text-gray-600">{country.region}</p>
                  </Link>
              )
              )}
          </div>
    </div>
    )
}