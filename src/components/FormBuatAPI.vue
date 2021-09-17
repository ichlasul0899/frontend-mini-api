<template>
  <div class="home">
    <b-card
      style="width:956px;min-height:848px;margin:auto;margin-bottom: 10px;background: rgba(255, 255, 255, 0.9);border: 1px solid #2A8C97;
border-radius: 10px;"
      tittle="Login"
      class="mt-5"
    >
      <div class="text formtittle" style="margin-bottom:22px;text-align:left">
        <div style="border-bottom: 3px solid #2A8C97;display:inline">
          Buat API Baru
        </div>
      </div>
      <!-- Block Step-->
      <b-container class="" style="margin: 0;">
        <b-row class="">
          <b-col
            class="textstep"
            cols="12"
            md="auto"
            style="padding:10px;max-width:96.7px;"
            :style="{ 'background-color': color1 }"
            @click="steponeform()"
            >STEP 1</b-col
          >
          <b-col
            cols="12"
            md="auto"
            class="textstep"
            style="padding:10px;max-width:96.7px;"
            :style="{ 'background': color2 }"
            @click="steptwoform()"
            >STEP 2</b-col
          >
          <b-col
            cols="12"
            md="auto"
            class="textstep"
            style="padding:10px;max-width:96.7px;"
            :style="{ 'background': color3 }"
            @click="stepthreeform()"
            >STEP 3</b-col
          >
          <b-col
            cols="12"
            md="auto"
            class="textstep"
            style="padding:10px;max-width:96.7px;"
            :style="{ 'background': color4 }"
            @click="stepfourform()"
            >STEP 4</b-col
          >
        </b-row>
      </b-container>
      <!-- Form -->
      <div class="" style="text-align:left;">
        <b-form @submit="onSubmit">
          <!-- Form 1-->
          <div v-if="show1">
            <b-container class='formposition'>
              <b-row>
                <div class="text formtittle left" style="width:100%">
                  Buat Tabel
                </div>
              </b-row>
              <b-row
                class="justify-content-md-center"
                style="margin-bottom: 12px;"
              >
                <b-col style="" class="labelData">Nama Tabel</b-col>
                <b-col cols="10" class="">
                  <b-form-group id="input-group-1" label="" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="namaTabel"
                      type="text"
                      placeholder=""
                      required
                      class="inputData"
                      style=""
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row
                class="justify-content-md-center"
                style="margin-bottom: 64px;"
              >
                <b-col style="" class="labelData">Jumlah Kolom</b-col>
                <b-col cols="10" class="">
                  <b-form-group id="input-group-2" label="" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="jumlahKolom"
                      placeholder="1"
                      type="number"
                      class="inputData"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row align-h="end">
                <b-col cols="2"
                  ><b-button @click="steptwoform()" style="" class="nav_btn"
                    >Selanjutnya</b-button
                  ></b-col
                >
              </b-row>
            </b-container>
          </div>
          <!-- Form 2-->
          <div v-if="show2">
            <b-container class='formposition'>
              <b-row>
                <div class="text formtittle left" style="width:100%">
                  Isi Data Kolom
                </div>
              </b-row>
              <div
                v-for="(item, index) in Listkolom"
                v-bind:key="index"
                style="margin-bottom: 64px;"
              >
                <b-row>
                  <div class="text formtittle left" style="width:100%">
                    Kolom {{ index + 1 }}
                  </div>
                </b-row>

                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData">Nama Kolom</b-col>
                  <b-col cols="10" class="">
                    <b-form-group
                      id="input-group-1"
                      label=""
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="item.NamaKolom"
                        type="text"
                        placeholder=""
                        required
                        class="inputData"
                        style=""
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData">Tipe</b-col>
                  <b-col cols="10" class="">
                    <b-form-group
                      id="input-group-1"
                      label=""
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="item.TipeKolom"
                        type="text"
                        placeholder=""
                        required
                        class="inputData"
                        style=""
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData">Panjang</b-col>
                  <b-col cols="10" class="">
                    <b-form-group
                      id="input-group-1"
                      label=""
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="item.PanjangKolom"
                        type="text"
                        placeholder=""
                        required
                        class="inputData"
                        style=""
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData">Default</b-col>
                  <b-col cols="10" class="">
                    <b-form-group
                      id="input-group-1"
                      label=""
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="item.DefaultKolom"
                        type="text"
                        placeholder=""
                        required
                        class="inputData"
                        style=""
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData">Null</b-col>
                  <b-col cols="10" class="">
                    <b-form-group label="">
                      <b-form-radio-group
                        v-model="item.selectedNull"
                        :options="options"
                        plain
                      ></b-form-radio-group>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData">Auto Increment</b-col>
                  <b-col cols="10" class="">
                    <b-form-group label="">
                      <b-form-radio-group
                        v-model="item.selectedIncrement"
                        :options="options"
                        plain
                      ></b-form-radio-group>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
            </b-container>
            <!-- End Looping Kolom-->
            <b-container class="nav-btn">
              <b-row align-h="end">
                <b-col cols="2"
                  ><b-button @click="steponeform()" style="" class="nav_btn"
                    >Sebelumnya</b-button
                  ></b-col
                >
                <b-col cols="2"
                  ><b-button @click="stepthreeform()" style="" class="nav_btn"
                    >Selanjutnya</b-button
                  ></b-col
                >
              </b-row>
            </b-container>
          </div>
          <!-- Form 3-->
          <div v-if="show3">
            <b-container class='formposition'>
              <b-row>
                <div
                  class="text formtittle left"
                  style="width:100%;margin-bottom:24px;"
                >
                  Input Data Sampel
                </div>
              </b-row>
              <div
                v-for="(item, index) in sampleData"
                v-bind:key="index"
                style="margin-bottom: 64px;"
              >
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col
                    ><label><span v-html="'Kolom ' + (index + 1)"/></label
                  ></b-col>
                  <b-col cols="10">
                    <b-form-group id="input-group-1" label-for="input-1">
                      <b-form-input
                        id="input-1"
                        v-model="namaTabel"
                        type="text"
                        placeholder=""
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <b-row align-h="end">
                <b-col cols="2"
                  ><b-button @click="steptwoform()" style="" class="nav_btn"
                    >Sebelumnya</b-button
                  ></b-col
                >
                <b-col cols="2"
                  ><b-button @click="stepfourform()" style="" class="nav_btn"
                    >Selanjutnya</b-button
                  ></b-col
                >
              </b-row>
            </b-container>
          </div>
          <!-- Form 4-->
          <div v-if="show4">
            <b-container class='formposition'>
              <b-row>
                <div class="text formtittle left" style="width:100%">
                  Input URL API
                </div>
              </b-row>
              <b-row
                class="justify-content-md-center"
                style="margin-bottom: 12px;"
              >
                <b-col style="" class="labelData">URL</b-col>
                <b-col cols="10" class="">
                  <b-form-group
                    id="input-group-1"
                    label=""
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="URL"
                      type="text"
                      placeholder=""
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row
                class="justify-content-md-center"
                style="margin-bottom: 64px;"
              >
                <b-col style="" class="labelData">Nama API</b-col>
                <b-col cols="10" class="">
            <b-form-group
              id="input-group-1"
              label=""
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="namaAPI"
                type="text"
                placeholder=""
                required
              ></b-form-input>
            </b-form-group>
                </b-col>
              </b-row>
                            <b-row align-h="end">
                <b-col cols="2"
                  ><b-button @click="stepthreeform()" style="" class="nav_btn"
                    >Sebelumnya</b-button
                  ></b-col
                >
                <b-col cols="2"
                  ><b-button style="" class="nav_btn">Selesai</b-button
                  ><!--Ganti Ke Submit--></b-col
                >
              </b-row>
            </b-container>
            <b-container class="nav-btn">

            </b-container>
          </div>
        </b-form>
      </div>
    </b-card>
    <b-card class="mt-3" header="Form Data Result">
      {{ namaTabel }}
      <pre class="m-0">{{ Listkolom }}</pre>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/css/style.css";

export default {
  name: "Home",
  components: {},

  data() {
    return {
      Listkolom: [],
      sampleData: [],
      namaTabel: "",
      namaAPI: "",
      URL: "",
      jumlahKolom: 1,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      color1: "#2a8c97",
      color2: "#32b3c2",
      color3: "#32b3c2",
      color4: "#32b3c2",
      options: [
        { text: "Ya", value: "Yes" },
        { text: "Tidak", value: "No" },
      ],
    };
  },
  computed: {
    getArray() {
      const arr = [];
      for (var i = 1; i <= this.jumlahKolom; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    pushArr() {
      if (this.jumlahKolom > 0) {
        this.Listkolom = [];
        this.sampleData = [];
        for (var i = 1; i <= this.jumlahKolom; i++) {
          console.log(i);
          console.log(this.jumlahKolom);
          this.Listkolom.push({
            NamaKolom: "",
            TipeKolom: "",
            PanjangKolom: "",
            DefaultKolom: "",
            selectedNull: "Yes",
            selectedIncrement: "Yes",
          });
          this.sampleData.push({
            sampel: "",
          });
        }
      }
    },
    steponeform() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.color1 = "#2a8c97";
      this.color2 = "#32b3c2";
      this.color3 = "#32b3c2";
      this.color4 = "#32b3c2";
    },
    steptwoform() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
      this.color1 = "#32b3c2";
      this.color2 = "#2a8c97";
      this.color3 = "#32b3c2";
      this.color4 = "#32b3c2";
      this.pushArr();
    },
    stepthreeform() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
      this.color1 = "#32b3c2";
      this.color2 = "#32b3c2";
      this.color3 = "#2a8c97";
      this.color4 = "#32b3c2";
      this.pushArr();
    },
    stepfourform() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.color1 = "#32b3c2";
      this.color2 = "#32b3c2";
      this.color3 = "#32b3c2";
      this.color4 = "#2a8c97";
      this.pushArr();
    },
  },
};
</script>

<style scoped>

</style>
