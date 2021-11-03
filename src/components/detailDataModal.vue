<template>
  <div>
    <!--DETAIL DATA-->
    <b-modal
      id="detail-modal-center"
      centered
      size="lg"
      hide-footer
      headerClass="p-2 border-bottom-0"
    >
      <template #modal-header="{ close }">
        <b-container style="width:100%;margin-top:23px;">
          <b-row>
            <b-col sm></b-col>
            <b-col sm style="text-align:center"><h5>Detail Data</h5></b-col>
            <b-col sm style="text-align:right"
              ><b-icon
                @click="close()"
                icon="x-circle-fill"
                scale="2"
                variant="secondary"
              ></b-icon
            ></b-col>
          </b-row>
        </b-container>
      </template>
      <template #default="{ hide }">
        <b-container style="border: 1px solid black;" fluid>
          <div v-for="(select, name) in data" :key="name">
            <b-row style="border-bottom: 1px solid black;">
              <b-col
                lg="5"
                style="border-right: 1px solid black;height:100%"
                class="detailTable"
                >{{ name }}</b-col
              >
              <b-col class="detailTable">{{ select }}</b-col>
            </b-row>
          </div>
          <b-row style="height:76px;" class="centering">
            <b-col
              lg="5"
              style="border-right: 1px solid black;height:100%;"
              class="centering"
              >Aksi</b-col
            >
            <b-col class="centering" style="justify-content : center"
              ><b-button
                size="sm"
                class="mb-2 smallbtn centering"
                style="background: #195776;margin:0px !important; justify-content : center;margin-right:33px;"
                v-b-modal.tambah-modal-center
                @click="hide()"
              >
                <b-icon icon="plus" aria-hidden="true"></b-icon> Tambah Data
              </b-button>
              <b-button
                size="sm"
                class="mb-2 smallbtn centering"
                style="background: #F55F44;margin:0px !important; justify-content : center;"
              >
                <b-icon icon="plus" aria-hidden="true"></b-icon> Hapus Data
              </b-button></b-col
            >
          </b-row>
        </b-container>
      </template>

      <template v-slot:modal-header-close>
        <b-icon icon="x-circle-fill" scale="2"></b-icon>
      </template>

    </b-modal>
  </div>
</template>

<script>
import "../assets/css/style.css";

export default {
  components: {},
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  computed: {
    rows() {
      return this.dataURL.length;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped></style>
