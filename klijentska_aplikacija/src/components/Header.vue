<template>
  <div class="header">
    <h1>Airplane Tickets Service</h1>
    <h3 v-if="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    
    props: {
      subtitle: String
    }
  }

</script>

<style scoped>
  .header {
    padding-top: 15px;
    margin-bottom: 25px;
  }
</style>