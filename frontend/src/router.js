//importo da vue-router le seguenti proprietà
import { createRouter, createWebHashHistory } from 'vue-router';
//importo i file che poi saranno le viste della mia single-page-application
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

//Gestione delle pagine e caricamento di queste quando viene chiesto l'url
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',         //url richiesto
            name: 'Home',      //nome della rotta
            component: AppHome //componente da caricare
        },
        {
            path: '/Contattami',
            name: 'Contact',
            component: AppContact
        },
        {
            path: '/Progetti',
            name: 'ProjectList',
            component: ProjectList
        },
        {
            path: '/Progetto/:slug',
            name: 'single-post',
            component: SingleProject
        }
    ]
});

export { router };