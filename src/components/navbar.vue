<template>
  <div>
      <b-container
        style="background-color:#294950;margin:0px 0px 0px 0px;max-width:100%;max-height:124px;min-width:100%;min-height:124px;display:block;"
      >
        <b-row fluid style="color:white;min-height:124px;align-items: center;">
          <b-col style="text-align: initial;">
            <b-row>
              <b-col class="col-2" md="auto" style="width:fit-content;"
                ><router-link
                  to="/home"
                  style="text-decoration: none; color: inherit;"
                >
                  <b-img
                    fluid
                    :src="require('../assets/Group 10.png')"
                    alt="Image 1"
                    style="max-height:67px;"
                  ></b-img
                ></router-link>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            style="align-items: center;
    justify-content: flex-end;
    display: inherit;"
          >
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            <div style="margin-left:16px;margin-right:36px;" class="textbtn">
              Hi,{{ user }}!
            </div>
            <b-button
              class="log_btn text"
              type="submit"
              style="border-radius: 10px !important;"
              variant="primary"
              @click="logout()"
              >Logout</b-button
            >
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import "../assets/css/style.css";

export default {
  data() {
    return {
      user: "Admin",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
