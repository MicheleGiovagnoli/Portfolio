<template>
    <div class="Home-page container">
        <section id="experience" class="mb-0">
            <h3 class="title">Esperienze.</h3>
            <div class="color-white ps-6 pb-4 position-relative mb-3 experience">
                <div class="d-flex align-items-end rounded overflow-hidden h-50px mb-3">
                    <div class="square_img d-flex p-1"><img src="../assets/channels4_profile.jpg" alt="" class="img-fluid">
                    </div>
                    <h3 class="font-14 color-white m-0">Boolean careers <a target="_blank"
                            href="https://boolean.careers/corso/full-stack-web-development"><i
                                class="fas fa-external-link-alt font-08"></i></a></h3>
                </div>
                <div class="bar"></div>
                <h3 class="font-14 color-white opacity-8 mb-0">Full Stack Web Developer Trainee</h3>
                <h4 class="opacity-8 fw-light font-12 mb-0">A tempo pieno</h4>
                <p class="opacity-5 fw-light mb-0">gennaio 2023 - giugno 2023</p>
                <p class="opacity-5 fw-light">Milano, Lombardia, Italia</p>
                <p class="fw-normal mb-0">
                    Corso full time di 700 ore volto all'acquisizione di
                    competenze tecniche di front-end e back-end.
                    <br>
                    Durante il percorso formativo ho avuto modo di fare pratica con
                    progetti in autonomia e in gruppo di famose web application come:
                    <br>

                    Whatsapp Web, Spotify Web, Netflix, DC comics e molte altre.
                    <br>
                    Le principali tecnologie che ho utilizzato sono:
                </p>
                <ul class="list-style">
                    <li>HTML</li>
                    <li>CSS (Sass)</li>
                    <li>Javascript (Vue, Axios, JQuery)</li>
                    <li>PHP</li>
                    <li>MySql</li>
                    <li>Laravel</li>
                </ul>
            </div>
        </section>
        <section id="skills">
            <h3 class="title">Skills.</h3>
            <ul class="container m-0">
                <li class="front-end ms-3">
                    <h3 class="font-14 color-white m-0">Front-end</h3>
                    <ul class="list-style">
                        <li>
                            <i class="fa-brands fa-html5 fa-beat fa-xl" style="color: #e44d25;"></i>
                            HTML5
                        </li>
                        <li>
                            <i class="fa-brands fa-css3-alt fa-beat fa-xl" style="color: #379ad6;"></i>
                            CSS3
                        </li>
                        <li>
                            <i class="fa-brands fa-square-js fa-beat fa-xl" style="color: #f0dc4e;"></i>
                            Javascript
                        </li>
                        <li>
                            <i class="fa-brands fa-vuejs fa-beat fa-xl" style="color: #3fb984;"></i>
                            Vue
                        </li>
                        <li>
                            <i class="fa-solid fa-code fa-beat fa-xl" style="color: #ffeaa7;"></i>
                            Axios
                        </li>
                        <li>
                            <i class="fa-solid fa-code fa-beat fa-xl" style="color: #ffeaa7;"></i>
                            JQuery
                        </li>
                        <li>
                            <i class="fa-brands fa-sass fa-beat fa-xl" style="color: #ce679a;"></i>
                            SASS
                        </li>
                        <li>
                            <i class="fa-brands fa-bootstrap fa-beat fa-xl" style="color: #5b4282;"></i>
                            Bootstrap
                        </li>
                    </ul>
                </li>
                <li class="back-end ms-3">
                    <h3 class="font-14 color-white m-0">Back-end</h3>
                    <ul class="list-style">
                        <li>
                            <i class="fa-brands fa-php fa-beat fa-xl" style="color: #787cb4;"></i>
                            PHP
                        </li>
                        <li>
                            <i class="fa-brands fa-laravel fa-beat fa-xl" style="color: #ef3b2d;"></i>
                            Laravel
                        </li>
                        <li>
                            <i class="fa-solid fa-database fa-beat fa-xl" style="color: #ffeaa7;"></i>
                            MySql
                        </li>
                        <li>
                            <i class="fa-solid fa-database fa-beat fa-xl" style="color: #ffeaa7;"></i>
                            PHPMyAdmin
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
    name: 'AppHome',
}

</script>
<style scoped lang="scss">
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;

.Home-page {
    min-height: 100vh;
    color: white;
}

.back-end,
.front-end {
    ul {
        height: 180px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        list-style-type: none;

        li {
            padding-top: 1rem;

            i {
                padding-right: 0.5rem;
            }
        }
    }
}

.title {
    padding-bottom: 2rem;
    padding-top: 2rem;
    color: $color-text-gold;
}

.bar {
    width: 2px;
    height: 80%;
    background-color: #fff;
    opacity: 0.8;
    position: absolute;
    left: calc(0.5rem + 17px);
    top: 60px;
    transform: translateX(-50%);
    border-radius: 10px;
}

.square_img {
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
}

.experience {
    padding-right: 5rem;
    padding-left: 5rem;
}
</style>