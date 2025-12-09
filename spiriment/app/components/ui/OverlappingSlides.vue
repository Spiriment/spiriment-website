<template>
  <div class="flex w-full overflow-x-auto">
    <article 
      v-for="(item, index) in slidingCardContents"
      :key="item.id"
      class="h-[35.69rem] max-w-[26.69rem] rounded-3xl shrink-0 transition-all duration-300 flex flex-col gap-6"
      :class="[
        index > 0 ? '-ml-72' : 'ml-0', 
        `z-[${10 + index}]`,
        item.imgOrder && item.imgOrder === '1' ? 'pb-11' : 'pt-11'
      ]"
      :style="{ backgroundColor: item.cardTheme }"
    >
      <div 
      class="flex flex-col text-continer min-h-34 px-10"
      :style="{ order: item.imgOrder === '1' ? 2 : 1 }"
      >
        <h4
          class="font-bold text-secondaryTheme leading-[120%] text-[1.75rem] mb-4"
          :style="{ color: item.textTheme || '#FFFAEC' }"
        >
          {{ item.title }}
        </h4>
        <p
          class="small-texts text-secondaryTheme"
          :style="{ color: item.textTheme || '#FFFAEC' }"
        >
          {{ item.description }}
        </p>
      </div>
      <div
        class="image-container mx-auto grow max-w-full overflow-hidden"
        :style="{
          width: item.imgWidth || '100%',
          order: item.imgOrder === '1' ? 1 : 2
        }"
      >
        <NuxtImg
          v-if="item.imgSrc"
          :src="`/images/${item.imgSrc}`"
          class="w-full h object-cover"
          :alt="item.title"
        />
      </div>
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
