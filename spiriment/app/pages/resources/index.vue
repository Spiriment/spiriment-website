<template>
   <section class="bg-[#112851] py-12 md:py-16 lg:py-23">
      <h1 class="text-center header-text text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-secondaryTheme leading-tight px-4">
         Blog
      </h1>
   </section>
   <section class="custom-width py-8 md:py-12 lg:py-[9.06rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <nuxt-link 
      v-for="(item, index) in [1,2,3,4,5,6,7,8,9]"
      :key="index"
      :to="`/resources/${index}`"
      class="blog-card bg-[#FEEFC4] rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02] duration-300"
      >
         <article class="h-full flex flex-col">
            <div class="w-full bg-[#D9D9D9] h-40 md:h-52 lg:h-71">
               <!-- Image placeholder -->
            </div>
            <div class="p-4 grow">
               <h6 class="header-text text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-primaryTheme mb-2 leading-tight">
                  This will be the title of the blog post
               </h6>
               <p class="small-texts text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] text-primaryTheme">
                  April 20, 2025
               </p>
            </div>
         </article>
      </nuxt-link>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>