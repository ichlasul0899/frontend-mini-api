<template>
  <div class="">
    <b-modal
      ref="modal-finish"
      id="modal-finish"
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
</template>

<script>
export default {
  data: function() {
    return {
    };
  },
  methods: {

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
