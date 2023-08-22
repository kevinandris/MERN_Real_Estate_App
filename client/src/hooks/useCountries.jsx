// ! exported to addLocation.jsx
import countries from "world-countries"

const formattedCounties = countries.map((country) => ({
    value: country.name.common,
    label: `${country.name.common} ${country.flag}`,
    latlng: country.latlng,
    region: country.region
}))

const useCountries = () => {
    const getAll = () => formattedCounties;
    return {getAll}
}

export default useCountries