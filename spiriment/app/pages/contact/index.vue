<template>
   <section class="py-8 md:py-10 lg:py-[6.19rem] flex flex-col lg:flex-row justify-between custom-width gap-8 lg:gap-0 lg:px-0">
      <h2 class="text-terracotaTheme header-text text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] w-full lg:w-[33.67%] text-center lg:text-left leading-tight">
         Contact Us
      </h2>
      <form class="flex flex-col gap-3 md:gap-4 w-full lg:w-auto">
         <article class="input-field w-full lg:w-138">
            <label for="organization" class="label-text text-terracotaTheme text-sm md:text-base">Full Name <span class="text-[#E0745F]">*</span></label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="text" name="organization" id="organization" class="input-text w-full text-sm md:text-base">
            </div>
         </article>
         <article class="input-field w-full lg:w-138">
            <label for="phone" class="label-text text-terracotaTheme text-sm md:text-base">Phone Number</label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="number" name="phone" id="phone" class="input-text w-full text-sm md:text-base">
            </div>
         </article>
         <article class="input-field w-full lg:w-138">
            <label for="mail" class="label-text text-terracotaTheme text-sm md:text-base">Email <span class="text-[#E0745F]">*</span></label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="email" name="mail" id="mail" placeholder="Aa" class="input-text w-full text-sm md:text-base">
            </div>
         </article>
         <article class="input-field w-full lg:w-138">
            <label for="message" class="label-text text-terracotaTheme text-sm md:text-base">Message</label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[1rem] md:rounded-[1.125rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <textarea name="message" id="message" cols="30" rows="6" class="input-text w-full text-sm md:text-base resize-none" placeholder="Aa"></textarea>
            </div>
         </article>
         <button class="w-full bg-[#EAA294] py-2.5 text-center mt-2 md:mt-[0.56rem] rounded-[625rem] text-terracotaTheme text-sm md:text-[1rem] font-medium leading-[1.4rem] hover:opacity-90 transition-opacity">Submit</button>
      </form>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>