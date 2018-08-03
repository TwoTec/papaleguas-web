<template>
    <v-app id="inspire" >
        <v-navigation-drawer
            v-model="drawer"
            clipped
            fixed
            app
        >
          <v-list dense>
            <v-list-tile
              v-for="item in menuItems"
              :key="item.title"
              :to="item.link">
             <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar color="cyan" app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
         <v-toolbar-title>Menu</v-toolbar-title>
      </v-toolbar>
      <v-main>
        <router-view></router-view>
      </v-main>
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
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'home', title: 'Home', link: '/home'},
          {icon: 'C', title: 'cadastrar', link: '/cliente/cadastro'}
        ]
        
        return menuItems
      }
    }
  }
</script>