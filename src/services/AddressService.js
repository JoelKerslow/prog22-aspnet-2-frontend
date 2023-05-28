import Cookies from "js-cookie";

const addressUrl = "https://aspnet2-grupp1-backend.azurewebsites.net/api/Addresses"
const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0"

const getUserAddresses = async (userId) => {
    const result = await fetch(addressUrl + "?userID=" + {userId}, {
		headers: {
			"API-KEY": apiKey,
            "Authorization": "Bearer " + Cookies.get("maneroToken"),
		},
	});

    const data = await result.json()

    if(data !== null){
        return data;
    }
    return [];
};

export { getUserAddresses };