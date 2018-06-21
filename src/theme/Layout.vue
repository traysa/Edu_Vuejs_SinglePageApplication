
<template>
    <div id="app">
        <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
                <category></category>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue'
    import AppFooter from './AppFooter.vue'
    import Category from './Category.vue'
    export default {
      components: {
        'app-header': AppHeader,
        'app-footer': AppFooter,
        'category': Category
      }
    }
</script>

<style lang="scss">
    $primary: hotpink;
    @import '~bulma';

    .columns{
        flex-wrap: wrap
    }
</style>
