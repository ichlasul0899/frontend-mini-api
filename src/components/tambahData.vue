<template>
  <div>
    <b-modal
      id="tambah-modal-center"
      centered
      size="lg"
      hide-footer
      headerClass="p-2 border-bottom-0"
    >
      <template #modal-header="{ close }">
        <b-container style="width:100%;margin-top:23px;">
          <b-row>
            <b-col sm></b-col>
            <b-col sm style="text-align:center"
              ><div style="" class="text formtittle underline_tittle">
                Tambah Data
              </div></b-col
            >
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
      <div style="text-align: center;">
        <div style="text-align: center;">
          <b-form @submit="onSubmit" style="margin:5px;">
            <b-container>
              <div v-for="(select, name, index) in data" :key="index">
                <b-row class="" style="margin-bottom: 12px;">
                  <b-col style="" class="labelData">{{ name }}</b-col>
                  <b-col cols="9" class="">
                    <b-form-group
                      :id="'input' + index"
                      label=""
                      label-for="input-1"
                    >
                      <b-form-input
                        :id="'input' + index"
                        v-model="form[name]"
                        type="text"
                        placeholder=""
                        required
                        :key="name"
                        class="inputData "
                      ></b-form-input></b-form-group
                  ></b-col>
                </b-row>
              </div>
            </b-container>
            <div style="width: 100%;text-align: end;margin-top:32px;">
              <b-button
                class="btn"
                size="sm"
                variant="success"
                type="submit"
                style="  width: 180px;height: 32px;"
                >Simpan</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
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
    return {
      form: {},
    };
  },
  computed: {
    rows() {
      return this.dataURL.length;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$bvModal.hide("tambah-modal-center");
      this.$bvModal.show("modal-finish");
      
    },
    sendInfo(item) {
      this.selectedUser = item;
    },
  },
};
</script>

<style scoped></style>
