<template>
    <section class="w-full pt-12 md:pt-16 lg:pt-26.5 bg-terracotaTheme pb-12 md:pb-14 lg:pb-16.25">
      <div class="custom-width">
         <div class="w-full md:w-[80%] lg:w-[70%] xl:w-[56.17%] mx-auto text-center">
             <h1 class="header-text text-secondaryTheme text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight">
                 Use your skills to help people grow in their walk with God
             </h1>
             <p class="mt-4 mb-6 small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-secondaryTheme">
                 We're building Spiriment with faith and code, and we need volunteers who believe in both. If you're a designer, developer, writer, pastor, or just passionate about discipleship, we'd love to build with you
             </p>
             <button class="w-fit mx-auto py-3 px-5 md:py-4 md:px-6 rounded-[6.25rem] bg-secondaryTheme text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-terracotaTheme font-bold">
                 Apply to Volunteer
             </button>
          </div>
          <div class="mt-6 md:mt-7 lg:mt-8.5 w-full md:w-fit mx-auto max-w-full md:max-w-249">
             <NuxtImg src="/images/volunteer.png" class="w-full md:w-auto"/>
          </div>
      </div>
  </section>
  <section class="custom-width mt-18">
   <div class="flex justify-between mb-6 max-tab:flex-col">
      <div class="w-[36.33%] max-tab:w-full">
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
      <div class="w-76.5 mt-[0.94rem] max-tab:hidden">
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
   <section class="py-8 md:py-10 lg:py-[6.19rem] flex flex-col lg:flex-row justify-between custom-width gap-8 lg:gap-0">
      <h2 class="text-terracotaTheme header-text text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] w-full lg:w-[33.67%] text-center lg:text-left leading-tight">
         Ready to join the mission?
      </h2>
        <form class="flex flex-col gap-3 md:gap-4 w-full lg:w-auto" @submit.prevent="handleSubmit">
         <!-- Full Name / Organization -->
         <article class="input-field w-full lg:w-138">
            <label for="organization" class="label-text text-terracotaTheme text-sm md:text-base">
            Full Name/Organization <span class="text-[#E0745F]">*</span>
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="text"
               id="organization"
               name="organization"
               class="input-text w-full text-sm md:text-base"
               v-model="fields.name"
               required
            />
            </div>
         </article>

         <!-- Phone Number -->
         <article class="input-field w-full lg:w-138">
            <label for="phone" class="label-text text-terracotaTheme text-sm md:text-base">Phone Number</label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="tel"
               id="phone"
               class="input-text w-full text-sm md:text-base"
               v-model="fields.phone"
            />
            </div>
         </article>

         <!-- Email -->
         <article class="input-field w-full lg:w-138">
            <label for="mail" class="label-text text-terracotaTheme text-sm md:text-base">
            Email <span class="text-[#E0745F]">*</span>
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="email"
               id="mail"
               placeholder="Aa"
               class="input-text w-full text-sm md:text-base"
               v-model="fields.email"
               required
            />
            </div>
         </article>

         <!-- Skill -->
         <article class="input-field w-full lg:w-138">
            <label for="skill" class="label-text text-terracotaTheme text-sm md:text-base">
            Skill or area you'd like to help in <span class="text-[#E0745F]">*</span>
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="text"
               id="skill"
               placeholder="Aa"
               class="input-text w-full text-sm md:text-base"
               v-model="fields.skill"
               required
            />
            </div>
         </article>

         <!-- Portfolio Link -->
         <article class="input-field w-full lg:w-138">
            <label for="portfolio" class="label-text text-terracotaTheme text-sm md:text-base">
            Link to portfolio or past work
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="url"
               id="portfolio"
               placeholder="https://"
               class="input-text w-full text-sm md:text-base"
               v-model="fields.portfolio"
            />
            </div>
         </article>

         <!-- Why you'd like to volunteer -->
         <article class="input-field w-full lg:w-138">
            <label for="message" class="label-text text-terracotaTheme text-sm md:text-base">
            Why you'd like to volunteer
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[1rem] md:rounded-[1.125rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <textarea
               id="message"
               cols="30"
               rows="6"
               placeholder="Aa"
               class="input-text w-full text-sm md:text-base resize-none"
               v-model="fields.message"
            />
            </div>
         </article>

         <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#EAA294] py-2.5 text-center mt-2 md:mt-[0.56rem] rounded-[625rem] text-terracotaTheme text-sm md:text-[1rem] font-medium leading-[1.4rem] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
         >
            {{ loading ? 'Submitting...' : 'Submit' }}
         </button>

      </form>
</section>
</template>

<script setup>
import { reactive } from 'vue'
import { useFormSubmit } from '@/composables/useFormSubmit'

const fields = reactive({
  name: '',
  email: '',
  phone: '',
  skill: '',
  portfolio: '',
  message: '',
})

const resetFields = () => {
  Object.keys(fields).forEach((key) => (fields[key] = ''))
}

const { form, submit, loading } = useFormSubmit('VOLUNTEER FORM', {
  successMessage: "Thank you for volunteering! We'll reach out to you shortly.",
  errorMessage: 'Failed to submit your application. Please try again.',
  onSuccess: resetFields
})

const handleSubmit = () => {
  form.name  = fields.name
  form.email = fields.email

  // Append phone, skill and portfolio to the bottom of the message
  const extras = [
    fields.skill     ? `Skill / Area: ${fields.skill}`         : '',
    fields.phone     ? `Phone Number: ${fields.phone}`         : '',
    fields.portfolio ? `Portfolio: ${fields.portfolio}`        : '',
  ]
    .filter(Boolean)
    .join('\n')

  form.message = extras
    ? `${fields.message ? fields.message + '\n\n' : ''}${extras}`
    : fields.message

  submit()
}
</script>

<style lang="scss" scoped>

</style>