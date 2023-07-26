<template>
    <!-- Vista singola del progetto -->\
    <div class="container">
        <div class="row ">
            <div class="col">
                <div v-if="project" class="card mb-3 text-white-50 bg-dark">
                    <!-- IMMAGINE/VIDEO -->
                    <!-- Video -->
                    <video src="../assets/video/Registrazione-deliveboo.mp4" v-if="project.slug == 'deliveboo'"
                        class="card-img-top object-fit-contain" autoplay controls muted></video>
                    <!-- Altrimenti se immagine nel database -->
                    <img v-else-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`"
                        class="card-img-top">
                    <!-- Altrimenti immagine rotta -->
                    <img v-else src="../assets/default_img.jpg" class="card-img-top" />
                    <!-- INFORMAZIONI -->
                    <div class="card-body">
                        <!-- titolo -->
                        <h5 class="card-title">{{ project.title }}</h5>
                        <!-- Descrizione -->
                        <p class="card-text">{{ project.content }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Bottone -->
                            <router-link :to="{ name: 'ProjectList' }" class="btn btn-sm btn-outline-secondary">
                                Torna indietro
                            </router-link>
                            <!-- Tecnologia -->
                            <small class="text-body-secondary">
                                <span class="badge text-secondary ms-1" v-for="technology in project.technologies">
                                    {{ technology?.name }}
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getProject() {
            const slug = this.$route.params.slug;

            console.log(slug);

            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
                .then(Response => {
                    if (Response.data.success == true) {
                        this.project = Response.data.project;
                        console.log(Response.data.project);
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }

                });
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getProject();
            }
        )
    },
    mounted() {
        this.getProject();
    },
}
</script>