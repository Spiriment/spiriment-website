<template>
  <section>
   <div class="pt-[5rem] pb-18.5">
      <div class="custom-width">
         <div>
            <NuxtImg src="/icons/aboutPageLogo.svg" class="w-[8.66rem] mx-auto mb-6"/>
            <div class="w-[56.17%] mx-auto text-center">
               <h1 class="header-text text-[3rem] text-primaryTheme mb-4">Spiritual growth shouldn’t be left to chance</h1>
               <p class="small-texts text-primaryTheme">
                  Too many believers are trying to grow without guidance. Too many mentors are burdened by the weight of serving without structure. And too often, busy schedules make meaningful discipleship feel impossible.
                  <br>
                  <br>
                  We’ve seen young Christians feeling lost without someone to talk to. Mentors trying to keep up with multiple people through texts, spreadsheets, and scattered calls.
                  <br>
                  <br>
                  Even spiritually mature believers struggle to stay consistent in the studying of the Word.
               </p>
            </div>
         </div>
      </div>
      <div class="my-[4.4825rem] flex gap-9.25 w-full justify-center">
         <NuxtImg src="/images/about1.png" class="max-w-100"/>
         <NuxtImg src="/images/about3.png" class="max-w-125"/>
         <NuxtImg src="/images/about2.png" class="max-w-100"/>
      </div>
       <div class="custom-width">
          <div class="w-[56.17%] mx-auto text-center">
             <h1 class="header-text text-[2.0625rem] text-primaryTheme mb-4">Technology has given us a way to do it better</h1>
             <p class="small-texts text-primaryTheme">
               Spiriment was born out of a real need to make discipleship more <span class="font-bold">accessible</span>, <span class="font-bold">consistent</span>, and <span class="font-bold">trackable</span>.
               <br>
               We created a digital space where mentorship can happen without friction and where Bible reading doesn’t fall through the cracks.
             </p>
          </div>
      </div>
   </div>
   <div class="pt-10 pb-12">
      <h3 class="w-[47.92%] mx-auto header-text text-[2.0625rem] text-primaryTheme mb-6 text-center">
         We’re redefining how mentorship, study, and accountability work together
      </h3>
      <div class="pl-32 flex items-center gap-6 overflow-x-auto hide-scrollbar">
         <article 
         v-for="item in mentorshipPoints"
         :key="item.id"
         class="basis-[40%] shrink-0 bg-[#FEEFC4] p-6 rounded-2xl">
            <h6 class="header-text text-primaryTheme mb-2 text-[1.5rem]">
               {{ item.title }}
            </h6>
            <p class="small-texts text-[1.2rem] text-primaryTheme">
             {{ item.description }}
            </p>
         </article>
      </div>
   </div>
   <div class="custom-width py-10">
      <h3 class="header-text text-center text-[2.063rem] text-primaryTheme mb-12">
         We exist to help believers grow consistently in their walk with Christ through mentorship and Scripture
      </h3>
      <div class="flex items-stretch gap-6 justify-center">
         <article class="flex-1 flex flex-col gap-2 bg-[#FEEFC4] p-6 rounded-2xl grow">
            <h6 class="header-text text-primaryTheme text-[1.5rem]">
               Vision
            </h6>
            <p class="small-texts text-[1.2rem] text-primaryTheme">
               To see a global community of spiritually mature believers who grow,
               disciple, and stay rooted in the Word — one conversation at a time.
            </p>
         </article>

         <article class="flex-1 flex flex-col gap-2 bg-[#FEEFC4] p-6 rounded-2xl">
            <h6 class="header-text text-primaryTheme text-[1.5rem]">
               Mission
            </h6>
            <ul class="list-disc list-inside small-texts text-[1.2rem] text-primaryTheme">
               <li>To help Christians build lasting bible study habits with accountability</li>
               <li>To make spiritual mentorship accessible to anyone, anywhere</li>
               <li>To equip mentors with the tools they need to disciple at scale</li>
            </ul>
         </article>
      </div>
   </div>
    <section class="py-[6.19rem] flex justify-between custom-width">
      <h2 class="text-terracotaTheme header-text text-[2.5rem] w-[33.67%]">
         Contact Us
      </h2>
      <form class="flex flex-col gap-4">
            <article class="input-field w-138">
               <label for="organization" class="label-text text-terracotaTheme">Full Name <span class="text-[#E0745F]">*</span></label>
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
               <label for="message" class="label-text text-terracotaTheme">Message</label>
               <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[1.125rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
                  <textarea name="message" id="message" cols="30" rows="10" class="input-text w-full" placeholder="Aa" ></textarea>
               </div>
            </article>
            <button class="w-full bg-[#EAA294] py-2.5 text-center mt-[0.56rem] rounded-[625rem] text-terracotaTheme text-[1rem] font-medium leading-[1.4rem]">Submit</button>
         </form>
      </section>
  </section>
</template>

<script setup>
const mentorshipPoints = [
   {
      id: 1,
      title: 'One-on-One Mentorship, Reinvented',
      description: 'Structured conversations, study prompts, and real connection without the chaos.'
   },
   {
      id: 2,
      title: 'Spiritual Growth You Can See',
      description: 'Track Bible readings, reflection streaks, goals, and actual progress.'
   },
   {
      id: 1,
      title: 'Flexible for Real Life',
      description: 'Mentees and mentors can meet wherever they are — phone in hand, Bible in heart.'
   }
]

</script>

<style lang="scss" scoped>

</style>