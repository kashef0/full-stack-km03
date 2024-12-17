<template>
    <div class="form_container" id="app">
        <form method="POST" @submit.prevent="createItem">
            <label for="movie">Movie namn:</label>
            <input type="text" v-model="movie" id="movie"><br><br>
            <label for="priority">prioritet:</label>
            <input type="number" v-model="priority" id="priority" ><br><br>
            <div>
                <input type="checkbox" id="watched" v-model="is_watch" /><span class="space_watched"> </span>
                <label for="watched"> sedd </label>
            </div>
                    
            <label for="description">Beskrivning:</label>
            <textarea v-model="description" id="description" rows="4" cols="50"></textarea><br><br>     
            <input type="submit" value="Lägg till">
        </form>

        <div v-if="errors.length > 0">
      <h3>Vänligen åtgärda följande fel:</h3>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                errors: [],
                items: [],
                movie: "",
                priority: null,
                description: "",
                is_watch: false
            };
        },
        methods: {
             // Metod för att skapa ett nytt objekt (film)
            async createItem(e) {
                this.errors = [];
                // Validering av filmens namn, priorty, description 
                if (!this.movie.trim()) {
                    this.errors.push("filmnamn krävs!");
                }
                if (!this.priority) {
                    this.errors.push("Prioritet krävs!");
                } else if (isNaN(this.priority) && this.priority < 0 && this.priority > 10) {
                    this.errors.push("Priotritet måste vara nummer mellan 1 och 10!");
                } else if (!this.description.trim()) {
                    this.errors.push("description krävs!");
                }
                // Om det finns fel, förhindra formulärets skickande och returnera ett fel meddelande
                if (this.errors.length > 0) {
                    e.preventDefault();
                    return;
                }
                const url = import.meta.env.VITE_URL+'/create'; // URL till API-endpoint för att skapa nytt objekt
                try {
                    const res = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'  // Skickar JSON som innehåll
                        },
                        body: JSON.stringify({
                            movie: this.movie,
                            priority: this.priority,
                            description: this.description,
                            is_watched: this.is_watch

                        })
                    });
                    const data = await res.json();
                    if (res.ok) {
                        this.items.push(data);  // Add item to the list
                        // Reset form fields
                        alert(`Framgång:  ${data.message}`);
                        this.movie= "";
                        this.priority= null;
                        this.description = "";
                        this.is_watch= false;
                    } else {
                        console.error('Error skapande av item', error);
                        this.errors.push('Det gick inte att skapa objektet. Försök igen senare.');
                    }
                } catch (error) {
                    console.error('Error skapande av item', error);
                    this.errors.push("Ett fel inträffade. Försök igen senare.");
                }
            }
        }
    }

</script>


<style src="../assets/Form.css">

</style>