<template>
  <div>
    <b-container fluid style="margin-top:37px;">
      <b-row align-h="center" style="margin-left:32px;margin-right:32px;">
        <b-row style="padding-left: 0px;">
          <b-col cols="10">
            <div
              style="text-align: left;margin-bottom: 0px;display:flex;float:left"
              class="text formtittle underline_tittle"
            >
              Detail API {{ Data_API.title}}
            </div>
          </b-col>
          <b-col></b-col>
          <div
            style="text-align: left;margin-bottom:9px;margin-top:9px;color: rgba(0, 0, 0, 1);"
            class="poppinsText"
          >
            URL API : {{ Data_API.url_link }}
          </div>
        </b-row>
        <b-row class="centering" style="padding-left: 0px;margin-bottom:25px;">
          <b-col>
            <b-button
              size="sm"
              class="mb-2 btn centering"
              style="margin:0px !important;height:28px;width:96px;justify-content: center;"
              v-b-modal.modal-center
              @click="sendInfoUrl(Data_API.url_link)"
            >
              <b-row>
                <b-col class="poppinsText centering" style="">Edit URL</b-col>
              </b-row>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="centering" style="padding-left: 0px;">
          <b-col>
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
              class="pointer"
              style="float:left;border-radius:5px;height:26px;weight:127px;border: 1px solid #9E9E9E;"
            ></b-form-select
          ></b-col>
          <b-col style="float: right;display: contents;">
            <b-button
              size="sm"
              class="mb-2 btn centering"
              style="margin:0px !important;height:28px;width:172px;"
              v-b-modal.tambah-modal-center
              @click="sendInfoData(DataDariAPI[0])"
            >
              <b-row>
                <b-col cols="3" class="centering" style="">
                  <b-icon icon="plus" aria-hidden="true"></b-icon
                ></b-col>
                <b-col cols="9" class="poppinsTextcentering" style=""
                  >Tambah Data</b-col
                >
              </b-row>
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-table
            id="my-table"
            :items="DataDariAPI"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
            thead-class="bg-secondary text-black"
            style="text-align: start;display: inline-table;margin-top:20px;"
          >
            <template #cell(Aksi)="row">
              <b-icon
                class="icons pointer"
                icon="eye"
                variant="success"
                aria-hidden="true"
                v-b-modal.detail-modal-center
                @click="sendInfoDetail(row.item)"
              ></b-icon>
              <b-icon
                class="icons pointer"
                icon="pencil-square"
                variant="info"
                aria-hidden="true"
                v-b-modal.edit-data-modal-center
                @click="sendInfoEdit(row.item)"
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
              ></b-pagination>
            </div>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
    <editURL v-bind:Link_URL_API="selectedURL" />
    <tambahData v-bind:data="selectonedetailData" />
    <editData v-bind:data="selectedEdit" />
    <detailData v-bind:data="selectedDetail" />
  </div>
</template>

<script>
import editURL from "../components/editURL.vue";
import tambahData from "../components/tambahData.vue";
import editData from "../components/editData.vue";
import detailData from "../components/detailDataModal.vue";
import axios from "axios";
import "../assets/css/style.css";

export default {
  components: {
    editURL,
    tambahData,
    editData,
    detailData,
  },
  props: {
    Id: String,
    Data: Object,
  },
  data() {
    return {
      form: {},
      selectedEdit: {},
      selectedDetail: {},
      selectedURL: "",
      selectonedetailData: {},
      DataDariAPI: [],
      Data_API: [],
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      currentPage: 1,
      fields: [
        { key: "_id", label: "Id", sortable: true },
        { key: "Judul", label: "Nama Kota", sortable: true },
        { key: "Text", label: "Kode", sortable: true },
        { key: "Par", label: "Par", sortable: true },
        { key: "Aksi", class: "text-center" },
      ],
    };
  },
  async created() {
    const response = await axios.get(
      "http://localhost:3000/" + this.$route.params.Id
    );
    this.DataDariAPI = response.data.data;
    var retrievedObject = localStorage.getItem("DataAPI");
    this.Data_API = JSON.parse(retrievedObject)
    console.log(this.Data_API);
    // console.log(response2);
    // localStorage.setItem('data', this.$route.params.Data);
    // console.log(this.$route.params.Data);
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
    HasilIdAPI() {
      return this.$route.params.Id - 1;
    },
    DataDetail() {
      var ListData = this.DataDariAPI;
      return ListData;
    },
  },
  methods: {
    sendInfoUrl(item) {
      this.selectedURL = item;
    },
    sendInfoEdit(item) {
      this.selectedEdit = item;
    },
    sendInfoDetail(item) {
      this.selectedDetail = item;
      this.selectonedetailData = item;
    },
    sendInfoData(item) {
      this.selectonedetailData = item;
    },
  },
};
</script>

<style scoped></style>
