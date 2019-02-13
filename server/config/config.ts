/**En este archivo se configuran las variables de entorno que servirán
 * para el despliegue en plataformas como heroku,..entre otras. Además es empleado
 * en entorno de desarrollo.
 */

//====================================================================
///          Configuración Puerto
//====================================================================

 process.env.PORT = process.env.PORT || 3000;


//====================================================================
///          Configuración Token
//====================================================================

  process.env.JWT_SECRET = process.env.JWT_SECRET || 'Esta-es-la-semilla-de-desarrollo';


  process.env.PORT = process.env.PORT || 3000;


 //====================================================================
 ///          Configuración CORS
 //====================================================================
 /*
  Solo Para Desarrollo
 */
 process.env.CORS_CONF = { origin: true, credentials: true }
