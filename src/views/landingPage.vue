<script>
import LoginModal from '@/components/component-for-landing-page/LoginModal.vue'
import navBar_Header from '@/components/component-for-landing-page/navBar.vue'
import banner_Hero from '@/components/component-for-landing-page/BannerHero.vue'
import features_ from '@/components/component-for-landing-page/features.vue'
import about_ from '@/components/component-for-landing-page/about_.vue'
import footer_ from '@/components/component-for-landing-page/footer_.vue'
export default {
    components:{
        LoginModal,
        navBar_Header,
        banner_Hero,
        features_,
        about_,
        footer_
    }
}
</script>
<template>
    <div class="landing-container">
        <!-- Login modal -->
        <div class="login-">
            <LoginModal></LoginModal>
        </div>

        <navBar_Header></navBar_Header>
        
        <!-- hero section -->
        <section class="banner-homepage" id="hero">
            <banner_Hero></banner_Hero>
        </section>

        <!-- features section -->
        <section class="features-section" id="features">
            <features_></features_>
        </section>

        <!-- About section -->
        <section class="about-section" id="about">
            <about_></about_>
        </section>

        <!-- Footer -->

        <footer_></footer_>
        
    </div>
</template>
<style></style>