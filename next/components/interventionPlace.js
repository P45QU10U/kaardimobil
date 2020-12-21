import React, { useEffect } from 'react'
import { point } from '@turf/helpers'
import distance from '@turf/distance'

// const apiAdresseGouvFr = 'https://api-adresse.data.gouv.fr/search/'
const apiAdresseGouvFr = 'https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&lat=48.789&lon=2.789'

export default function InterventionPlace() {
  // Exemple import lazy
  // const importGlobe = () => import('../globe')
  // const Globe = React.lazy(importGlobe)

  const nameLabel = 'interventionaddress'
  const textLabel = "Adresse d'intervention souhaitée"

  async function searchAddress(data) {
    console.log(data)
    const res = await fetch(apiAdresseGouvFr)
  }

  useEffect(() => {
    const from = point([49.3782, 0.7329])
    const to = point([49.3746, 0.7311])
    const options = { units: 'kilometers' }

    const distanct = distance(from, to, options)
    // addToMap
    // const addToMap = [from, to]
    // from.properties.distance = distance
    // to.properties.distance = distance
  })

  return (
    <>
      <label htmlFor={nameLabel}>
        {' '}
        {textLabel}
        <input type="text" onChange={searchAddress} id={nameLabel} name={nameLabel} />
      </label>
    </>
  )
}
