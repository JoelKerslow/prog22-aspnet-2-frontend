import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
import BackArrow from "../partials/generalPartials/BackArrow"

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm(/* Här ska defaultValues in när användaren ska uppdatera en adress { defaultValues: {  }}*/)

  const navigate = useNavigate()

  countries.registerLocale(enLocale)
  const countryObj = countries.getNames("en", { select: "official" })

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    }
  })

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
                {...register("addressLine1", {
                  required: "Please enter your address",
                })}
                type='text'
                className={`input-field ${errors.addressLine1 && "error"}`}
                placeholder='Address line 1'
              />
            </div>
            {errors.addressLine1 && (
              <p className='ms-3 text-danger'>{errors.addressLine1.message}</p>
            )}

            <div className='input-field-group'>
              <label>ADDRESS LINE 2</label>
              <input
                {...register("addressLine2", { required: false })}
                type='text'
                className='input-field'
                placeholder='Address line 2 (optional)'
              />
            </div>

            <div className='input-field-group'>
              <label>POSTAL CODE</label>
              <input
                {...register("postalCode", {
                  required: "Please fill out your postal code",
                })}
                type='text'
                className={`input-field ${errors.postalCode && "error"}`}
                placeholder='Your postal code'
              />
            </div>
            {errors.postalCode && (
              <p className='ms-3 text-danger'>{errors.postalCode.message}</p>
            )}

            <div className='input-field-group'>
              <label>CITY</label>
              <input
                {...register("city", { required: "Please enter your city" })}
                type='text'
                className={`input-field ${errors.city && "error"}`}
                placeholder='Your city'
              />
            </div>
            {errors.city && (
              <p className='ms-3 text-danger'>{errors.city.message}</p>
            )}

            <select
              {...register("country", { required: "Please choose a country" })}
            >
              {!!countryArr?.length &&
                countryArr.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
            </select>

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
