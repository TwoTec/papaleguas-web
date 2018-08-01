<template>
    <v-app id="inspire" dark>
        <v-navigation-drawer
            v-model="drawer"
            clipped
            fixed
            app
        >
          <v-list dense>
            <v-list-tile >
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                 </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile >
                 <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Serviços</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar color="cyan" app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
         <v-toolbar-title>Menu</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                
            </v-layout>
        </v-container>
      </v-content>
      <v-footer app fixed>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>