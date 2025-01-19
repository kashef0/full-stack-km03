<template>
    <div class="form_container">
        <form method="POST" @submit.prevent="submitForm" class="form">
            <div class="form_group">
                <label for="movie" class="form_label">Movie namn:</label>
                <input type="text" v-model="movie" id="movie" class="form_input">
            </div>

            <div class="form_group">
                <label for="priority" class="form_label">Prioritet:</label>
                <input type="number" v-model="priority" id="priority" class="form_input">
            </div>

            <div class="form_group form_checkbox">
                <input type="checkbox" id="watched" v-model="is_watch" class="form_checkbox_input">
                <label for="watched" class="form_label">Sedd</label>
            </div>

            <div class="form_group">
                <label for="description" class="form_label">Beskrivning:</label>
                <textarea v-model="description" id="description" rows="4" class="form_textarea"></textarea>
            </div>

            <div class="form_group">
                <input type="submit" value="Lägg till" class="form_button">
            </div>
        </form>

        <div v-if="errors.length > 0" class="error_container">
            <h3 class="error_title">Vänligen åtgärda följande fel:</h3>
            <ul class="error_list">
                <li v-for="(error, index) in errors" :key="index" class="error_item">{{ error }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["submit"], // Skickar data till föräldern
    data() {
        return {
            errors: [],
            movie: "",
            priority: null,
            description: "",
            is_watch: false
        };
    },
    methods: {
        submitForm() {
            this.errors = [];

            // Validera formuläret
            if (!this.movie.trim()) this.errors.push("Filmnamn krävs!");
            if (!this.priority || isNaN(this.priority) || this.priority < 1 || this.priority > 10) {
                this.errors.push("Prioritet måste vara ett nummer mellan 1 och 10!");
            }
            if (!this.description.trim()) this.errors.push("Beskrivning krävs!");

            // Om det finns fel, returnera
            if (this.errors.length > 0) return;

            // Skicka data till föräldern
            this.$emit("submit-movie", {
                movie: this.movie,
                priority: this.priority,
                description: this.description,
                is_watched: this.is_watch
            });

            // Återställ formuläret
            this.resetForm();
        },
        resetForm() {
            this.movie = "";
            this.priority = null;
            this.description = "";
            this.is_watch = false;
        }
    }
};
</script>

<style src="../assets/Form.css">

</style>