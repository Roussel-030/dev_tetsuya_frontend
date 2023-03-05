<script>
import axios from 'axios'
export default {
    name: "newQuestion",
    data(){
        return{
            title:'',
            question:'',
            ue:''
        }
    },
    methods:{
        onSubmitQuestionForm: function(){
            const user = JSON.parse(localStorage.getItem('user'));
            if(user.id){
                axios.post("http://localhost:8080/api/conversation/", 
                {
                    titre: this.title,
                    question: this.question,
                    ue: this.ue,
                    users: user.id

                }).then(response=>{
                    if (response.status == 200) {
                     this.$router.push('/user/allQuestions')
                    }
                })
            }
        }
    }
}
</script>

<template>
    <div class="post-form-question">
        <div class="post-form-title">
            <h3>Poster une nouvelle question</h3>
        </div>
        <form v-on:submit.prevent="onSubmitQuestionForm">
            <div class="input-container">
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="title" placeholder="Ex: Is this statement, i see him last night can be understood as I saw him last night?"/>
            </div>
            <div class="input-container">
                <label for="question">Question</label>
                <textarea id="question" v-model="question" placeholder="Votre question ici..."></textarea>
            </div>
            <div class="input-container">
                <label for="ue">Unités d'enseignement</label>
                <input type="text" v-model="ue" id="ue" placeholder="Anglais, Français"/>
            </div>
            <div class="form-post-btn">
                <button>Publier</button>
            </div>
        </form>
    </div>
</template>
<style src="../assets/css/newStyle.css" scoped></style>