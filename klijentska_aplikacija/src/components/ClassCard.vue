<template>
  <div class="classCard">
      <b-row id="upperRow">
          <h3 v-if="title">{{ title }}</h3>
      </b-row>
      <b-row id="bottomRow">
          <b-button
          id="button"
          variant="primary"
          >Next</b-button
        >
      </b-row>
  </div>
</template>

<script>

  export default {
    name: 'ClassCard',
    
    props: {
      title: String,
    }
  }

</script>

<style scoped>

.classCard {
    margin-left: 50px;
    margin-right: 50px;
    background-color: aqua;
    border-style: dashed;
}

#upperRow {
    margin-top: 30px;
    text-align: center;
}

#bottomRow {
    margin-top: 40px;
    margin-bottom: 30px;
}

#button {
  max-width: 150px;
  margin-left: 130px;
}
</style>