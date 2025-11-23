<template>
  <div class="flex w-full overflow-x-auto">
        <article 
            v-for="(item, index) in slidingCardContents"
            :key="item.id"
            class="h-[35.69rem] px-10 pt-11 max-w-[26.69rem] rounded-3xl shrink-0 
                transition-all duration-300"
            :class="[
                index > 0 ? '-ml-72' : 'ml-0', 
                `z-[${10 + index}]`               
            ]"
            :style="{ backgroundColor: item.cardTheme }"
        >
            <h4 class="font-bold text-secondaryTheme leading-[120%] text-[1.75rem] mb-4"
            :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
            >
                {{ item.title }}
            </h4>
            <p class="small-texts text-secondaryTheme"
            :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
            >
                {{ item.description }}
            </p>
        </article>
    </div>
</template>

<script setup>
defineProps({
    slidingCardContents: {
        type: Array,
        required: true
    }
})


</script>

<style lang="scss" scoped>

</style>