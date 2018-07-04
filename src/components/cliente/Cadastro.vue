<template>
  <v-app>
      <v-container>
          <v-form ref="form" @submit.prevent="salvar()">
             <v-text-field v-model="cliente.nome" label="Nome" required>

             </v-text-field>

             <v-text-field v-model="cliente.rg" label="RG" required>

             </v-text-field>

             <v-text-field v-model="cliente.cpf" label="CPF" required>

             </v-text-field>

             <v-text-field v-model="cliente.email" label="E-mail" required>

             </v-text-field>

             <v-text-field v-model="cliente.senha" label="Senha" required>

             </v-text-field>



            <v-card-actions>
              <v-spacer></v-spacer>

                <v-btn color="blue lighten-2" flat @click="salvar">Salvar</v-btn>


            </v-card-actions>
          </v-form>


      </v-container>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        cliente: {
          nome: '',
          rg: '',
          cpf:'',
          email:'',
          senha:''

        },
        url: 'http://localhost:3000'

      }
    },
    methods: {

      salvar () {
        this.$http.post(`${this.url}/clientes`, this.cliente)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      },
    }
  }
</script>
