<template>
    <!-- Sezione dei progetti -->
    <div class="bg-dark">
        <section class="py-5 text-center container">
            <div class="row">
                <!-- Jumbotron  -->
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light text-light">I miei progetti</h1>
                    <p class="lead text-white-50">Per vedere la parte di BackEnd e database clicca qui sotto.
                    </p>
                    <p>
                        <a href="#" class="btn btn-secondary my-2">(Work in progress)</a>
                    </p>
                </div>
            </div>
        </section>
        <!-- Progetti -->
        <div class="album py-5 my-bg" v-if="this.store.loading == false">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="project in projects">
                        <AppProjectCard :project="project"></AppProjectCard>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';

export default {
    name: 'ProjectList',
    data() {
        return {
            projects: [],
            store,
        }
    },
    components: {
        AppProjectCard
    },
    methods: {
        getProjects(gotoPage) {
            console.log('Ciao mondo!');
            axios.get(`${this.store.baseUrl}/api/projects`,
            )
                .then(Response => {
                    console.log(Response);
                    this.projects = Response.data.results;
                    this.store.loading = false;
                    console.log(this.projects);
                });
        },

    },
    mounted() {
        this.getProjects(1);
    }
}

</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins';

.my-bg {
    background-image: url(../assets/background/endless-constellation.svg);
    background-attachment: fixed;
}
</style>