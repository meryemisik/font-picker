<template>
  <div class="home">
    <McFontpicker auto-load load-all-variants v-model="font" />
    <div class="text">
      <h4>Current value: {{ font }}</h4>
      <span :style="'font-family: ' + font">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  created() {
    // if(User.loggedIn()){
    //   this.$router.push({name: 'home'})
    // }
  },

  data() {
    return {
      font: "Open Sans",
      variants: [
        { italic: false, weight: 400 },
        { italic: true, weight: 400 },
        { italic: false, weight: 700 },
        { italic: true, weight: 700 },
      ],
    };
  },
};
</script>

<style scoped>
.text {
  margin-top: 15px;
  text-align: center;
  padding: 20px;
}
.home {
  margin: auto;
  width: 50%;
}
h4 {
  color: red;
}
</style>
