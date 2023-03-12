import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./modules/tenants/entities/User.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "scdb",
    password: "response",
    database: "scdb",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
