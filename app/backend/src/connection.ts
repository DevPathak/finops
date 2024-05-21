import { Client } from 'pg'

export const client = new Client({
    host: '35.154.149.158',
    port: 5455,
    database: 'saarathi',
    user: 'devesh_pathak',
    password: 'devesh@1234'
})
