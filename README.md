# Rediseño de la Plataforma Dumax

Este repositorio contiene el código y los archivos relacionados con el rediseño de la plataforma web de Dumax, específicamente el "Informe de Geocercas".

## Descripción del Proyecto

Dumax ofrece a sus clientes la posibilidad de monitorear en tiempo real las unidades vehiculares a lo largo del año. El objetivo de este proyecto es mejorar el diseño y la experiencia del usuario en la plataforma web, comenzando con el informe de geocercas.

## Imagen base para crear el rediseño

![Informe de Geocercas](https://firebasestorage.googleapis.com/v0/b/dumax-eld.appspot.com/o/Dashboard%20-%20Reporte%20Geocercas%402x.jpg?alt=media&token=67f66e66-8aad-424e-a4b5-ff86a7517b15)

## Captura de pantalla del resultado final 

![image](https://github.com/SofiDubrowsky/dumax-challenge/assets/94505828/4834778a-94e5-4527-8bfd-4aea919dd7f9)

## Instrucciones de Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/SofiDubrowsky/dumax-challenge.git)https://github.com/SofiDubrowsky/dumax-challenge.git

2. Navega al directorio del proyecto:

   ```bash
   cd dumax-challenge

3. Instala las dependencias utilizando npm:

   ```bash
   npm install

4. Inicia el proyecto:

   ```bash
   npm start

5. Abre tu navegador web y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Documentación de la API

Puedes encontrar la documentación de la API utilizada en este proyecto en este [enlace](https://documenter.getpostman.com/view/16647194/2s9YJXYQDh)https://documenter.getpostman.com/view/16647194/2s9YJXYQDh.

## Criterios de Aceptación

* El menú lateral izquierdo contiene el listado de todos los informes posibles, como se muestra en la imagen base.
* Los colores, tipografías, imágenes y espacios se han modificado para asemejar la plataforma actual al nuevo diseño.
* El informe de geocercas permite al usuario seleccionar geocercas, unidades y rangos de fechas para generar un reporte.
* Al hacer clic en "Generar Reporte", se realiza una solicitud GET al endpoint "Reporte de Geocercas" que devuelve eventos dentro de la geocerca elegida.
* Los eventos se muestran en una tabla ordenada por fecha de entrada de la unidad.
* Se proporciona un formulario para crear una nueva geocerca mediante una solicitud POST al endpoint "Crear Geocerca".



