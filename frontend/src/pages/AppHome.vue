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
        <h3>Skills.</h3>

    </div>
</template>
<script>
export default {
    name: 'AppHome',
}

</script>
<style scoped lang="scss">
.Home-page {
    min-height: 100vh;
    color: white;
}

.title {
    padding-bottom: 2rem;
    padding-top: 5rem;
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