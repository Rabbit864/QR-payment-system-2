<template>
  <div class="container">
    <v-simple-table class="products mt-3" v-if="this.$route.params.cart">
      <thead>
        <tr>
          <th class="text-center">Название</th>
          <th class="text-center">Количество</th>
          <th class="text-center">Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$route.params.cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.totalPrice }}</td>
        </tr>
        <tr>
          <td colspan="2" class="text-right">Итог:</td>
          <td>{{ totalPrice }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-alert dense type="success">Вы успешно оплатили товар</v-alert>
  </div>
</template>

<script>
export default {
    computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.$route.params.cart) {
        total += item.totalPrice;
      }
      return total.toFixed(2);
    },
  },
};
</script>


