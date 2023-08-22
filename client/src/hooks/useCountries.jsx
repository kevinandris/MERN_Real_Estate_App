import countries from "world-countries"

const formattedCounties = counties.map((country) => ({
    value: country.name.common,
    label: `${country.name.common} ${country.flag}`,
    latlng: country.lan,
    region: country.region
}))

const useCountries = () => {
    const getAll = () => formattedCounties;
    return {getAll}
}

export default useCountries