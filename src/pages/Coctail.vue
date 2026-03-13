<script setup>
import axios from 'axios';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { COCATIL_BY_ID } from '@/constants'
import AppLayout from '@/components/AppLayout.vue';

const coctail = ref(null)
const route = useRoute();

const coctailId = computed(() => route.path.split("/").pop())

const ingredients = computed(() => {
    const ingredients = [];

    for(let i=1; i <= 15; i++){
        if(!coctail.value[`strIngredient${i}`]) break

        const ingredient= {}
        ingredient.name = coctail.value[`strIngredient${i}`]
        ingredient.measure = coctail.value[`strMeasure${i}`]

        ingredients.push(ingredient)
    }

    return ingredients;
})

async function getCoctail(){
    const data = await axios.get(`${COCATIL_BY_ID}${coctailId.value}`);
    coctail.value = data?.data?.drinks[0];
}


getCoctail();
</script>

<template>
    <div v-if="coctail" class="wrap">
        <AppLayout :imgUrl="coctail.strDrinkThumb">
            <div class="wrapper">
                <div class="info">
                    <div class="title">{{ coctail.strDrink}}</div>
                    <div class="line"></div>
                    <div class="list">
                        <div v-for="(item,key) in ingredients" :key="key" class="list-item">
                            {{ item.name }}
                            <template v-if="item.measure">
                                |
                                {{ item.measure }}
                            </template>
                        </div>
                    </div>
                    <div class="instructions">
                        {{ coctail.strInstructions }}
                    </div>
                </div>
            </div>
        </AppLayout>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'


</style>