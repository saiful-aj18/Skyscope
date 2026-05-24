countries-state-list
==============================
Basic library for Country, State

forked from : https://github.com/harpreetkhalsagtbit/country-state-city

Data Source:<br>
https://github.com/dr5hn/countries-states-cities-database<br>
For any data related issue, you can raise a Issue [here](https://github.com/dr5hn/countries-states-cities-database/issues/new).

# Install
`npm i countries-state-list`

# Usage

## Release : `v3.0.0` (Major Version Release - Not backward compatible)
  - ES6 Module usage
   
     ```js
	// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
	import { Country, State, City }  from 'countries-state-list';
	console.log(Country.getAllCountries())
	console.log(State.getAllStates())

     // Import Interfaces`
	 import { ICountry, IState, ICity } from 'countries-state-list'
	 
     ```
  - AMD Module usage
  
    ```js
	// Latest version - v3.0.0
	let Country = require('countries-state-listt).Country;
	let State = require('countries-state-list').State;

	console.log(Country.getAllCountries())
	console.log(State.getAllStates())

    ```


## For versions `below v2.2.0 and above v0.1.8`

  - ES6 Module usage
   
     ```js
     import csc from 'countries-state-list';
     ```

  - AMD Module usage
  
    ```js
    let csc = require('countries-state-list').default;
    ```

# Docs

getCountryByCode(countryCode)
---------------

It accepts a valid `CountryCode` eg: `'AS'` and   returns *Country Details*

type: **json | ICountry**

```js
{
	"isoCode": "IN",
	"name": "India",
	"phonecode": "91",
	"flag": "🇮🇳",
	"currency": "INR",
	"latitude": "20.00000000",
	"longitude": "77.00000000",
	"timezones": [
		{
			"zoneName": "Asia\/Kolkata",
			"gmtOffset": 19800,
			"gmtOffsetName": "UTC+05:30",
			"abbreviation": "IST",
			"tzName": "Indian Standard Time"
		}
	]
}
```

getStateByCodeAndCountry(stateCode, countryCode)
---------------

It accepts a valid `StateCode` eg: `'TG'` `CountryCode` eg: `'IN'` and   returns *State Details*

type: **json | ICountry**

```js
{
	"name": "Telangana",
	"isoCode": "TG",
	"countryCode": "IN",
	"latitude": "18.11243720",
	"longitude": "79.01929970"
}
```

getStatesOfCountry(countryCode)
---------------

It accepts a valid `CountryCode` and returns *all States* as Array of JSON

type: **array of json | IState**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"
	}
]

```

getAllCountries
---------------
It returns **all Countries**

type: **array of json | ICountry**

```js
[
	{
		"isoCode": "IN",
		"name": "India",
		"phonecode": "91",
		"flag": "🇮🇳",
		"currency": "INR",
		"latitude": "20.00000000",
		"longitude": "77.00000000",
		"timezones": [
			{
				"zoneName": "Asia\/Kolkata",
				"gmtOffset": 19800,
				"gmtOffsetName": "UTC+05:30",
				"abbreviation": "IST",
				"tzName": "Indian Standard Time"
			}
		]
	}
]
```

getAllStates
---------------
It returns **all States**

type: **array of json | IState**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"

	}
]
```

Special Thanks
---------------

[@baywet](https://github.com/baywet) - For mentoring Javascript to Typescript Conversion

[@dr5hn](https://github.com/dr5hn) - For updated World Data Dictionary

[taylorthurlow](https://github.com/taylorthurlow) - For pointing into right direction - Module Tree Shaking