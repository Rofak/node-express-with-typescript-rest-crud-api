import * as mysql from 'mysql'

export default   ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'laravel'
    })
}