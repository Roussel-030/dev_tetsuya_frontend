<script>
import appLogo from '../components/Logo.vue'
export default {
    components:{
        appLogo
    }
}
</script>

<template>
    <div class="global-sidebar">
        <div class="navbar-brand">
            <appLogo/>
        </div>
        <nav class="sidebar">
            <ul class="nav nav-sidebar" id="accordion" role="tablist">
                <li class="nav-item current">
                    <a href="" class="">Aperçu</a>    
                </li>
                <!-- <li class="nav-item">
                    <a class="parent collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false">
                        <span><i class="fa fa-angle-right"></i></span>
                        Ouvrage                          
                    </a>
                    <ul class="collapse" id="collapse-2">
                        <li class="nav-item-list">
                            <a href="" class="nav-sidebar-link"><span><i class="fa fa-book"></i></span> Ajouter un nouveau ouvrage</a>
                        </li>
                        <li class="nav-item-list">
                            <a href="" class="nav-sidebar-link"><span><i class="fa fa-list-alt"></i></span> Liste des ouvrages</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="parent collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-3" aria-expanded="false">
                        <span><i class="fa fa-angle-right"></i></span>
                        Lecteur                          
                    </a>
                    <ul class="collapse " id="collapse-3">
                        <li class="nav-item-list">
                            <a href="" class="nav-sidebar-link"><span><i class="fa fa-user-plus"></i></span> Ajouter un nouveau lecteur</a>
                        </li>
                        <li class="nav-item-list">
                            <a href="" class="nav-sidebar-link"><span><i class="fa fa-users"></i></span> Liste des lecteurs</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="" class=""><span><i class="fa fa-user"></i></span> Mon compte</a>    
                </li>
                <li class="nav-item">
                    <a href="" class=""><span><i class="fa fa-chart-area"></i></span> Statistiques</a>    
                </li> -->
            </ul>
        </nav>
    </div>
</template>
<style src="../assets/css/sideBar.css" scoped></style>