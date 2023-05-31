const MapFrame = ({ center }) => {
  const formattedCenter = `${center.lat}, ${center.lng}`
  const googleApiKey = 'AIzaSyDNzG8GKrpZChIenaMnf1v-7bl6IrN2VHk'
  
  return (
    <iframe
      className='map-frame'
      referrerPolicy='no-referrer-when-downgrade'
      src={`https://www.google.com/maps/embed/v1/view?key=${googleApiKey}&center=${formattedCenter}&zoom=15`}
      title='map'
    ></iframe>
  )
}

export default MapFrame
