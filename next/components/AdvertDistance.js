import { point } from '@turf/helpers'
import distance from '@turf/distance'

function AdvertDistance({ center, distanceMax, userPosition = null }) {

  const [lngUsr, latUser] = userPosition ?? []

    const from = point([center.lat, center.lng])
    const to = point([latUser, lngUsr])
    const options = { units: 'kilometers' }
    // console.log(center, userPosition, distance)
    const distanceUserToCenter = distance(from, to, options)

  return (
    <div role="alert">
      {distanceUserToCenter > distanceMax ? (
        <span>Quel dommage, nous sommes un peu trop éloignés. ({distanceUserToCenter}kms)</span>
      ) : (
        <span>Merveilleux. Nous ne sommes qu'à {distanceUserToCenter}km l'un de l'autre. </span>
      )}
    </div>
  )

}

export { AdvertDistance }
