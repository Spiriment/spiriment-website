import { ref, reactive } from 'vue'
import { useToast } from 'vue-toastification'

// ─────────────────────────────────────────────
//  useFormSubmit
//  @param {string} subject  - e.g. 'CONTACT FORM', 'PARTNERSHIP FORM', 'VOLUNTEER FORM'
//  @param {object} options  - successMessage, errorMessage, onSuccess
// ─────────────────────────────────────────────
export function useFormSubmit(subject, options = {}) {
  const toast = useToast()
  const loading = ref(false)
  const errors = ref(null)

  const form = reactive({
    name: '',
    email: '',
    subject,
    message: '',
    // extend with extra fields per page — e.g. organisation, role, phone
    ...options.extraFields,
  })

  const resetForm = () => {
    Object.keys(form).forEach((key) => {
      if (key === 'subject') return // keep subject intact
      form[key] = ''
    })
  }
  
  const submit = async () => {
    loading.value = true
    errors.value = null

    try {
      await $fetch('https://api.paxify.org/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { ...form },
      })

      toast.success(options.successMessage ?? 'Your message has been sent successfully!')
      resetForm()
      if (options.onSuccess) options.onSuccess()

    } catch (err) {
      errors.value = err?.data ?? err
      toast.error(options.errorMessage ?? 'Something went wrong. Please try again.')
    } finally {
      loading.value = false
    }
  }

  return { form, submit, loading, errors }
}