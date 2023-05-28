import Cookies from "js-cookie"


const ordersBaseUrl = 'https://aspnet2-grupp1-backend.azurewebsites.net/api/orders/'
const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0'


const getOrderByCustomerId = (customerId) => {
    fetch(ordersBaseUrl + '?customerId=' + customerId, {
      headers: {
        'API-KEY': apiKey,
        'Authorization': 'Bearer ' + Cookies.get('maneroToken'),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching order')
        }
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching order:', error)
      })
  }

  export {getOrderByCustomerId};