import {Connection} from "mysql"



class Repository {
    query(con: Connection, sql: string): Promise<any[]>{
        return new Promise((resolve,reject)=>{
            con.query(sql,function (error,result) {
                if (error)
                    return reject(error)
                resolve(result)
            })
        })

    }
}
export default Repository