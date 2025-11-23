<template>
   <section>
        
        <div class="mt-[3.813rem]">
            <article 
                v-for="(item, index) in cardContent"
                :key="item.id"
                class="w-full rounded-[1.25rem] px-12.5 flex justify-between transition-all duration-500"
                :class="[
                index === cardContent.length - 1 ? 'py-[93px]' : 'h-[53.12rem] pt-22.5',
                index > 0 ? '-mt-60' : 'mt-0',
                'relative z-[calc(10+index)]' 
                ]"
                :style="{ backgroundColor: item.cardTheme }"
            >
                <div class="max-w-135">
                    <h2 class="font-bold leading-[120%] text-secondaryTheme mb-4 text-[2.5rem]"
                    :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
                    >
                        {{ item.title }}
                    </h2>
                    <p class="small-texts text-secondaryTheme mb-5"
                    :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
                    >
                        {{ item.detail }}

                    </p>
                    <UiDownloadButton 
                        v-if="showButton"
                        :isDark="false"
                        :iconTheme="item.cardTheme"
                        v-bind="item.textTheme ? { textTheme: item.textTheme } : {}"
                    />
                    <button 
                    v-if="isPartnership"
                    class="py-4 px-6 rounded-[6.25rem]"
                    :style="{ color: item.cardTheme, backgroundColor: item.cardColor}"
                    >
                        Become a Partner
                    </button>
                </div>
                <div 
                class="h-91 w-[25.19rem] rounded-3xl bg-secondaryTheme"
                :style="{ backgroundColor: item.cardColor }"
                >
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
defineProps({
    cardContent: {
        type: Array,
        required: true
    },
    showButton: {
        type: Boolean,
        default: true
    },
    isPartnership: {
        type: Boolean,
        default: false
    },

})
</script>

<style lang="scss" scoped>

</style>