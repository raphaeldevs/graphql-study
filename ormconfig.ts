import path from 'path'

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT
} = process.env

export default {
  type: 'postgres',
  host: DATABASE_HOST,
  username: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
  logging: true,
  entities: [path.resolve('src', 'models', '**.ts')],
  migrations: [path.resolve('src', 'database', 'migrations', '**.ts')],
  cli: {
    migrationsDir: path.resolve('src', 'database', 'migrations')
  }
}