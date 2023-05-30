import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthorizationContext } from '../../contexts/AuthorizationContext'
import { UserContext } from '../../contexts/UserContext'
import { createOrUpdateAddressAsync } from '../../services/AddressService'
import IconPicker from '../partials/IconPicker'
import MapFrame from '../partials/MapFrame'
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import Header from '../partials/Header'

const googleApiKey = 'AIzaSyDNzG8GKrpZChIenaMnf1v-7bl6IrN2VHk'
const useTestData = false // !!! Sätt som TRUE för att inte spamma google api vid test !!!
// #region TestData
const testData = {
  plus_code: {
    compound_code: '82WF+698 Solna, Sweden',
    global_code: '9FFW82WF+698',
  },
  results: [
    {
      address_components: [
        {
          long_name: '3A',
          short_name: '3A',
          types: ['street_number'],
        },
        {
          long_name: 'Tomtebodav\u00e4gen',
          short_name: 'Tomtebodav\u00e4gen',
          types: ['route'],
        },
        {
          long_name: 'Hagalund',
          short_name: 'Hagalund',
          types: ['political', 'sublocality', 'sublocality_level_1'],
        },
        {
          long_name: 'Solna',
          short_name: 'Solna',
          types: ['postal_town'],
        },
        {
          long_name: 'Stockholms l\u00e4n',
          short_name: 'Stockholms l\u00e4n',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'Sweden',
          short_name: 'SE',
          types: ['country', 'political'],
        },
        {
          long_name: '171 65',
          short_name: '171 65',
          types: ['postal_code'],
        },
      ],
      formatted_address: 'Tomtebodav\u00e4gen 3A, 171 65 Solna, Sweden',
      geometry: {
        location: {
          lat: 59.3454376,
          lng: 18.0237661,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 59.3467865802915,
            lng: 18.0251150802915,
          },
          southwest: {
            lat: 59.34408861970849,
            lng: 18.0224171197085,
          },
        },
      },
      place_id: 'ChIJ7c5d15ydX0YR65_M7Bj6JeI',
      plus_code: {
        compound_code: '82WF+5G Solna, Sweden',
        global_code: '9FFW82WF+5G',
      },
      types: ['establishment', 'parking', 'point_of_interest'],
    },
  ],
}
// #endregion

const AddressForm = () => {
  const { useAuthorization } = useContext(AuthorizationContext)
  useAuthorization()
  const { currentUser } = useContext(UserContext)

  const navLocation = useLocation()
  const recievedAddress = navLocation.state && navLocation.state.userAddress

  const navigate = useNavigate()

  const [shouldUseLocation, setShouldUseLocation] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [location, setLocation] = useState({})
  const [addressComponents, setAddressComponents] = useState()
  const [serverError, setServerError] = useState('')
  const [locationError, setLocationError] = useState('')
  const [loading, setLoading] = useState('')
  const [selectedIcon, setSelectedIcon] = useState(recievedAddress?.icon || 'fa-location-dot')

  const initialMapCenter = {
    lat: 59.3454695384986,
    lng: 18.02331341412893,
  }

  countries.registerLocale(enLocale)
  const countryObj = countries.getNames('en', { select: 'official' })
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    }
  })

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: recievedAddress
      ? {
          title: recievedAddress.title || '',
          addressline1: recievedAddress.addressline1 || '',
          addressline2: recievedAddress.addressline2 || '',
          postalCode: recievedAddress.postalCode || undefined,
          city: recievedAddress.city || '',
          country: recievedAddress.country || '',
        }
      : {
          title: '',
          addressline1: '',
          addressline2: '',
          postalCode: undefined,
          city: '',
          country: '',
        },
  });

  useEffect(() => {
    if (!addressComponents) return
    try {
      const title = addressComponents.find((component) =>
        component.types.includes('sublocality')
      ).long_name

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

      setValue('title', title)
      setValue('addressline1', `${streetName} ${streetNumber}`)
      setValue('postalCode', parseInt(postalCode.replace(/\s/g, ''), 10))
      setValue('city', city)
      setValue('country', country)
      clearErrors()
    } catch {
      setLocationError('Something went wrong fetching your location')
    }
  }, [addressComponents, shouldUseLocation, setValue, clearErrors])

  useEffect(() => {
    if (!shouldUseLocation) {
      reset()
      return
    }

    if (useTestData) {
      setAddressComponents(testData.results[0].address_components)
    } else {
      if (addressComponents || Object.keys(location).length === 0) return

      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${googleApiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAddressComponents(data.results[0].address_components)
        })
        .catch((err) => {
          console.error(err)
          setLocationError('Something went wrong fetching your location')
        })
    }
  }, [location, shouldUseLocation, addressComponents, reset])

  const handleUseLocationChange = (e) => {
    setLocationError(null)
    setShouldUseLocation(e.target.checked)

    if (Object.keys(location).length === 0) {
      getAndSetLocation()
    }
  }

  const getAndSetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser')
      return
    }

    setLoading('Fetching your location...')

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
      setLoading('')
    })
  }

  const onSubmit = async (data) => {
    if (isFormSubmitted || serverError) return

    const addressData = {
      ...data,
      icon: selectedIcon,
      customerProfileId: currentUser.id,
    }

    if (recievedAddress !== null) {
      addressData.id = recievedAddress.id
    }

    if (await createOrUpdateAddressAsync(addressData)) {
      setIsFormSubmitted(true)
      setServerError('')
    } else {
      setIsFormSubmitted(false)
      setServerError('Something went wrong, please try again later')
    }
  }

  return (
    <>
      <Header
        headerContent={
          recievedAddress !== null
            ? `Update ${recievedAddress.title} address`
            : 'Add a new address'
        }
        useGoBackButton={true}
      />
      <MapFrame
        center={
          Object.keys(location).length !== 0 ? location : initialMapCenter
        }
      />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-8 col-md-6 col-lg-4 address-form-container'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method='post'
              className='address-form'
            >
              <div className={`input-field-group ${errors.title && 'error'}`}>
                <label>TITLE</label>
                <input
                  {...register('title', {
                    required: 'Title is required',
                    minLength: {
                      value: 2,
                      message: 'Title must be at least 2 characters long',
                    },
                  })}
                  type='text'
                  disabled={isFormSubmitted || serverError}
                  className='input-field'
                  placeholder='Address title (e.g. Home)'
                />
              </div>
              {errors.title && (
                <p className='error-text'>{errors.title.message}</p>
              )}

              <div
                className={`input-field-group ${
                  errors.addressline1 && 'error'
                }`}
              >
                <label>ADDRESS LINE 1</label>
                <input
                  {...register('addressline1', {
                    required: 'Address line 1 is required',
                    minLength: {
                      value: 2,
                      message: 'Address must be at least 2 characters long',
                    },
                  })}
                  type='text'
                  disabled={isFormSubmitted || serverError}
                  className={`input-field`}
                  placeholder='Address line 1'
                />
              </div>
              {errors.addressline1 && (
                <p className='error-text'>{errors.addressline1.message}</p>
              )}

              <div className='input-field-group'>
                <label>ADDRESS LINE 2</label>
                <input
                  {...register('addressline2', {
                    required: false,
                    minLength: {
                      value: 2,
                      message: 'Address must be at least 2 characters long',
                    },
                  })}
                  type='text'
                  disabled={isFormSubmitted || serverError}
                  className='input-field'
                  placeholder='Address line 2 (optional)'
                />
              </div>
              {errors.addressline2 && (
                <p className='error-text'>{errors.addressline2.message}</p>
              )}

              <div
                className={`input-field-group ${errors.postalCode && 'error'}`}
              >
                <label>POSTAL CODE</label>
                <input
                  {...register('postalCode', {
                    required: 'Postal code is required',
                    pattern: {
                      value: /^\d{5}$/,
                      message: 'Postal code must be 5 digits',
                    },
                  })}
                  type='text'
                  disabled={isFormSubmitted || serverError}
                  className={`input-field ${errors.postalCode && 'error'}`}
                  placeholder='Your postal code'
                  maxLength={5}
                />
              </div>
              {errors.postalCode && (
                <p className='error-text'>{errors.postalCode.message}</p>
              )}

              <div className={`input-field-group ${errors.city && 'error'}`}>
                <label>CITY</label>
                <input
                  {...register('city', { required: 'City is required' })}
                  type='text'
                  disabled={isFormSubmitted || serverError}
                  className={`input-field ${errors.city && 'error'}`}
                  placeholder='Your city'
                />
              </div>
              {errors.city && (
                <p className='error-text'>{errors.city.message}</p>
              )}

              <div className={`input-field-group ${errors.country && 'error'}`}>
                <label>COUNTRY</label>
                <select
                  disabled={isFormSubmitted || serverError}
                  className='input-field form-select'
                  {...register('country', { required: 'Country is required' })}
                >
                  {!!countryArr?.length &&
                    countryArr.map(({ label, value }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                </select>
              </div>
              {errors.country && (
                <p className='error-text'>{errors.country.message}</p>
              )}

              <div className='form-check'>
                <input
                  type='checkbox'
                  disabled={isFormSubmitted || serverError}
                  onChange={handleUseLocationChange}
                  className='form-check-input'
                />
                <label className='form-check-label'>Use current location</label>

                {loading && shouldUseLocation && <p>{loading}</p>}
              </div>

              {!isFormSubmitted && locationError && shouldUseLocation && (
                <div className='alert alert-danger text-center' role='alert'>
                  {locationError}
                </div>
              )}

              <hr />

              <div className='icon-picker-container'>
                <label>Choose an icon</label>
                <IconPicker
                  icons={['fa-home', 'fa-briefcase', 'fa-location-dot']}
                  selectedIcon={selectedIcon}
                  onChange={(icon) => setSelectedIcon(icon)}
                  disabled={isFormSubmitted || serverError}
                />
              </div>

              {isFormSubmitted && (
                <div className='alert alert-success text-center' role='alert'>
                  Address saved successfully
                </div>
              )}

              {!isFormSubmitted && serverError && (
                <div className='alert alert-danger text-center' role='alert'>
                  {serverError}
                </div>
              )}

              {!isFormSubmitted && !serverError ? (
                <button className='BigBlackButton mt-3 mb-2' type='submit'>
                  SAVE ADDRESS
                </button>
              ) : (
                <button
                  className='BigBlackButton mt-3 mb-2'
                  onClick={() => navigate('/Profile')}
                >
                  GO BACK
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressForm
