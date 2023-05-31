import Cookies from "js-cookie"
import { removeWhitespaceOrNull } from "../scripts/dataUtils"

const baseAddressUrl = 'https://aspnet2-grupp1-backend.azurewebsites.net/api/Addresses'
const updateAddressUrl = `${baseAddressUrl}/CustomerAddress/Update`
const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0'

const createOrUpdateAddressAsync = async (addressData) => {
  for (const key in addressData) {
    if (typeof addressData[key] !== 'string') continue
    addressData[key] = removeWhitespaceOrNull(addressData[key])
  }

  const url = addressData.id ? updateAddressUrl : baseAddressUrl
  const method = addressData.id ? 'PUT' : 'POST'

  const result = await fetch(url, {
    method: method,
    headers: {
      'API-KEY': apiKey,
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookies.get('maneroToken')
    },
    body: JSON.stringify(addressData)
  })
  .then((res) => {
    if (res.ok) {
      return true
    }

    return false
  }).catch((err) => {
    console.error(err.message)
    return false
  })

  return result
}

const getUserAddresses = async (userId) => {
	const result = await fetch(baseAddressUrl + '?userID=' + userId, {
		headers: {
			'API-KEY': apiKey,
			Authorization: 'Bearer ' + Cookies.get('maneroToken'),
		},
	});

	const data = await result.json();
	return data;
	};

export { createOrUpdateAddressAsync, getUserAddresses }

