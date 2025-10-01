import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Destinations() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
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


  return (
   <div>
    <h1 className="text-3xl font-bold mb-4">Destinations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.slice(0, 12).map((country) => (
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