<template>
    <!-- Elenco dei progetti -->
    <div class="card shadow-sm text-white-50 bg-dark">
        <!-- Immagine nel DB-->
        <img class="bd-placeholder-img card-img-top" width="100%" height="225"
            :src="`${this.store.baseUrl}/storage/${project.cover_image}`" role="img" v-if="project.cover_image">
        <!-- Altrimenti immagine di default -->
        <img v-else src="../assets/default_img.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225"
            role="img" />
        <!-- Informazioni -->
        <div class="card-body">
            <!-- Titolo -->
            <p class="card-text">{{ project.title }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <!-- bottoni  -->
                <div class="btn-group">
                    <router-link :to="{ name: 'single-post', params: { slug: project.slug } }"
                        class="btn btn-sm btn-outline-secondary">
                        Apri
                    </router-link>
                </div>
                <!-- tecnologie -->
                <small class="text-body-secondary">
                    <span class="badge text-secondary ms-1" v-for="technology in project.technologies">
                        {{ technology?.name }}
                    </span>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppProjectCardCard',
    props: ['project'],
    data() {
        return {
            contentMaxLength: 200,
            store
        }
    },
    methods: {
        truncateText(text) {
            if (text && text.length > this.contentMaxLength) {
                return text.substr(0, this.contentMaxLength) + '...';
            }
            return text;
        }
    }
};
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;
</style>