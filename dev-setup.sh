#!/bin/bash

echo '-------------------------------------------------------'
echo 'Levantando el servidor de mysql...'
echo '-------------------------------------------------------'
docker-compose up -d db
echo '-------------------------------------------------------'
echo 'Esperando a que el servicio de mysql inicie...'
echo '-------------------------------------------------------'
sek=120
while [ $sek -ge 1 ]
do
   echo -ne "Faltan $sek segundos... \r"
   sleep 1
   sek=$[$sek-1]
done
echo
echo '-------------------------------------------------------'
echo 'Creando la base de datos...'
echo '-------------------------------------------------------'
echo 'Cuando te sea solicitado el password, ingresá: mi-pass'
docker-compose exec db mysql -p -e "CREATE DATABASE IF NOT EXISTS cual_curso;"
echo '-------------------------------------------------------'
echo 'Instalando dependencias de la API...'
echo '-------------------------------------------------------'
docker-compose run --rm web-api npm install
echo '-------------------------------------------------------'
echo 'Corriendo las migraciones...'
echo '-------------------------------------------------------'
docker-compose run --rm web-api node_modules/.bin/sequelize db:migrate
echo '-------------------------------------------------------'
echo 'Instalando dependencias de la SPA...'
echo '-------------------------------------------------------'
docker-compose run --rm web-spa npm install
echo '-------------------------------------------------------'
echo 'Apagando los servidores...'
echo '-------------------------------------------------------'
docker-compose down
