// consumiendo apis con JS

//1. pa onde vas ( Almaceno en una variable la URI del servicio )
let URI="https://api.spotify.com/v1/artists/7An4yvF7hDYDolN4m5zKBp/top-tracks?market=US"

//2. Que vas hacer? (metodo HTTP)
let metodo="GET"

//3. Tenes permisos? (Configurar peticiones)
let token="Bearer BQBEqXjqRs4wH6VrWVqMNhMsfHUmt3WDIx_bHazf7z_uE5-V79VlAvfKi3Ihj4toZ030aDmSI8Aqy4uNUjN9FKvd1FyhjnU5fxXU-iidXGGnW5QvP0U"

let peticion={
    method:metodo,
    headers:{
        "Autorization":token
    }
}

//4. Vaya pues traigame cositas (Promesa)
