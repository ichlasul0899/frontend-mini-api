<template>
  <div>
    <b-modal
      id="modal-center"
      centered
      size="lg"
      hide-footer
      headerClass="p-2 border-bottom-0"
    >
      <template #modal-header="{ close }">
        <b-container style="width:100%;margin-top:23px;">
          <b-row>
            <b-col sm></b-col>
            <b-col sm style="text-align:center;"> <div
            style=""
            class="text formtittle underline_tittle"
          >
            Edit URL
          </div></b-col>
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
            <b-form-group
              id="input-group-1"
              label="URL Lama"
              label-for="input-1"
              description=""
              style="text-align:left"
            >
              <b-form-input
                id="input-1"
                v-model="form.URL_lama"
                type="url"
                :placeholder="Link_URL_API"
                required
                disabled
                class="inputLogin URL_lama"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="URL Baru"
              label-for="input-2"
              style="text-align:left"
            >
              <b-form-input
                id="input-2"
                v-model="form.URL_baru"
                placeholder=""
                class="inputLogin"
                required
                type="url"
              ></b-form-input>
            </b-form-group>
            <div style="width: 100%;text-align: center;margin-top:32px;">
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
    id: Number,
    Link_URL_API: String,
  },
  data() {
    return {
      form: {
        URL_lama: "",
        URL_baru: "",
      },
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
      alert(JSON.stringify(this.form));
    },
    sendInfo(item) {
      this.selectedUser = item;
    },
  },
};
</script>

<style scoped></style>
