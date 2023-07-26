<template>
    <header>
        <div class="my-header container">
            <div class="my-left">
                <h1 class="my-logo">Michele</h1>
            </div>
            <div class="my-center">
                <div class="my-button">
                    <router-link to="/">
                        <div class="my-link">
                            <i class="fa-solid fa-house"></i>
                            <span>Home</span>
                        </div>
                    </router-link>
                    <router-link to="/Progetti">
                        <div class="my-link">
                            <i class="fa-solid fa-laptop-file"></i>
                            <span>Progetti</span>
                        </div>
                    </router-link>
                    <router-link to="/Contattami">
                        <div class="my-link">
                            <i class="fa-solid fa-envelope-circle-check"></i>
                            <span>Contattami</span>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="my-right">
                <a href="https://github.com/MicheleGiovagnoli" class="links">
                    <i class="fa-brands fa-square-github fa-2xl links "></i>
                </a>
                <a href="https://www.linkedin.com/in/michele-giovagnoli-7484b227a/" class="links">
                    <i class="fa-brands fa-linkedin fa-2xl links"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as*;
@use '../styles/partials/mixins' as*;


header {
    background-color: $color-header;
    // border-bottom: solid 1px $color-secondary;
    box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.092);
    height: 60px;

    .my-header {
        background-color: $color-header;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;

        .my-left {
            width: calc(100% /3);
            height: 100%;

            .my-logo {
                color: $color-text-gold;
                font-size: 24px;
                font-weight: 700;
                padding-top: 15px;
            }
        }

        .my-center {
            width: calc(100% /3);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .my-button {
                display: flex;
                @include link-hover;

                a {
                    margin: 0 5px;
                    color: rgba(255, 255, 255, 0.462);
                    transition: all 0.5s ease;

                    &:hover,
                    :active,
                    ::before {
                        color: white;
                    }

                    .my-link {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;

                        i {
                            margin-right: 5px;
                        }
                    }
                }

            }
        }

        .my-right {
            width: calc(100% /3);
            height: 100%;
            display: flex;
            justify-content: end;
            align-items: center;

            a {
                padding: 3px;

                .links {
                    font-size: 30px;
                    transition: all 0.5s ease;
                    color: $color-text-primary;

                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
}

//RESPONSIVE
@media screen and (max-width: 768px) {}

@media screen and (max-width: 676px) {

    .my-center {
        .my-button {

            a {

                .my-link {
                    i {
                        margin: 0 0 3px 3px;
                    }

                    span {
                        display: none;
                    }
                }
            }

        }
    }

    .my-right {
        justify-content: center;
    }
}
</style>