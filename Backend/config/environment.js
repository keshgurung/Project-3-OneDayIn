import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/onedayin'
export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'shhhh its a secret'

// export const port = 4000
// export const dbURI = 'mongodb://127.0.0.1:27017/onedayin'
// export const secret = 'Ind1@n@J0ne5'
