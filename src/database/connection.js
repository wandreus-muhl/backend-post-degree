import mongoose from 'mongoose'

class MongoConnection {
  constructor() {
    this.options = {
      host: process.env.BD_HOST || 'localhost',
      name: process.env.DB_NAME || 'test-database',
      port: process.env.DB_PORT || 27017
    }
    this.connect()
  }
  
  connect = () => mongoose.connect(`mongodb://${this.options.host}:${this.options.port}/${this.options.name}`, () => console.log('Synced database!'))
}

export default new MongoConnection()