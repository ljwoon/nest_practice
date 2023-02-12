import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config:MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'roottoor',
    database: 'test',
    entities:[],
    synchronize:true
};

export default config;