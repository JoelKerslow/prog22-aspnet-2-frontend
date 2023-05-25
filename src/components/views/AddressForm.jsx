import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import BackArrow from '../partials/generalPartials/BackArrow'

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY
const useTestData = false // Använd denna för att inte spamma google api
//#region TestData
const testData = {
  plus_code: {
    compound_code: '9WJ2+P32 Stockholm, Sweden',
    global_code: '9FFV9WJ2+P32',
  },
  results: [
    {
      address_components: [
        {
          long_name: '33',
          short_name: '33',
          types: ['street_number'],
        },
        {
          long_name: 'Spånga stationsväg',
          short_name: 'Spånga stationsväg',
          types: ['route'],
        },
        {
          long_name: 'Solhem',
          short_name: 'Solhem',
          types: ['political', 'sublocality', 'sublocality_level_1'],
        },
        {
          long_name: 'Spånga',
          short_name: 'Spånga',
          types: ['postal_town'],
        },
        {
          long_name: 'Stockholms län',
          short_name: 'Stockholms län',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'Sweden',
          short_name: 'SE',
          types: ['country', 'political'],
        },
        {
          long_name: '163 51',
          short_name: '163 51',
          types: ['postal_code'],
        },
      ],
      formatted_address: 'Spånga stationsväg 33, 163 51 Spånga, Sweden',
      geometry: {
        location: {
          lat: 59.382012,
          lng: 17.9000014,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 59.38336098029151,
            lng: 17.9013503802915,
          },
          southwest: {
            lat: 59.38066301970849,
            lng: 17.8986524197085,
          },
        },
      },
      place_id: 'ChIJ2ZOrPkyeX0YRvc96viWiuog',
      plus_code: {
        compound_code: '9WJ2+R2 Stockholm, Sweden',
        global_code: '9FFV9WJ2+R2',
      },
      types: ['street_address'],
    },
  ],
}
//#endregion

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addressLine1: '',
      addressLine2: '',
      postalCode: '',
      city: '',
      country: '',
    },
  })

  const [location, setLocation] = useState(null)
  const [locationError, setLocationError] = useState()
  const [useLocation, setUseLocation] = useState(false)
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!useLocation) {
      reset()
      return
    }

    const getAndSetAddressComponents = async () => {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })

      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })

      if (useTestData) {
        setAddressValues(testData.results[0].address_components)
      } else {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${googleApiKey}`
          )
          const data = await response.json()
          const addressComponents = data.results[0].address_components
          setAddressValues(addressComponents)
        } catch (err) {
          console.log(err)
        }
      }
      // await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=")
    }

    getAndSetAddressComponents()
  }, [useLocation])

  countries.registerLocale(enLocale)
  const countryObj = countries.getNames('en', { select: 'official' })
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    }
  })

  const setAddressValues = (addressComponents) => {
    const streetNumber = addressComponents.find((component) =>
      component.types.includes('street_number')
    ).long_name

    const streetName = addressComponents.find((component) =>
      component.types.includes('route')
    ).long_name

    const postalCode = addressComponents.find((component) =>
      component.types.includes('postal_code')
    ).long_name

    const city = addressComponents.find((component) =>
      component.types.includes('postal_town')
    ).long_name

    const country = addressComponents.find((component) =>
      component.types.includes('country')
    ).short_name

    setValue('addressLine1', `${streetName} ${streetNumber}`)
    setValue('postalCode', postalCode)
    setValue('city', city)
    setValue('country', country)
  }

  const handleUseLocationChange = (e) => {
    setUseLocation(e.target.checked)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
          <div className='RegHeader'>
            <BackArrow clickEvent={handleGoBack} />
            <h3>Add a new address</h3>
          </div>

          {/* <iframe
            loading='lazy'
            allowfullscreen
            referrerpolicy='no-referrer-when-downgrade'
            src='https://www.google.com/maps/embed/v1/place?key=&q=Space+Needle,Seattle+WA'
          ></iframe> */}

          <form
            onSubmit={handleSubmit((data) => {
              console.log(data)
            })}
            method='post'
          >
            {/* Title finns inte i API */}
            {/* <div className='input-field-group'>
              <label>TITLE</label>
              <input
                {...register("title", {
                  required: false,
                })}
                type='text'
                className='input-field'
                placeholder='Your address title'
              />
            </div> */}

            <div className='input-field-group'>
              <label>ADDRESS LINE 1</label>
              <input
                {...register('addressLine1', {
                  required: 'Please enter your address',
                })}
                type='text'
                className={`input-field ${errors.addressLine1 && 'error'}`}
                placeholder='Address line 1'
              />
            </div>
            {errors.addressLine1 && (
              <p className='ms-3 text-danger'>{errors.addressLine1.message}</p>
            )}

            <div className='input-field-group'>
              <label>ADDRESS LINE 2</label>
              <input
                {...register('addressLine2', { required: false })}
                type='text'
                className='input-field'
                placeholder='Address line 2 (optional)'
              />
            </div>

            <div className='input-field-group'>
              <label>POSTAL CODE</label>
              <input
                {...register('postalCode', {
                  required: 'Please fill out your postal code',
                })}
                type='text'
                className={`input-field ${errors.postalCode && 'error'}`}
                placeholder='Your postal code'
              />
            </div>
            {errors.postalCode && (
              <p className='ms-3 text-danger'>{errors.postalCode.message}</p>
            )}

            <div className='input-field-group'>
              <label>CITY</label>
              <input
                {...register('city', { required: 'Please enter your city' })}
                type='text'
                className={`input-field ${errors.city && 'error'}`}
                placeholder='Your city'
              />
            </div>
            {errors.city && (
              <p className='ms-3 text-danger'>{errors.city.message}</p>
            )}

            <select
              {...register('country', { required: 'Please choose a country' })}
            >
              {!!countryArr?.length &&
                countryArr.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
            </select>

            <div>
              <input type='checkbox' onChange={handleUseLocationChange} />
              <label>Use location</label>
            </div>

            {/* <button type='button' onClick={handleUseLocation}>
              Use location
            </button> */}

            <button className='BigBlackButton mt-5 mb-2' type='submit'>
              SAVE ADDRESS
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
