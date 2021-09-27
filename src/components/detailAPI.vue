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
              Detail API {{ dataURL[0].nama_tabel }}
            </div>
          </b-col>
          <b-col></b-col>
          <div style="text-align: left" class="text">
            URL API : {{ dataURL[0].Link_URL_API }}
          </div>
        </b-row>
        <b-row class="centering" style="padding-left: 0px;margin-bottom:18px;">
          <b-col>
            <b-button
              size="sm"
              class="mb-2 btn centering"
              style="margin:0px !important;height:28px;width:96px;justify-content: center;"
              v-b-modal.modal-center
              @click="sendInfo(dataURL[0].Link_URL_API)"
            >
              <b-row>
                <b-col
                  class="text centering"
                  style="font-weight:400;line-height: 16px;"
                  >Edit URL</b-col
                >
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
              style="float:left;border-radius:5px;box-shadow: 2px 2px;"
            ></b-form-select
          ></b-col>
          <b-col style="float: right;display: contents;">
            <b-button
              size="sm"
              class="mb-2 btn centering"
              style="margin:0px !important;height:28px;width:172px;"
              v-b-modal.tambah-modal-center
            >
              <b-row>
                <b-col cols="2">
                  <b-icon icon="plus" aria-hidden="true"></b-icon
                ></b-col>
                <b-col
                  cols="10"
                  class="text centering"
                  style="font-weight:t:400;line-height: 16px;"
                  >Tambah Data</b-col
                >
              </b-row>
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-table
            id="my-table"
            :items="detailAPI"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
            thead-class="bg-secondary text-black"
            style="text-align: start;display: inline-table;margin-top:20px;"
          >
            <template #cell(Aksi)="row">
              <b-icon
                class="icons"
                icon="eye"
                variant="success"
                aria-hidden="true"
                v-b-modal.detail-modal-center
                @click="sendInfo(row.item)"
              ></b-icon>
              <b-icon
                class="icons"
                icon="pencil-square"
                variant="info"
                aria-hidden="true"
                v-b-modal.edit-data-modal-center
                @click="sendInfo(row.item)"
              ></b-icon>
              <b-icon
                @click="row.toggleDetails"
                class="icons"
                icon="trash"
                variant="danger"
                aria-hidden="true"
              ></b-icon>
            </template>
          </b-table>
        </b-row>
        <b-row style="">
          <b-col>
            <p style="float:left" class="mt-3">
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
                pills
                aria-controls="my-table"
                style="margin:0px !important;"
              ></b-pagination>
            </div>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
    <editURL v-bind:Link_URL_API="selectedUser" />
    <tambahData v-bind:data="satudetailAPI" />
    <editData v-bind:data="selectedUser" />
    <detailData v-bind:data="selectedUser" />
    <finish />
  </div>
</template>

<script>
import editURL from "../components/editURL.vue";
import tambahData from "../components/tambahData.vue";
import editData from "../components/editData.vue";
import detailData from "../components/detailDataModal.vue";
import finish from "../components/FinishModal.vue";
import "../assets/css/style.css";

export default {
  components: {
    editURL,
    tambahData,
    editData,
    detailData,
    finish,
  },
  data() {
    return {
      form: {},
      namaAPI: "Bencana Banjir",
      selectedUser: "",
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      currentPage: 1,
      fields: ["Id", "Provinsi", "Kode", "Nama_Kab_Kota", "Aksi"],
      dataURL: [
        {
          id: 1,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
      ],
      satudetailAPI: {
        Provinsi: "Jawa Barat",
        Kode: "3204",
        Nama_Kab_Kota: "Kabupaten Bandung",
      },
      detailAPI: [
        {
          Id: 1,
          Provinsi: "Jawa Barat",
          Kode: "3204",
          Nama_Kab_Kota: "Kabupaten Bandung",
        },
        {
          Id: 2,
          Provinsi: "Jawa Barat",
          Kode: "3204",
          Nama_Kab_Kota: "Kabupaten Bandung",
        },
        {
          Id: 3,
          Provinsi: "Jawa Barat",
          Kode: "3204",
          Nama_Kab_Kota: "Kabupaten Bandung",
        },
      ],
    };
  },
  computed: {
    showingData() {
      var y = 1 * this.currentPage;
      var z = y * this.perPage;
      var x = z - (this.perPage - 1);
      var total = this.detailAPI.length
      var line = x + " - " + z + ' dari ' + total + ' data API';
      return line;
    },
    rows() {
      return this.detailAPI.length;
    },
  },
  methods: {
    sendInfo(item) {
      this.selectedUser = item;
    },
  },
};
</script>

<style scoped></style>
