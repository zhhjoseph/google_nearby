declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_APP_GOOGLE_KEY: string;
        }
    }
}

export { }