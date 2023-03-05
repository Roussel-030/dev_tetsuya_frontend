<script>
import question_item from '../components/questionitem.vue'
import subject_ from '../components/subject.vue'
import responseitem from '../components/responseitem.vue'
export default {
    name: "questionView",
    components:{
        question_item,
        subject_,
        responseitem
    }
}
</script>

<template>
    <div class="quesiton-container">
        <!-- header-question -->
        <question_item></question_item>
        <!-- subject -->
        <subject_></subject_>
        <!-- response -->
        <responseitem></responseitem>
    </div>
</template>
<style></style>