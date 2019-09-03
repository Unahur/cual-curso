# CUAL CURSO

Sugerencias de cursadas en función de las materias aprobadas

## Cloná el repo y entrá a su directorio

```bash
git clone https://github.com/Unahur/cual-curso.git
cd cual-curso
```

## Levantá los servidores

Para eso, corré:

```bash
sudo docker-compose up
```

## Estructura de directorios

### WEB API

Se trata de un servidor web `Express.js` con ORM `Sequelize` que se conecta a una base de datos `MariaDB`.

Dicho servidor será el soporte que usaremos para desarrollar la API que constituirá la parte **back end** de nuestra aplicación.

Esto quiere decir que el código que reside en este servidor se ejecuta en el propio servidor, y que las respuestas ofrecidas a sus clientes dependenderán tanto de las solicitudes recibidas como del contenido de la base de datos a la que se conecta.

El directorio raíz de este servidor es `web-api`, y contiene los archivos y las carpetas donde realizaremos las tareas destinadas a la materia `Estrategias de persistencia`.

### WEB CLIENT

Se trata de un servidor web `NGINX` que sirve archivos de manera estática. Esto quiere decir que su única función es dejar a disposición del browser del usuario final los archivos solicitados, y que las respuestas ofrecidas a sus clientes dependerán exclusivamente del recurso solicitado por sus clientes.

El código que reside en este servidor se ejecuta en el browser, que constituirá por un lado el cliente de este servidor estático y por otro lado el cliente de nuestra API.

El directorio raíz de este servidor es `web-client`, y contiene los archivos y las carpetas donde realizaremos las tareas destinadas a la materia `Construcción de interfaces de usuario`.

## Acceso al cliente web

Local: <http://localhost:8083>

Público: <http://localhost:4043>

## Acceso a la API

Local: <http://localhost:8084>

Público: <http://localhost:4044>

## Probá la API

Obtené la URL pública de tu API acá: <http://localhost:4044>

Ingresala acá: <https://reqbin.com/>

### Creá un nuevo ejemplo

POST `<mi url pública>/examples`

- content: `{"name": "<un nombre que me guste>"}`

### Listá todos los ejemplos existentes

GET `<mi url pública>/examples` -> lista todos los ejemplos

### Obtené la información de un ejemplo específdico

GET `<mi url pública>/examples/<id de mi ejemplo>`

### Actualizá un ejemplo específico

PUT `<mi url pública>/examples/<id de mi ejemplo>`

- content: `{"name": "<otro nombre que te guste>"}`

### Eliminá un ejemplo específico

DELETE `<mi url pública>/examples/<id de mi ejemplo>`

## Acceso a la base de datos

- Username: `root`
- Password: `example`
- Database: `cual_curso`

Local: <http://localhost:8086>

Público: <http://localhost:4046>

Por línea de comandos

```bash
sudo docker-compose run --rm db-cli mysql --host=db --user=root --password=example --database=cual_curso
```

## Listá los comandos de Sequelize disponibles

```bash
sudo docker-compose run --rm web-api node_modules/.bin/sequelize
```

## Bajá los servidores

En la solapa donde están corriendo los servidores

Presioná `Ctrl + c`

Esperá a que terminen de bajar los servicios y luego corré

```bash
sudo docker-compose down
```
