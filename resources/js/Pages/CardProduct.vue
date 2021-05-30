<template>
  <div class="container">
    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" :src="`${product.image}`"></v-img>
      <v-card-title>
        <div class="font-weight-black">{{ product.name }}</div>
      </v-card-title>
      <v-card-title>
        <div>Стоимость: {{ product.cost }}</div>
      </v-card-title>
      <v-card-text>
        <div class="text-left">Описание: {{ product.description }}</div>
      </v-card-text>
      <div></div>
      <v-btn color="black" class="white--text mb-2" @click="addToCart(product)"
        >В корзину</v-btn
      >
    </v-card>
    <v-card
      class="mx-auto my-12"
      max-width="374"
      v-if="$store.state.cart.cart.length > 0"
    >
      <v-card-title> Ваша корзина </v-card-title>
      <v-simple-table class="products mt-3">
        <thead>
          <tr>
            <th class="text-center">Название</th>
            <th class="text-center">Количество</th>
            <th class="text-center">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.state.cart.cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.totalPrice }}</td>
            <td v-if="item.quantity === 1">
              <button
                class="red white--text px-3 py-2 rounded-lg"
                @click="removeFromCart(item)"
              >
                <i class="fa fa-trash"></i>
              </button>
            </td>
            <td v-if="item.quantity > 1">
              <button
                class="red white--text px-3 py-2 rounded-lg"
                @click="removeFromCart(item)"
              >
                -1
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="text-right">Итог:</td>
            <td>{{ totalPrice }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <GooglePay :cost="`${totalPrice}`" />
    </v-card>
  </div>
</template>

<script>
/*global axios  */
import GooglePay from "./GooglePay.vue";
export default {
  components: { GooglePay },
  data() {
    return {
      product: {
        name: "",
        cost: "",
        description: "",
        image: "",
        id: "",
      },
    };
  },
  methods: {
    read() {
      const url = `api/products/${this.$route.params.id}`;
      axios
        .get(url)
        .then((response) => {
          const product = response.data;
          this.product.id = product.id;
          this.product.name = product.name;
          this.product.cost = product.cost;
          this.product.description = product.description;
          this.product.image = product.image;
        })
        .catch(function () {});
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.$store.state.cart.cart) {
        total += item.totalPrice;
      }
      return total.toFixed(2);
    },
  },
  created() {
    this.read();
  },
};
</script>


