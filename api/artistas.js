import artistas from './json-artistas'
const ARTISTS_URL =
  'https://raw.githubusercontent.com/underscopeio/workshop-react-native/master/api/json-artistas.json?token=ABk15HtAZTqW3x0AjDYQhUe183wkDMWZks5ZvQNkwA%3D%3D'

export const obtenerArtistas = () => {
  return fetch(ARTISTS_URL)
    .then(res => res.json())
    .then(response =>
      response.artists.items.map(artist => ({
        name: artist.name,
        key: artist.id,
        image: artist.images[1] && artist.images[1].url,
      }))
    )
}
