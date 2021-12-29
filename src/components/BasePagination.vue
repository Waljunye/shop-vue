<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        href="#"
        @click.prevent="toPreviousPage"
        class="pagination__link pagination__link--arrow"
        :class="{'pagination__link--disabled' : isToPreviousPageHidden}"
        aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" :key="index" v-for="(pageNumber, index) in pageCount">
      <a
        href="#"
        class="pagination__link"
        :class="{'pagination__link--current': pageNumber === page}"
        @click.prevent=" paginate(pageNumber)">
        {{pageNumber}}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        :class="{'pagination__link--disabled' : isToNextPageHidden}"
        href="#"
        @click.prevent="toNextPage"
        aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'to-page',
  },
  name: 'BasePagination',
  props: ['page', 'perPage', 'count'],
  methods: {
    paginate(page) {
      this.$emit('to-page', page);
    },
    toNextPage() {
      if (!this.isToNextPageHidden) {
        this.$emit('to-page', this.page + 1);
      }
    },
    toPreviousPage() {
      if (!this.isToPreviousPageHidden) {
        this.$emit('to-page', this.page - 1);
      }
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.count / this.perPage);
    },
    isToPreviousPageHidden() {
      return this.page === 1;
    },
    isToNextPageHidden() {
      return Math.round(this.count / this.perPage) === 1
        ? true
        : this.page === (this.count / this.perPage);
    },
  },
};
</script>

<style scoped>

</style>
