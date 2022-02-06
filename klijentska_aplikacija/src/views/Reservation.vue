<template>
  <div id="app">
    <Header subtitle="Make your ticket reservation" />
    <b-row id="mainRow">
      <b-col class="col">
        <b-form-group id="input-1" label="Take Off Place:" label-for="top">
          <b-form-input
            id="top"
            v-model="form.top"
            placeholder="Take Off Place"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="col">
        <b-form-group id="input-2" label="Landing Place:" label-for="lp">
          <b-form-input
            id="lp"
            v-model="form.lp"
            placeholder="Landing Place"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="col">
        <b-form-group id="input-3" label="Take Off Time:" label-for="tot">
          <b-form-input
            id="tot"
            v-model="form.lp"
            placeholder="Take off Time"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="col">
        <b-form-group id="input-4" label="Landing Time:" label-for="lt">
          <b-form-input
            id="lt"
            v-model="form.top"
            placeholder="Landing Time"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="col">
        <b-button
          id="search-button"
          class="mt-4"
          type="submit"
          variant="primary"
          >Search</b-button
        >
      </b-col>
    </b-row>
    <b-row id="secondRow">
      <div class="overflow-auto">
        <b-pagination
          id="pag"
          v-model="table.currentPage"
          :total-rows="rows"
          :per-page="table.perPage"
          aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ table.currentPage }}</p>

        <b-table
          id="my-table"
          :items="table.items"
          :fields="table.fields"
          :per-page="table.perPage"
          :current-page="table.currentPage"
          :select-mode="table.selectMode"
          responsive="sm"
          ref="selectableTable"
          selectable
          @row-selected="onRowSelected"
          small
        >
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
        </b-table>
      </div>
    </b-row>
    <b-row>
      <b-button
          id="confirm-button"
          class="mt-2"
          type="submit"
          variant="primary"
          to="/reservation/selectClass"
          >Confirm</b-button
        >
    </b-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Reservation",
  components: {
    Header,
  },

  computed: {
    rows() {
      return this.table.items.length;
    },
  },

  data() {
    return {
      form: {
        top: "",
        lp: "",
        tot: "",
        lt: "",
      },
      table: {
        perPage: 2,
        currentPage: 1,
        fields: ["selected", "isActive", "age", "first_name", "last_name"],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "Dickerson",
            last_name: "Macdonald",
          },
          { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
          {
            isActive: false,
            age: 89,
            first_name: "Geneva",
            last_name: "Wilson",
          },
          { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        ],
        selected: [],
        selectMode: "single",
      },
    };
  },
  methods: {
    onRowSelected(items) {
      this.table.selected = items;
    },
  },
};
</script>

<style scoped>
.col {
  margin-left: 70px;
  max-width: 250px;
  text-align: left;
}

#mainRow {
  margin-top: 100px;
}

#secondRow {
  margin-top: 100px;
}

#pag {
  margin-left: 670px;
}

#confirm-button {
  margin-bottom: 30px;
  max-width: 100px;
  margin-left: 30px;
}
</style>
