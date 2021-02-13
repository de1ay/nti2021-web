<template lang="pug">
h1.h1 Состояние склада
div.warehouse
  div.shelf
    div.shelf11.shelf_inter
      div.item(v-for="item in shelf11" v-if="shelf11")
        div(v-if="item") {{item.system_id}}
        div(v-else) X
    div.shelf12.shelf_inter
      div.item(v-for="item in shelf12" v-if="shelf12")
        div(v-if="item") {{item.system_id}}
        div(v-else) X
  div.shelf
    div.shelf21.shelf_inter
      div.item(v-for="item in shelf21" v-if="shelf21")
        div(v-if="item") {{item.system_id}}
        div(v-else) X
    div.shelf22.shelf_inter
      div.item(v-for="item in shelf22" v-if="shelf22")
        div(v-if="item") {{item.system_id}}
        div(v-else) X
</template>

<script>
import axios from '@core/api/axios';

export default {
  name: 'Warehouse',
  data() {
    return {
      shelf11: null,
      shelf12: null,
      shelf21: null,
      shelf22: null,
      timer: null,
    };
  },
  methods: {
    timerfunc() {
      axios
        .get('https://api.offsound.ru/item/')
        // eslint-disable-next-line no-return-assign
        .then((response) => {
          // eslint-disable-next-line camelcase
          const shelf11 = [];
          const shelf12 = [];
          const shelf21 = [];
          const shelf22 = [];
          // eslint-disable-next-line no-var,no-plusplus,vars-on-top
          for (var i = 0; i < 216; i++) {
            // eslint-disable-next-line no-loop-func
            const obj = response.data.results.find((o) => o.address === i + 1);
            if (i < 108) {
              if (i % 2) {
                shelf11.push(obj);
              } else {
                shelf12.push(obj);
              }
            } else {
              // eslint-disable-next-line no-lonely-if
              if (i % 2) {
                shelf21.push(obj);
              } else {
                shelf22.push(obj);
              }
            }
          }
          // eslint-disable-next-line camelcase
          this.shelf11 = shelf11;
          this.shelf12 = shelf12;
          this.shelf21 = shelf21;
          this.shelf22 = shelf22;
        });
    },
  },
  mounted() {
    this.timer = setInterval(this.timerfunc.bind(this), 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.h1 {
  font-family: $font-firaSansCondensed;
}
.warehouse {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 2px solid $color-primaryDarkest;
  border-radius: 5px;
  margin-bottom: 5em;
}
.shelf {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 2px solid $color-primaryDark;
  border-radius: 5px;
  background-color: $color-primary;
  padding: 1em;
}
.shelf_inter {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: $color-primaryLight;
  border-radius: 5px;
  padding: 0.7em;
}
.item {
  border: 2px solid $color-neutralLightest;
  border-radius: 5px;
  padding: 0.5em;
  padding-bottom: 1em;
  font-family: $font-firaSansCondensed;
  text-align: center;
}
</style>
