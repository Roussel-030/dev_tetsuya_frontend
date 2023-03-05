<script>
export default {
    name: 'subject_',
    props:['subject'],
    methods:{
        respond:function(){
            this.$router.push('/user/addNewResponse')
        }
    }
}
</script>
<template>
    <div class="subject-container m-t-20">
        <div class="text">
            <p>
                {{subject}}
            </p>
        </div>
        <div class="response-to m-t-35">
            <button class="btn btn-response" @click="respond">
                <span><font-awesome-icon icon="fa-solid fa-envelope" class="fa m-r-5"/> Répondre</span>
            </button>
            <button class="btn btn-rating">
                <span><font-awesome-icon icon="fa-regular fa-star" class="fa m-r-5"/> 7</span>
            </button>
        </div>
    </div>
</template>
<style scoped>
    .subject-container{
        width: 90%;
        margin-left:8%;
        margin-right:8%;
    }   
    .text p{
        text-align: justify;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
    }
    .response-to{
        background: #D9D9D9;
    }

    .btn{
        background: #fff;
        border: 0.2px solid #848484;
        padding: .3rem 1rem;
        margin: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #848484;
    }
</style>