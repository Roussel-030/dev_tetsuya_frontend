<script>
export default {
    components:{

    }
}
</script>

<template>
    <div class="global-usersidebar">
        <nav class="sidebar">
            <ul class="nav nav-sidebar" id="accordion" role="tablist">
                <li class="nav-item current">
                    <a href="" class=""><font-awesome-icon icon="fa-solid fa-home"  class="m-r-5"/> Acceuil</a>    
                </li>
                <li class="nav-item">
                    <a class="parent collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-2" aria-expanded="false">
                        <font-awesome-icon icon="fa-solid fa-comment"  class="m-r-5"/>
                        Questions                          
                    </a>
                    <ul class="collapse" id="collapse-2">
                        <li class="nav-item-list">
                            <router-link :to="{name: 'newquestionlink'}" class="nav-sidebar-link m-l-25">Nouvelle question</router-link>
                        </li>
                        <li class="nav-item-list">
                            <router-link :to="{name: 'questionslink'}" class="nav-sidebar-link m-l-25">Les dernières questions</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="" class=""><font-awesome-icon icon="fa-solid fa-thumbtack"  class="m-r-10"/> Thématiques partagées</a>    
                </li>
                <li class="nav-item myaccount">
                    <a href=""><font-awesome-icon icon="fa-solid fa-user" class="fa m-r-5"/> Mon compte</a>    
                </li> 
            </ul>
        </nav>
    </div>
</template>
<style src="../assets/css/usersidebar.css" scoped></style>