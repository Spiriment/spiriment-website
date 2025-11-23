<template>
  <div 
    class="basic-flex px-6 py-4 rounded-[6.25rem] gap-4 w-fit"
    :class="isDark ? 'bg-primaryTheme' : 'bg-secondaryTheme'"
    :style="{ backgroundColor: textTheme}"
  >
    <h3 
      class="text-[1rem] leading-[160%]"
      :style="{ color: iconTheme }"
    >
      Download the App
    </h3>
    
    <div class="basic-flex gap-3">
      <IconsAppleIcon 
        :color="iconTheme"
      />
      <IconsPlayStoreIcon 
        :color="iconTheme"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean, // should be Boolean not String
    default: true
  },
  iconTheme: {
    type: String,
    default: '#1D2F21'
  },
  textTheme: {
    type: String,
    required: false
  }
})
</script>

<style lang="scss" scoped>

</style>
