const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups_mongodb:Aki9618Misa@clusteru3taller02.qnmsi.mongodb.net/utups?retryWrites=true&w=majority',
    port: process.env.PORT || 3306,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files',
}

module.exports = config