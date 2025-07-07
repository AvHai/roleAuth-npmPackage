import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.resolve(process.cwd(), '.env') });


const config = {    
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/{your_database_name}', 
    port: process.env.PORT || 3000, 
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret', 
    jwtExpiration: process.env.JWT_EXPIRATION || '1d'
    };

export default config;