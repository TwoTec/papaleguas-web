<template>
  <div id="app">
    <b-navbar fixed="top" toggleable="md" type="dark" variant="primary">
      <b-navbar-brand href="#" v-scroll-to="'#top'">
        <b-img class="logo" rounded width="80px" height="60px" fluid="" alt="" />Logo
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-scroll-to="'#sobre'">Sobre</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#servicos'" >Serviços</b-nav-item>
          <b-nav-item href="#">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <header id="top" class="text-white" :style=" {backgroundImage: `url('${bubbles}')`} ">
      <b-container class="text-center">
        <h1>Lava Jato Papaléguas</h1>
        <p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
      </b-container>
    </header>

    <section class="bg-dark text-white" id="sobre">
      <b-container>
        <b-row>
          <b-col lg="8" mx-auto>
            <h2>Sobre o Lava Jato Papaléguas</h2>
            <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
            <ul>
              <li>Clickable nav links that smooth scroll to page sections</li>
              <li>Responsive behavior when clicking nav links perfect for a one page website</li>
              <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
              <li>Minimal custom CSS so you are free to explore your own unique design options</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="servicos" :style=" {backgroundImage: `url('${lavando}')`} ">
      <b-container class="text-center services">
        <b-row>
          <b-col lg="6">
            <h2>Serviço 1</h2>
            <p>Serviço muito bonito</p>
            <b-list-group>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </b-list-group>
          </b-col>
          <b-col lg="6">
            <h2>Serviço 2</h2>
            <p>Serviço muito bonito</p>
            <b-list-group>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="text-center services">
         <b-row>
          <b-col lg="6">
            <h2>Serviço 3</h2>
            <p>Serviço muito bonito</p>
            <b-list-group>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </b-list-group>
          </b-col>
          <b-col lg="6">
            <h2>Serviço 4</h2>
            <p>Serviço muito bonito</p>
            <b-list-group>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script>
export default {

  name: 'app',
  data () {
    return {
      roadrunner: 'src/assets/papa.jpeg',
      lavando: 'src/assets/lavando.jpg',
      url1: 'src/assets/700-450.png',
      banner: 'src/assets/banner.jpg',
      bubbles: 'src/assets/bubbles.jpeg'
    }
  }
}
</script>

<style lang="scss">

/*Scrolling*/
header {
  padding: 154px 0 100px;
}

@media (min-width: 992px) {
  header {
    padding: 156px 0 100px;
  }
}

section {
  padding: 150px 0;
}

/*End Scrolling*/

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  outline: none;
}


.services {
  padding: 5%
}
#top  {
  background-repeat: no-repeat;
  background-position: left;
  margin-top: 50px;
   text-shadow: 2px 2px #000;
}



</style>
