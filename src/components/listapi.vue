<template>
  <div>
    <b-container fluid style="margin-top:37px;">
      <b-row align-h="center" style="margin-left:32px;margin-right:32px;">
        <b-row style="margin-bottom:18px;">
          <b-col md="auto" style="padding-left: 0"
            ><div
              style="text-align: left;"
              class="tittle text underline_tittle"
            >
              List API
            </div></b-col
          >
        </b-row>
        <b-row class="centering" style="padding-left: 0px;margin-top:16px;">
          <b-col>
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
              style="float:left;border-radius:5px;height:26px;weight:127px;"
              class="pointer"
            ></b-form-select
          ></b-col>
          <b-col style="float: right;display: contents;">
            <router-link to="/buatapi">
              <b-button
                size="sm"
                class="mb-2 centering poppinsText"
                style="margin:0px !important;height:28px;width:172px;"
              >
                <b-icon
                  icon="plus"
                  aria-hidden="true"
                  style="margin-right:20px"
                ></b-icon>
                Buat API Baru
              </b-button>
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-table
            :items="DataDariAPI"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
            class="testingBG"
            style="text-align: start;display: inline-table;margin-top:20px;"
          >
            <template #cell(Aksi)="row">
              <b-icon
                class="icons pointer"
                icon="eye"
                variant="success"
                aria-hidden="true"
                @click="detailAPI(row.item['title'],row.item)"
              ></b-icon>
              <b-icon
                class="icons pointer"
                icon="pencil-square"
                variant="info"
                aria-hidden="true"
                v-b-modal.modal-center
                @click="sendInfo(row.item['url_link'])"
              ></b-icon>
              <b-icon
                @click="row.toggleDetails"
                class="icons pointer"
                icon="trash"
                variant="danger"
                aria-hidden="true"
              ></b-icon>
            </template>
          </b-table>
        </b-row>
        <b-row style="">
          <b-col class="poppinsText">
            <p style="float:left;color:rgba(158, 158, 158, 1);" class="mt-3">
              Menampilkan Data {{ showingData }}
            </p></b-col
          >
          <b-col
            style="display: flex;
    justify-content: flex-end;"
          >
            <div style="height:100%;display:flex;align-items:center">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                
                aria-controls="my-table"
                style="margin:0px !important;"
              >
              </b-pagination>
            </div>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
    <editURL v-bind:Link_URL_API="selectedUser" />
  </div>
</template>

<script>
import editURL from "../components/editURL.vue";
import axios from "axios";

import "../assets/css/style.css";

export default {
  components: {
    editURL,
  },
  data() {
    return {
      selectedUser: "",
      selectedItemsCount: "",
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      currentPage: 1,
      fields: [
        { key: "url_link", label: "Link URL API", sortable: true },
        { key: "title", label: "Nama Tabel", sortable: true },
        { key: "Aksi", class: "text-center"},
      ],
      DataDariAPI: [],
    };
  },
  async created() {
    const response = await axios.get("http://localhost:3000/api");
    this.DataDariAPI = response.data.data;
    localStorage.removeItem('DataAPI');
    // console.log(response.data);
    // console.log(response);
  },
  computed: {
    showingData() {
      var y = 1 * this.currentPage;
      var z = y * this.perPage;
      var x = z - (this.perPage - 1);
      var total = this.DataDariAPI.length;
      if (z > total) {
        z = total;
      }
      var line = x + " - " + z + " dari " + total + " data API";
      return line;
    },
    rows() {
      return this.DataDariAPI.length;
    },
  },

  methods: {
    sendInfo(item) {
      this.selectedUser = item;
    },
    detailAPI(Id,data) {
      // this.$router.push({ path: `/DetailAPI/${Id}` });
      // this.$router.push({ path: `/DetailAPI/${Id}`, props: {Data: data} });
      // console.log(data)
      localStorage.setItem('DataAPI', JSON.stringify(data));
      this.$router.push({ name: 'DetailAPI' ,params: {Id:Id, Data:data}})
    },
  },
};
</script>

<style>
.testingBG thead {
  background-color: #eeeeee;
}
</style>
