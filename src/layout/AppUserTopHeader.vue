<script>
import appLogo from '../components/Logo.vue'
export default {
    components:{
        appLogo
    },
}
</script>
<template>
    <div class="top-header">
        <nav class="navbar navbar-expand">
            <div class="navbar-nav-container">
                <div class="navbar-brand">
                    <appLogo/>
                </div>
                <!-- <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="wrap-input100">
                    <div class="wrap-container">
                        <input v-model="search" type="text" class="input100" placeholder="Chercher un mot clé">
                        <span class="btn-show-search">
                            <font-awesome-icon icon="fa-solid fa-search"/>
                        </span>
                    </div>
                </div>
                <div class="profile-container">
                    <span class="username">johndoe</span>
                    <div class="profile-pic">
                        <img src="../assets/img/4200_6_04.png">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<style src="../assets/css/userTopbar.css" scoped></style>