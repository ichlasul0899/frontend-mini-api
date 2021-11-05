<template>
  <div class="home">
    <b-card
      style="width:956px;min-height:848px;margin:auto;margin-bottom: 10px;background: rgba(255, 255, 255, 0.9);border: 1px solid #2A8C97;
border-radius: 10px;"
      tittle="Login"
      class="mt-5 text"
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
            class="textstep stepbox pointer"
            cols="12"
            md="auto"
            style=""
            :style="{ 'background-color': color1 }"
            @click="steponeform()"
            @mouseover="hover1 = true"
            @mouseleave="hover1 = false"
            :class="{ active: hover1 }"
            >STEP 1</b-col
          >
          <b-col
            cols="12"
            md="auto"
            class="textstep stepbox pointer"
            style=""
            :style="{ 'background-color': color2 }"
            @click="steptwoform()"
            @mouseover="hover2 = true"
            @mouseleave="hover2 = false"
            :class="{ active: hover2 }"
            >STEP 2</b-col
          >
          <b-col
            cols="12"
            md="auto"
            class="textstep stepbox pointer"
            style=""
            :style="{ 'background-color': color3 }"
            @mouseover="hover3 = true"
            @mouseleave="hover3 = false"
            :class="{ active: hover3 }"
            @click="stepthreeform()"
            >STEP 3</b-col
          >
          <b-col
            cols="12"
            md="auto"
            class="textstep stepbox pointer"
            style=""
            :style="{ 'background-color': color4 }"
            @mouseover="hover4 = true"
            @mouseleave="hover4 = false"
            :class="{ active: hover4 }"
            @click="stepfourform()"
            >STEP 4</b-col
          >
        </b-row>
      </b-container>
      <!-- Form -->
      <div class="" style="text-align:left;">
        <b-form @submit="steptwoform">
          <!-- Form 1-->
          <div v-if="show1">
            <b-container class="formposition">
              <b-row>
                <div
                  class="text formtittle left"
                  style="width:100%; font-weight: bold;"
                >
                  Buat Tabel
                </div>
              </b-row>
              <b-form @submit.prevent="steptwoform()">
                <b-row
                  class="justify-content-md-center"
                  style="margin-bottom: 12px;"
                >
                  <b-col style="" class="labelData" cols="2">Nama Tabel</b-col>
                  <b-col class="">
                    <b-form-group
                      id="input-group-1"
                      label=""
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form1.namaTabel"
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
                  <b-col style="" class="labelData" cols="2"
                    >Jumlah Kolom</b-col
                  >
                  <b-col cols="" class="">
                    <b-form-group
                      id="input-group-2"
                      label=""
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-2"
                        v-model="form1.jumlahKolom"
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
                    ><b-button
                      @click="steptwoform()"
                      style=""
                      class="nav_btn"
                      type="submit"
                      >Selanjutnya</b-button
                    ></b-col
                  >
                </b-row>
              </b-form>
            </b-container>
          </div>
          <!-- Form 2-->
          <div v-if="show2">
            <b-container class="formposition">
              <b-form @submit.prevent="stepthreeform()()">
                <b-row>
                  <div class="text formtittle left" style="width:100%">
                    Isi Data Kolom
                  </div>
                </b-row>
                <div
                  v-for="(item, index) in form2"
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
                          v-model="item.nama_kolom"
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
                        <b-form-select
                          id="select-1"
                          v-model="item.tipe"
                          type="text"
                          :options="TipeOption"
                          placeholder=""
                          required
                          class="inputData"
                          style="width:100%"
                        ></b-form-select>
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
                          v-model="item.panjang"
                          :option="TipeOption"
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
                          v-model="item.default"
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
                          v-model="item.isNull"
                          :options="options"
                          plain
                        ></b-form-radio-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </b-form>
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
                  ><b-button
                    @click="stepthreeform()"
                    style=""
                    class="nav_btn"
                    type="submit"
                    >Selanjutnya</b-button
                  ></b-col
                >
              </b-row>
            </b-container>
          </div>
          <!-- Form 4-->
          <div v-if="show4">
            <b-container class="formposition">
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
                  <b-col class="centering text"
                    ><span v-html="'Kolom ' + (item)"
                  /></b-col>
                  <b-col cols="10">
                    <b-form-group id="input-group-1" label-for="input-1">
                      <b-form-input
                        id="input-1"
                        v-model="form4.item"
                        type="text"
                        placeholder=""
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <b-row align-h="end">
                {{sampleData}}
                <b-col cols="2"
                  ><b-button @click="stepthreeform()" style="" class="nav_btn"
                    >Sebelumnya</b-button
                  ></b-col
                >
                <b-col cols="2"
                  ><b-button style="" class="nav_btn" @click="buatAPI()"
                    >Submit</b-button
                  ></b-col
                >
              </b-row>
            </b-container>
          </div>
          <!-- Form 3-->
          <div v-if="show3">
            <b-container class="formposition">
              <b-form @submit.prevent="stepfourform()">
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
                      id="input-group-3-1"
                      label=""
                      label-for="input-3-1"
                    >
                      <b-form-input
                        id="input-3-1"
                        v-model="form3.url"
                        type="url"
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
                      id="input-group-3-2"
                      label=""
                      label-for="input-3-2"
                    >
                      <b-form-input
                        id="input-3-2"
                        v-model="form3.namaAPI"
                        type="text"
                        placeholder=""
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="end">
                  <b-col cols="2"
                    ><b-button @click="steptwoform()" style="" class="nav_btn"
                      >Sebelumnya</b-button
                    ></b-col
                  >
                  <b-col cols="2"
                    ><b-button
                      @click="stepfourform()"
                      style=""
                      class="nav_btn"
                      type="submit"
                      >Selanjutnya</b-button
                    ></b-col
                  >
                </b-row>
              </b-form>
            </b-container>
            <b-container class="nav-btn"> </b-container>
          </div>
        </b-form>
      </div>
    </b-card>
    <b-card class="mt-3 " header="Form Data Result">
      Nama Tabel : {{ form1.namaTabel }}
      <div></div>
      Jumlah Kolom : {{ form1.jumlahKolom }}
      <div></div>
      <pre class="m-0">form2 : {{ form2 }}</pre>
      <pre class="m-0">URL : {{ form3 }}</pre>
      <pre class="m-0">last : {{ form4 }}</pre>
    </b-card>
    <finish />
  </div>
</template>
<style>
.active {
  background-color: #294950 !important;
}
</style>
<script>
// import axios from "axios";
import finish from "./FinishModal_EditURL.vue";
import "../assets/css/style.css";

export default {
  name: "Home",
  components: {
    finish,
  },

  data() {
    return {
      form1: {
        namaTabel: "",
        jumlahKolom: 1,
      },
      form2: [],
      form3: {
        url: "",
        namaAPI: "",
      },
      form4:{},
      sampleData: [],
      jumlahKolom: 1,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      color1: "rgba(42, 140, 151, 1)",
      color2: "#32b3c2",
      color3: "#32b3c2",
      color4: "#32b3c2",
      TipeOption: [
        { value: "int", text: "Integer" },
        { value: "double", text: "Double" },
        { value: "decimal", text: "Decimal" },
        { value: "string", text: "String" },
        { value: "object", text: "Object" },
        { value: "array", text: "Array" },
        { value: "date", text: "Date" },
        { value: "bool", text: "Bool" },
        { value: "null", text: "Null" },
        { value: "regex", text: "Regex" },
        { value: "uuid", text: "Uuid" },
        { value: "timestamp", text: "TimeStamp" },
        { value: "mixed", text: "Mixed" },
      ],
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
    buatAPI() {
      this.$bvModal.show("modal-finish");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    pushArr() {
      if (this.form1.jumlahKolom > 0) {
        this.form2 = [];
        this.sampleData = [];
        for (var i = 1; i <= this.form1.jumlahKolom; i++) {
          this.form2.push({
            nama_kolom: "",
            tipe: "",
            panjang: "",
            default: "",
            isNull: "Yes",
          });
        }
      }
    },
    steponeform() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.color1 = "rgba(42, 140, 151, 1)";
      this.color2 = "#32b3c2";
      this.color3 = "#32b3c2";
      this.color4 = "#32b3c2";
    },
    steptwoform() {
      if (!this.form1.namaTabel == "") {
        this.show1 = false;
            this.show2 = true;
            this.show3 = false;
            this.show4 = false;
            this.color1 = "#32b3c2";
            this.color2 = "rgba(42, 140, 151, 1)";
            this.color3 = "#32b3c2";
            this.color4 = "#32b3c2";
            this.pushArr();
        // axios
        //   .post("http://localhost:3000/api/table", {
        //     nama_tabel: this.form1.namaTabel,
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     this.show1 = false;
        //     this.show2 = true;
        //     this.show3 = false;
        //     this.show4 = false;
        //     this.color1 = "#32b3c2";
        //     this.color2 = "rgba(42, 140, 151, 1)";
        //     this.color3 = "#32b3c2";
        //     this.color4 = "#32b3c2";
        //     this.pushArr();
        //   })
        //   .catch((error) => {
        //     alert(error);
        //   });
      } else {
        alert("Harap Isi Terlebih Dahulu Nama Tabel");
      }
    },
    stepthreeform() {
      if (!this.form1.namaTabel == "") {
        console.log(this.form2);
        // axios.post("http://localhost:3000/api/schema", {
        //   nama_tabel: this.form1.namaTabel,
        //   data: this.form2,
        // });
        this.form2.map((response) => {
          this.sampleData.push(response.nama_kolom);
          console.log(response.nama_kolom);
        })
        console.log(this.sampleData);
        // for (var i = 0; i <= this.form2.length; i++) {
        //   console.log(this.form2)
        // }
        // console.log(this.sampleData);
        this.show1 = false;
        this.show2 = false;
        this.show3 = true;
        this.show4 = false;
        this.color1 = "#32b3c2";
        this.color2 = "#32b3c2";
        this.color3 = "rgba(42, 140, 151, 1)";
        this.color4 = "#32b3c2";
      } else {
        alert("Harap Isi Terlebih Dahulu Nama Tabel");
      }
    },
    stepfourform() {
      if (!this.form1.namaTabel == "" && !this.form3.namaAPI == "") {
        // axios.post("http://localhost:3000/api", {
        //   nama_tabel: this.form1.namaTabel,
        //   url_name: this.form3.url,
        // });
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = true;
        this.color1 = "#32b3c2";
        this.color2 = "#32b3c2";
        this.color3 = "#32b3c2";
        this.color4 = "rgba(42, 140, 151, 1)";
        this.pushArr();
      } else if (this.form1.namaTabel == "") {
        alert("Harap Isi Terlebih Dahulu Nama Tabel");
      } else if (this.form3.namaAPI == "") {
        alert("Harap Isi Terlebih Dahulu Nama API");
      }
    },
    submission() {
      // var wilayah = this.form1.namaTabel;
      // wilayah = wilayah.toLowerCase();
      //axios.post("http://localhost:3000/" + wilayah,{
      // Object
      //})
    },
  },
};
</script>

<style scoped></style>
