<template>
  <div class="message">
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-modal
      ref="my-modal"
      hide-footer
      hide-header
      centered
      style="width: 400px; !important;"
    >
      <template #default="{ close }" style="padding-top:0 !important">
        <b-container @click="close()" style="" >
          <b-row>
            <b-col sm style="text-align:right"
              ><b-icon
                @click="close()"
                icon="x-circle-fill"
                scale="1.5"
                variant="secondary"
              ></b-icon
            ></b-col>
          </b-row>
          <b-row
            ><div
              class="centering"
              style="justify-content:center;height: 10rem;"
            >
              <b-icon
                icon="check-circle-fill"
                scale="2"
                style="color:#2A8C97;width:75px;height:75px;"
              ></b-icon></div
          ></b-row>
          <b-row>
            <div class="centering text" style="justify-content:center">
              Data Berhasil Ditambah
            </div></b-row
          >
        </b-container>
      </template>
    </b-modal>
  </div>
  <!--NOTE INI BUAT TESTING DOANG JANGAN LUPA HAPUS
  KALO LUPA TOLONG HAPUSIN YAH. SAMA DI index.js DI FILE router TY
  -->
</template>

<script>
export default {
  data: function() {
    return {
      array: [],
      x: 3,
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
  computed: {
    getArray() {
      const arr = this.array;
      for (var i = 1; i <= this.x; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>
