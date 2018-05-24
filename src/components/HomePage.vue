<template>
  <header class="top-area">
    <div class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-2">
            <div class="logo">
              <a href="#">
                Lava Jato <span> {{title}} </span>
              </a>
            </div>

          </div>
          <div class="col-sm-10">
            <div class="main-menu">

              <!-- Toggle para mobile display -->
              <b-navbar toggleable="" type="dark" variant="info">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-collapse is-nav id="nav_collapse">

                  <b-navbar-nav>
                    <b-nav-item class="smooth-menu">Home</b-nav-item>
                    <b-nav-item class="smooth-menu">A Empresa</b-nav-item>
                    <b-nav-item class="smooth-menu">Serviços</b-nav-item>
                    <b-nav-item class="smooth-menu">Agendamento</b-nav-item>
                  </b-navbar-nav>

                  <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                      <b-button class="book-btn">Login</b-button>
                    </b-nav-item>
                  </b-navbar-nav>

                </b-collapse>
              </b-navbar>

            </div>
          </div>
        </div>
        <div class="home-border"></div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        title: 'Papaléguas'
      }
    }
  }
</script>


