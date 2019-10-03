# CUAL CURSO

Sugerencias de cursadas en función de las materias aprobadas

## Primeros pasos

### Cloná el repo y entrá a su directorio

```bash
git clone https://github.com/Unahur/cual-curso.git
cd cual-curso
```

### Realizá el setup incial

```bash
sudo ./dev-setup.sh
```

### Levantá todos los servicios

```bash
sudo docker-compose up
```

### Bajá todos los servicios

```bash
sudo docker-compose down
```

## Servicios disponibles

### WEB API

Acceso web: <http://localhost:3001/>

Se trata de un servidor web `Express.js` con ORM `Sequelize` que se conecta a una base de datos `MariaDB`.

Dicho servidor será el soporte que usaremos para desarrollar la API que constituirá la parte **back end** de nuestra aplicación.

Esto quiere decir que el código que reside en este servidor se ejecuta en el propio servidor, y que las respuestas ofrecidas a sus clientes dependenderán tanto de las solicitudes recibidas como del contenido de la base de datos a la que se conecta.

El directorio raíz de este servidor es `web-api`, y contiene los archivos y las carpetas donde realizaremos las tareas destinadas a la materia `Estrategias de persistencia`.

### WEB CLIENT

Acceso web: <http://localhost:81/>

Se trata de un servidor web `NGINX` que sirve archivos de manera estática. Esto quiere decir que su única función es dejar a disposición del browser del usuario final los archivos solicitados, y que las respuestas ofrecidas a sus clientes dependerán exclusivamente del recurso solicitado.

Dicho servidor es el soporte que usaremos para desarrollar la primera iteración de la parte **front end** de nuestra aplicación.

El código que reside en este servidor se ejecuta en el browser, que constituirá por un lado el cliente de este servidor estático y por otro lado el cliente de nuestra API.

El directorio raíz de este servidor es `web-client`. En esta carpeta realizaremos tareas destinadas a la materia `Construcción de interfaces de usuario`.

### REACT

Acceso web: <http://localhost:3002/>

Servidor web que sirve la aplicación React que usaremos para desarrollar la segunda iteración de la parte **front end** de nuestra aplicación.

Al igual que `web-client`, el código que reside en este servidor se ejecuta en el browser, cumpliendo el rol de cliente de nuestra API.

El directorio raíz de este servidor es `react`. En esta carpeta realizaremos tareas destinadas a la materia `Construcción de interfaces de usuario`.

### DB

No tiene acceso web. Podés acceder a la DB utilizando el servicio Adminer o por línea de comandos.

Se trata un servidor dedicado a dar soporte a nuestro motor de bases de datos.

Las credenciales de conexión de nuestra base de datos son:

- Username: `root`
- Password: `mi-pass`
- Database: `cual_curso`

### ADMINER

Acceso web: <http://localhost:8081/>

Se trata de un servidor web dedicado a la administración de nuestro servicio de DB

## Manejo básico de estos servicios

### Podés levantar cada servicio por separado

DB:

```bash
sudo docker-compose up db
```

Web Api (levanta también la DB):

```bash
sudo docker-compose up web-api
```

Adminer (levanta también la DB):

```bash
sudo docker-compose up adminer
```

Web Client:

```bash
sudo docker-compose up web-client
```

### Podés ingresar a un servidor por línea de comandos

Con el servicio correpondiente corriendo, ingresá al servidor.

Web Api:

```bash
sudo docker-compose exec web-api bash
```

Web Client:

```bash
sudo docker-compose exec web-client bash
```

DB:

```bash
sudo docker-compose exec db bash
```

### Podés acceder a la DB por línea de comandos

Con el servicio DB corriendo, desde otra terminal, ingresá al servidor

```bash
sudo docker-compose exec db bash
```

Conectate a la DB

```bash
mysql -p --database=cual_curso
```

#### Algunas cosas que podés hacer desde la terminal

Pedir ayuda:

```sql
help
```

Averiguar las tablas que tiene la DB:

```sql
show tables;
```

Averiguar la estructura de una tabla:

```sql
desc examples;
```

Ejecutar una query:

```sql
SELECT 'soy el resultado de una query';
```

### Podés usar el cliente de Sequelize

Con la API corriendo, desde otra terminal, ingresá al servidor

```bash
sudo docker-compose exec web-api bash
```

Creá un alias para tu comodidad

```bash
alias sequelize=node_modules/.bin/sequelize
```

#### Algunos comandos que te pueden servir

Pedir ayuda:

```bash
sequelize --help
```

Correr las migraciones pendientes:

```bash
sequelize db:migrate
```

Generar un modelo:

```bash
sequelize model:generate
```

Generar una migración:

```bash
sequelize migration:generate
```
