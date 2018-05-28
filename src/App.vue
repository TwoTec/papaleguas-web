<template>
  <div id="app">
    <b-navbar fixed="top" toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">Logo</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Sobre</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <header class="bg-primary text-white">
      <b-container class="text-center">
        <h1>Lava Jato Papaléguas</h1>
        <p class="lead">A landing page template freshly redesigned for Bootstrap 4</p>
      </b-container>
    </header>

    <section id="sobre">
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

  </div>
</template>

<script>
    
    // $(document).ready(function($) {
    //     // Smooth scrolling using jQuery easing
    //   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //       if (target.length) {
    //         $('html, body').animate({
    //           scrollTop: (target.offset().top - 54)
    //         }, 1000, "easeInOutExpo");
    //         return false;
    //       }
    //     }
    //   });

    //   // Closes responsive menu when a scroll trigger link is clicked
    //   $('.js-scroll-trigger').click(function() {
    //     $('.navbar-collapse').collapse('hide');
    //   });

    //   // Activate scrollspy to add active class to navbar items on scroll
    //   $('body').scrollspy({
    //     target: '#mainNav',
    //     offset: 54
    //   });
    // })
export default {
  
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  color: #42b983;
}
.logo {
  width: 100%;
}
</style>
