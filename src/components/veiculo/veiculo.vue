<template>
    <v-app>
        <v-container>
            <v-form ref="form" @submit.prevent="salvar()">
                <v-text-field v-model="veiculo.marca" label="Marca" required>

                </v-text-field>

                <v-text-field v-model="veiculo.modelo" label="Modelo" required>

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
  import veiculo from '../../models/carro/Carro';
  import url from '../../models/url/Url';
  export default {
    data() {
      return {
        veiculo: new veiculo(),
         url: new url()

      }
    },
    methods: {

      salvar () {
        this.$http.post(`${this.url.url}/veiculos`, this.veiculo)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      },
    }
  }
</script>
