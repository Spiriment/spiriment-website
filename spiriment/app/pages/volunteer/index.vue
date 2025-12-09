<template>
    <section class="w-full pt-26.5 bg-terracotaTheme pb-16.25">
      <div class="custom-width">
         <div class="w-[56.17%] mx-auto text-center">
             <h1 class="header-text text-secondaryTheme text-[3rem]">
                 Use your skills to help people grow in their walk with God
             </h1>
             <p class="mt-4 mb-6 small-texts text-secondaryTheme">
                 We’re building Spiriment with faith and code, and we need volunteers who believe in both. If you’re a designer, developer, writer, pastor, or just passionate about discipleship, we’d love to build with you
             </p>
             <button class="w-fit mx-auto py-4 px-6 rounded-[6.25rem] bg-secondaryTheme text-[1.2rem] text-terracotaTheme font-bold">
                 Apply to Volunteer
             </button>
          </div>
          <div class="mt-8.5 w-fit mx-auto max-w-249">
             <NuxtImg src="/images/volunteer.png"/>
          </div>
      </div>
  </section>
  <section class="custom-width mt-18">
   <div class="flex justify-between mb-6">
      <div class="w-[36.33%]">
         <h3 class="text-terracotaTheme font-bold leading-[120%] text-[2.0625rem] mb-4">
            We welcome hearts and hands in every form
         </h3>
         <ul class="text-[#4F4F4F] small-texts list-disc pl-4.5 mb-6">
            <li>Designers</li>
            <li>Developers</li>
            <li>Content Creators</li>
            <li>Spiritual Leaders</li>
            <li>Community Builder</li>
         </ul>
         <button class="w-fit mx-auto py-4 px-6 rounded-[6.25rem] bg-terracotaTheme text-secondaryTheme">
            Apply to Volunteer
         </button>
      </div>
      <div class="w-76.5 mt-[0.94rem]">
         <NuxtImg src="/icons/volunteer1.svg" class="w-full"/>
      </div>
   </div>
   <div class="flex gap-6 pb-18 justify-end">
      <div class="flex-col gap-4.5 flex">
         <NuxtImg src="/images/grid1.png" class="w-[52.04%] self-end"/>
         <NuxtImg src="/images/grid2.png" class="w-full"/>
      </div>
      <div class="flex-col gap-4.5 flex">
         <NuxtImg src="/images/grid3.png" class="w-full"/>
         <NuxtImg src="/images/grid4.png" class="w-full"/>
      </div>
   </div>
  </section>
   <section class="py-[6.19rem] flex justify-between custom-width">
      <h2 class="text-terracotaTheme header-text text-[2.5rem] w-[33.67%]">
         Ready to join the mission?
      </h2>
   <form class="flex flex-col gap-4">
         <article class="input-field w-138">
            <label for="organization" class="label-text text-terracotaTheme">Full Name/Organization <span class="text-[#E0745F]">*</span></label>
            <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="text" name="organization" id="organization" class="input-text w-full
               ">
            </div>
         </article>
         <article class="input-field w-138">
            <label for="phone" class="label-text text-terracotaTheme">Phone Number</label>
            <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="number" name="phone" id="phone" class="input-text w-full
               ">
            </div>
         </article>
         <article class="input-field w-138">
            <label for="mail" class="label-text text-terracotaTheme">Email <span class="text-[#E0745F]">*</span></label>
            <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="email" name="mail" id="mail" placeholder="Aa" class="input-text w-full
               ">
            </div>
         </article>
         <article class="input-field w-138">
            <label for="skill" class="label-text text-terracotaTheme">Skill or area you'd like to help in <span span class="text-[#E0745F]">*</span></label>
            <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="text" name="skill" id="skill" placeholder="Aa" class="input-text w-full
               ">
            </div>
         </article>
         <article class="input-field w-138">
            <label for="partnershipType" class="label-text text-terracotaTheme">Link to portfolio or past work</label>
            <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <input type="text" name="partnershipType" id="partnershipType" placeholder="Aa" class="input-text w-full
               ">
            </div>
         </article>
         <article class="input-field w-138">
            <label for="message" class="label-text text-terracotaTheme">Why you'd like to volunteer</label>
            <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[1.125rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
               <textarea name="message" id="message" cols="30" rows="10" class="input-text w-full" placeholder="Aa" ></textarea>
            </div>
         </article>
         <button class="w-full bg-[#EAA294] py-2.5 text-center mt-[0.56rem] rounded-[625rem] text-terracotaTheme text-[1rem] font-medium leading-[1.4rem]">Submit</button>
   </form>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>