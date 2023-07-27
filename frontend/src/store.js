import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    loading: true,
});


//File da modificare per il funzionamenteo in un'altro server
//FRONT
    //store.js :
    //http://127.0.0.1:8000
        // baseUrl: 'https://michelegiovagnoli1.it'
        // baseUrl: 'https://back.michelegiovagnoli1.it'
    //vite.config.js
        // base: '/front/'
//BACK
    //.env
        //DB_DATABASE=databasename
        //DB_USERNAME=root
        //DB_PASSWORD=root
