import mysql from 'promise-mysql';
import { MysqlError } from 'mysql';
import keys from './keys';

const database = mysql.createPool(keys.database);

database.getConnection()
  .then(connection => {

    database.releaseConnection(connection);
    console.log('DB is connected');
    http://localhost:3000/clientes
  })
  .catch( (err:MysqlError) => {

    console.log( 'Error al Conectar DB\n', {

      ok:false,
      err: err.fatal,
      errCode: err.code,
      errSqlState: err.sqlState,
      errSqlMessage: err.sqlMessage

    })

  })


export default database;
