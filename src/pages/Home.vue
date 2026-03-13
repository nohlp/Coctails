<script setup>
import AppLayout from '@/components/AppLayout.vue';
import CoctailThumb from '@/components/CoctailThumb.vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, coctails } = storeToRefs( rootStore );

function getCoctails(){
    rootStore.getCoctails(rootStore.ingredient);
}

function removeIngredient(){
    rootStore.setIngredinet(null);
}
</script>

<template>
    <AppLayout imgUrl="/src/assets/img/bg-1.jpg" :backFunc="removeIngredient" :id-back-button-visible="!!ingredient">
        <div class="wrapper">
            <div v-if="!coctails || !ingredient" class="info">
                <div class="title">Choose your drink</div>
                <div class="line"></div>
                <div class="select-wrapper">
                    <el-select 
                        v-model="rootStore.ingredient" 
                        @change="getCoctails" 
                        placeholder="Choose main ingredient" 
                        class="select" 
                        size="large" 
                        filterable
                        allow-create
                        style="width: 240px"
                    >
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
                    <img src="/src/assets/img/coctails.png" alt="coctail" class="img">
                </div>
            </div>
            <div v-else class="info">
                <div class="title">COCKTAILS WITH {{ ingredient}}</div>
                <div class="line"></div>
                <div class="coctails">
                    <CoctailThumb 
                        v-for="coctail in coctails" 
                        :key="coctail.idDrink" 
                        :coctail="coctail"/>
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

.coctails
    display: flex
    flex-wrap: wrap

    align-items: center
    max-height: 600px
    overflow-y: auto
    padding-top: 60px
</style>