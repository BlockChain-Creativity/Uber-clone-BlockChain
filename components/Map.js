import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      style: "mapbox://styles/mapbox/streets-v11",
      // style: 'mapbox://styles/mapbox/light-v9',
      // center: [-99.29011, 39.39172],
      center: [75.87073,22.70267], // [ lat, long ]
      zoom: 13,
      // pitch: 45, // tild view of map
      bearing: 0, // map rotation
      antialias: true
    });

    
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 400,
      })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map;