<script>
export default {
    name: "newQuestion",
}
</script>

<template>
    <div class="post-form-question">
        <div class="post-form-title">
            <h3>Répondre à la question de John Doe</h3>
        </div>
        <form>
            <div class="input-container">
                <label for="title">Titre</label>
                <input type="text" id="title" placeholder="Ex: Is this statement, i see him last night can be understood as I saw him last night?"/>
            </div>
            <div class="input-container">
                <label for="response">Réponses</label>
                <textarea id="response" placeholder="Votre réponse ici..."></textarea>
            </div>
            <div class="form-post-btn">
                <button>Publier</button>
            </div>
        </form>
    </div>
</template>
<style src="../assets/css/newStyle.css" scoped></style>