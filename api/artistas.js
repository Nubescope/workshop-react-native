import artistas from './json-artistas'

export const obtenerArtistas = () => {
  // return fetch('URL').then(res => res.json())
  return Promise.resolve(artistas).then(response =>
    response.artists.items.map(artist => ({
      name: artist.name,
      key: artist.id,
      image: artist.images[1] && artist.images[1].url,
    }))
  )
}
