<template>
   <section class="bg-[#112851] py-23">
      <h1 class="text-center header-text text-[3rem] text-secondaryTheme">Blog</h1>
   </section>
   <section class="custom-width py-[9.06rem] grid grid-cols-[repeat(auto-fit,minmax(384px,1fr))] gap-6">
      <nuxt-link 
      v-for="(item, index) in [1,2,3,4,5,6,7,8,9]"
      :key="index"
      :to="`/resources/${index}`"
      class="blog-card bg-[#FEEFC4] rounded-2xl overflow-hidden flex flex-col grow"
      >
         <article
         >
            <div class="w-full bg-[#D9D9D9] h-71">
   
            </div>
            <div class="p-4">
               <h6 class="header-text text-[1rem] text-primaryTheme mb-2">This will be the title of the blog post</h6>
               <p class="small-texts text-primaryTheme">April 20, 2025</p>
            </div>
         </article>
      </nuxt-link>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>