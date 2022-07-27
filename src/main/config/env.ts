export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://admin:adm123@cluster0.exnwf.mongodb.net/?retryWrites=true&w=majority',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '14682'
}
