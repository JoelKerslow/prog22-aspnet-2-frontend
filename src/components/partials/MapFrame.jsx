const MapFrame = ({ center }) => {
  const formattedCenter = `${center.lat}, ${center.lng}`
  return (
    <iframe
      className='map-frame'
      referrerPolicy='no-referrer-when-downgrade'
      src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_GOOGLE_API_KEY}&center=${formattedCenter}&zoom=15`}
      title='map'
    ></iframe>
  )
}

export default MapFrame
