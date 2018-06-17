<template>
  <v-avatar :size= 'avatarSize'>
    <img src="public/img/runner.png" alt="">
  </v-avatar>
</template>

<script>
export default {
  computed: {
    avatarSize () {
      return '50px'
    }
  }
}
</script>

