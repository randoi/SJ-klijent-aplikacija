<template>
  <div id="app">
    <Header subtitle="Select Class"/>
    <b-row id="mainRow">
        <b-col>
            <ClassCard title="Economy Class"/>
        </b-col>
        <b-col>
            <ClassCard title="Business Class"/>
        </b-col>
        <b-col>
            <ClassCard title="Middle Class"/>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ClassCard from "@/components/ClassCard.vue"

export default {
  name: "ReservationBridge",
  components: {
    Header,
    ClassCard
  },

  mounted() {
  }
};
</script>

<style scoped>
#mainRow {
    margin-top: 180px;
}
</style>
