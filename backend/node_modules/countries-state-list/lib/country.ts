import countryList from '../assets/country.json';
import { ICountry } from './interface';

// Get a country by isoCode.
function getCountryByCode(isoCode: string): ICountry | false {
	if (isoCode && countryList != null) {
		const codex = countryList.findIndex((c: 
			 any) => {
			return c.isoCode === isoCode;
		});
		return codex !== -1 ? countryList[codex] : false;
	}
	return false;
}

// Get a list of all countries.
function getAllCountries(): ICountry[] {
	return countryList;
}

export default {
	getCountryByCode,
	getAllCountries,
};
