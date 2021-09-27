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
            <router-link to="/buatapi">
              <b-button
                size="sm"
                class="mb-2 btn centering"
                style="margin:0px !important;height:28px;width:172px;"
              >
                <b-icon icon="plus" aria-hidden="true"></b-icon> Buat API Baru
              </b-button>
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-table
            id="my-table"
            :items="dataURL"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="header"
            thead-class="bg-secondary table-header text-black "
            style="text-align: start;display: inline-table;margin-top:20px;"
          >
            <template #cell(Aksi)="row">
              <b-icon
                class="icons"
                icon="eye"
                variant="success"
                aria-hidden="true"
                @click="detail()"
              ></b-icon>
              <b-icon
                class="icons"
                icon="pencil-square"
                variant="info"
                aria-hidden="true"
                v-b-modal.modal-center
                @click="sendInfo(row.item.Link_URL_API)"
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
import "../assets/css/style.css";

export default {
  components: {
    editURL,
  },
  data() {
    return {
      form: {
        URL_lama: "",
        URL_baru: "",
      },
      selectedUser: "",
      selectedItemsCount: "",
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      currentPage: 1,
      header: ["Link_URL_API", "nama_tabel", "Aksi"],
      dataURL: [
        {
          id: 1,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir1",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 2,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir2",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 3,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir3",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 4,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir4",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 5,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir5",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 6,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir6",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 7,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir7",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 8,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir8",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
        {
          id: 9,
          Link_URL_API:
            "https://coredata-dev.digitalservice.id/bpbd/od_jumah_korban_bencana_bajir9",
          nama_tabel: "Jumlah Korban Bencana Banjir",
        },
      ],
    };
  },
  computed: {
    showingData() {
      var y = 1 * this.currentPage;
      var z = y * this.perPage;
      var x = z - (this.perPage - 1);
      var total = this.dataURL.length;
      if (z > total){
        z = total
      }
      var line = x + " - " + z + " dari " + total + " data API";
      return line;
    },
    rows() {
      return this.dataURL.length;
    },
  },
  methods: {
    detail() {
      this.$router.push("/detailAPI");
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.form.URL_lama = "";
      this.form.URL_baru = "";
    },
    sendInfo(item) {
      this.selectedUser = item;
    },
  },
};
</script>

<style scoped>
.btn {
  background: #2a8c97;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  color: #ffffff;
  width: 196px;
  height: 51px;
  text-align: center;
}
.icons {
  margin-left: 11.37px;
}
.inputLogin {
  border-radius: 10px;
}
</style>
