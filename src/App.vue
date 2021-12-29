<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <AsideFilter
        :category-id.sync="filterCategoryId"
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :color-id.sync="filterColorId"></AsideFilter>
      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
      </section>
    </div>
  </main>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import AsideFilter from './components/AsideFilter.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination, AsideFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;
      if (this.filterPriceFrom) {
        filteredProducts = filteredProducts
          .filter((product) => product.price <= parseInt(this.filterPriceFrom, 10));
      }
      if (this.filterPriceTo) {
        filteredProducts = filteredProducts
          .filter((product) => product.price >= parseInt(this.filterPriceTo, 10));
      }
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts
          .filter((product) => product.category.includes(this.filterCategoryId));
      }
      if (this.filterColorId) {
        filteredProducts = filteredProducts
          .filter((product) => product.colors.includes(this.filterColorId));
      }
      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
