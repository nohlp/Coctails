<script setup>
import { ref } from 'vue';
import AppLayout from '@/components/AppLayout.vue';

import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, coctails } = storeToRefs( rootStore );
const { ingredient } =ref(null);

function getCoctails(){
    rootStore.getCoctails(ingredient.value);
}
</script>

<template>
    <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
        <div class="wrapper">
            <div class="info">
                <div class="title">Choose your drink</div>
                <div class="line"></div>
                <div class="select-wrapper">
                    <el-select v-model="ingredient" @change="getCoctails" placeholder="Choose main ingredient" class="select" size="large" style="width: 240px">
                        <el-option
                        v-for="item in ingredients"
                        :key="item.strIngredient1"
                        :label="item.strIngredient1"
                        :value="item.strIngredient1"
                        />
                    </el-select>
                    <div class="text">
                        Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
                    </div>
                    <img src="/src/assets/img/coctails.png" alt="Coctailss" class="img">
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.wrapper
    display: center
    justify-content: center
    align-items: center

.info
    padding: 80px 0
    text-align: center

.select-wrapper
    padding-top: 50px

.select
    width: 220px

.text
    max-width: 516px
    margin: 0 auto
    padding-top: 50px
    line-height: 36px
    letter-spacing: 0.1em
    color: $textMuted

.img
    margin-top: 60px
</style>