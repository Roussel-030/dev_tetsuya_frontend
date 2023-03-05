<script>
import question_item from '../components/questionitem.vue'
import subject_ from '../components/subject.vue'
import axios from 'axios'
export default {
    name: "questionView",
    components:{
        question_item,
        subject_,
    },
    data(){
        return{
            datas:[]
        }
    },
    created(){
        axios.get("http://localhost:8080/api/conversations/")
        .then(response=>{
            console.log(response.data)
            this.datas.push(response.data.data[0])
        })
    }
}
</script>

<template>
    <div class="quesiton-container">
        <div class="question-item">
            <question_item :createAt="datas[0].createdAt" :title="datas[0].titre"/>
            <subject_ :subject="datas[0].question"></subject_>
        </div>
    </div>
</template>
<style></style>