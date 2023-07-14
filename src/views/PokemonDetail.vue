<template>
    <v-container v-if="pokemon">
      <v-row>
        <v-col cols="12" sm="6">
          <v-img :src="pokemon.sprites.front_default" aspect-ratio="1" />
        </v-col>
        <v-col cols="12" sm="6">
          <h1 class="display-2 text-uppercase">{{ pokemon.name }}</h1>
          <v-divider class="my-4" />
          <h2 class="title">Stats:</h2>
          <p class="body-1">Height: {{ pokemon.height }}</p>
          <p class="body-1">Weight: {{ pokemon.weight }}</p>
          <p class="body-1">Base experience: {{ pokemon.base_experience }}</p>
          <h2 class="title">Abilities:</h2>
          <v-chip-group color="blue-grey" column>
            <v-chip v-for="(ability, index) in pokemon.abilities" :key="index" class="white--text">
              {{ ability.ability.name }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
    <v-progress-circular v-else indeterminate color="blue-grey" />
  </template>
  
<script>
import api from '../api'

export default {
  name: 'PokemonDetail',
  data() {
    return {
      pokemon: null
    }
  },
  created() {
    api.get('pokemon/' + this.$route.params.id).then(response => {
      this.pokemon = response.data
    })
  }
}
</script>

<style scoped>
h1 {
  font-weight: 600;
}
.title {
  font-weight: 500;
  margin-top: 1rem;
}
.body-1 {
  margin-bottom: 0.5rem;
}
</style>
