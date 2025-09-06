exports.constants = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://harsh_mongodb:harsh_db@harshcluster.djztmwu.mongodb.net/contacts_app_backend?retryWrites=true&w=majority&appName=HarshCluster',
    CONTACTS_API_BASE: '/api/contacts',
    USERS_API_BASE: '/api/users',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || '1234567890',

    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,

    CREATED: 201,
    SUCCESS: 200,
    NO_CONTENT: 204
    
};