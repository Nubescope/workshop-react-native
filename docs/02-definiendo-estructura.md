### Definiendo la estructura básica de tabs y pantallas
Siempre es recomendable usar un sistema de versionado desde el principio de nuestro proyecto, en este caso usando `git`. Por eso lo primero que vamos a hacer es hacer un _commit_ inicial.

Vamos a empezar armando la estructura de nuestro proyecto que va a consistir en dos tabs (`Home` y `Favoritos`). Para eso vamos a borrar parte del código que nos provee Expo al crear el proyecto y dejar solamente esos dos tabs vacíos. En particular, borramos `SettingsScreen.js`, renombramos `LinksScreen.js` a `FavoritesScreen.js` (usando `git mv` !!), cambiamos los títulos de los tabs en `MainTabNavigator.js` y borramos el contenido de ambas _screens_.

Volvemos a hacer otro _commit_ para empezar nuestro proyecto de manera _más limpia_.
