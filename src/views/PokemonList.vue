<template>
    <v-container>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="(pokemon, index) in filteredPokemon"
          :key="index"
        >
          <v-hover>
            <v-card slot-scope="{ hover }" :class="{ 'on-hover': hover }" raised color="light-blue lighten-4">
              <v-img
                :src="pokemon.sprites.front_default"
                aspect-ratio="1"
                class="grey lighten-2"
              />
              <v-card-title class="headline text-center">{{ pokemon.name }}</v-card-title>
              <v-card-subtitle class="text-center">#{{ pokemon.id }}</v-card-subtitle>
              <v-card-actions>
                <v-btn :to="`/pokemon/${pokemon.id}`" color="blue darken-2" class="white--text" block>Details</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  .on-hover {
    transform: scale(1.03);
    transition: transform .2s ease-in-out;
  }
  .v-card__title {
    font-size: 20px;
    color: #424242;
  }
  .v-card__subtitle {
    color: #757575;
  }
  </style>
  
  
  <script>
  import api from '../api'
  
  export default {
    name: 'PokemonList',
    data() {
      return {
        search: '',
        pokemon: []
      }
    },
    created() {
  api.get('pokemon?limit=40').then(response => {
    this.pokemon = response.data.results
    this.pokemon.forEach((pokemon, index) => {
      api.get('pokemon/' + pokemon.name).then(response => {
        this.$set(this.pokemon, index, response.data)
      })
    })
  })
},
computed: {
  filteredPokemon() {
    return this.pokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.search.toLowerCase())
    })
  }
}

  }
  </script>
  