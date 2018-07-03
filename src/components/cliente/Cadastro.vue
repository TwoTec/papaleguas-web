<template>
  <v-app>
      <v-container>
          <v-form>
             <v-text-field v-model="nome" label="Name" required>

             </v-text-field>

             <v-text-field v-model="email" label="E-mail" required>

             </v-text-field>
          </v-form>


      </v-container>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        nome: '',
        email: ''
      }
    }
  }
</script>
