<template>
  <v-app>
    <v-layout id='lay' justify-center>
      <v-flex xs12 sm10 md8 lg6>
            <v-card>
                <v-form ref="form" @submit.prevent="salvar()">
                  <v-card-text>

                    <v-text-field v-model="cliente.nome" label="Nome" required>

                    </v-text-field>

                    <v-text-field v-model="cliente.rg" label="RG" required>

                    </v-text-field>

                    <v-text-field v-model="cliente.cpf" label="CPF" required>

                    </v-text-field>

                    <v-text-field label='Rua'>

                    </v-text-field>

                     <v-text-field label='cidade'>
                      
                    </v-text-field>
                  
                    <v-text-field v-model="cliente.email" label="E-mail" required>

                    </v-text-field>

                    <v-text-field v-model="cliente.senha" label="Senha" required>

                    </v-text-field>

                  </v-card-text>


                  <v-card-actions>
                    <v-spacer></v-spacer>

                      <v-btn color="blue lighten-2" flat @click="salvar">Salvar</v-btn>


                  </v-card-actions>
                </v-form>


            </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import Cliente from '../../models/cliente/Cliente';
  import Url from '../../models/url/Url';
  export default {
    data() {
      return {
        cliente: new Cliente(),
         url: new Url()

      }
    },
    methods: {

      salvar () {
        this.$http.post(`${this.url.url}/clientes`, this.cliente)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      },
    }
  }
</script>
<style >
  #lay{

    margin-top: 8%;
    margin-bottom: 8%

  }

</style>

