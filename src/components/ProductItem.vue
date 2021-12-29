<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.name + 'image'">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.name }}
      </a>
    </h3>

    <span class="catalog__price">
              {{product.price}} ₽
            </span>
    <form>
      <ul class="colors colors--black">
        <li class="colors__item" v-for="colorId in product.colors" :key="colorId">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              :value="colors[colorId -  1].color"
              checked="checked"
              v-model="color">
            <span class="colors__value" :style="{backgroundColor: colors[colorId -  1].color}">
                    </span>
          </label>
        </li>
      </ul>
    </form>
  </li>
</template>

<script>
import colors from '../data/colors';

export default {
  name: 'CatalogItem',
  props: ['product'],
  data() {
    return {
      color: colors[this.product.colors[0] - 1].color,
    };
  },
  computed: {
    colors() {
      return colors;
    },
  },
};
</script>

<style scoped>

</style>
