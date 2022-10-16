# BSALE-BACKEND

## Instrucciones

1. Descargar o clonar el repositorio
2. Instalar las dependencias de nodejs del package.json " npm -i "
3. Llenar las variables del entorno (.env) con sus respectivos valores
4. crear un directorio llamado client cuál contendra el front-end o vista de la aplicación (no es obligatorio)

## API REST

Obtener lista de productos

- /GET - /api/products

```
[
    {
        "id":5,
        "name":"ENERGETICA MR BIG",        "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jp",
        "price":1490,
        "discount":20,
        "category":1
    }
]
```

Obtener producto por nombre

- /GET - /api/products/nameProduct - example: /api/products/ENERGETICA_MR_BIG

```
[
    {
        "id":5,
        "name":"ENERGETICA MR BIG",        "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jp",
        "price":1490,
        "discount":20,
        "category":1
    }
]
```

Obtener lista de categorías

- /GET - /api/category

```
[
    {
        "id":1,
        "name":"bebida energetica"
    },
    {
        "id":2,
        "name":"pisco"
    }
]
```

Obtener categoria por nombre

- /GET - /api/category/nameCategory - example /api/category/bebida_energetica

```
[
    {
        "id":1,
        "name":"bebida energetica"
    }
]
```

## Client Front-End (opcional)

En caso de crear la carpeta client instale o clone el siguiente repositorio [bsale-frontend]("https://github.com/FRFWEB/bsale-test-frontend") este repositorio esta diseñado para bsale-backend

### RUTAS

- "/" - pagina de index
- "/category/" - búsqueda por categoría
- "/search/" - búsqueda de productos
- "/whishlist" - productos favoritos
