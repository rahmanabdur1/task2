<template>
  <AuthLayout>
    <b-col lg="6" class="d-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="signin" alt="" />
      </div>
      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <b-col lg="6" class="order-1">
      <div class="p-4 p-sm-7">
        <!-- <router-link :to="{ name: '' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link> -->

        <h1 class="mb-2 h3">Welcome back</h1>
        <p class="mb-0">
          New here?
          <router-link :to="{ name: 'auth.sign-up' }"> Create an account</router-link>
        </p>

        <b-form class="mt-4 text-start" @submit.prevent="handleSignIn">
          <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

          <div class="mb-3">
            <b-form-group label="Enter email">
              <b-form-input v-model="formCredentials.email" type="email" name="email" autocomplete="" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <PasswordInput v-model="formCredentials.password" name="password" autocomplete="" />
          </div>

          <div class="mb-3 d-sm-flex justify-content-between">
            <div>
              <b-form-checkbox>Remember me?</b-form-checkbox>
            </div>
            <router-link :to="{ name: 'auth.forgot-password' }">Forgot password?</router-link>
          </div>

          <div>
            <b-button variant="primary" type="submit" class="w-100 mb-0">Login</b-button>
          </div>

          <div class="position-relative my-4">
            <hr />
            <p class="small bg-mode position-absolute top-50 start-50 translate-middle px-2">
              Or sign in with
            </p>
          </div>

          <div class="vstack gap-3">
            <a href="#" class="btn btn-light mb-0">
              <v-icon name="fc-google" class="fa-fw text-google-icon me-1" />
              Sign in with Google
            </a>
            <a href="#" class="btn btn-light mb-0">
              <FontAwesomeIcon :icon="faFacebookF" class="fa-fw text-facebook me-1" />
              Sign in with Facebook
            </a>
          </div>

          <div class="text-primary-hover text-body mt-3 text-center">
            Copyrights ©{{ currentYear }} Booking. Build by
            <a :href="developedByLink" class="text-body">{{ developedBy }}</a
            >.
          </div>
        </b-form>
      </div>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'

import signin from '@/assets/images/element/signin.svg'
import logo from '@/assets/images/logo-icon.svg'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import PasswordInput from '@/components/PasswordInput.vue'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import * as yup from 'yup'
import router from '@/router'
import { useRoute } from 'vue-router'
import HttpClient from '@/helpers/http-client'
import type { AxiosResponse } from 'axios'
import type { UserType } from '@/types/auth'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'

import { onMounted } from 'vue'

const credentials = reactive({
  id: '1',
  email: 'user@email.com',
  password: 'password'
})

const formCredentials = reactive({
  email: '',
  password: ''
});

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')

const loginFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/agent/bookings')
}

const handleSignIn = async () => {
  let user = {}
  
  // Validate form input
  await loginFormSchema
    .validate(formCredentials)
    .then((res) => (user = res))
    .catch((e) => {
      return (error.value = e.message)
    })

  // Compare formCredentials with predefined static credentials
  if (
    formCredentials.email !== credentials.email || 
    formCredentials.password !== credentials.password
  ) {
    // If credentials do not match, display error and prevent further actions
    return error.value = 'Invalid email or password. Please try again with correct credentials.'
  }

  try {
    // If the credentials match, simulate the API call (or continue with actual flow)
    const res: AxiosResponse<UserType> = await HttpClient.post('/login', user)

    if (res.data.token) {
      useAuth.saveSession({
        ...res.data,
        token: res.data.token
      })
      redirectUser()
    }
  } catch (e: any) {
    if (e.response?.data?.error) {
      if (error.value.length == 0) error.value = e.response?.data?.error
    }
  }
}
</script>


<!-- <script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'

import signin from '@/assets/images/element/signin.svg'
import logo from '@/assets/images/logo-icon.svg'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import PasswordInput from '@/components/PasswordInput.vue'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import * as yup from 'yup'
import router from '@/router'
import { useRoute } from 'vue-router'
import HttpClient from '@/helpers/http-client'
import type { AxiosResponse } from 'axios'
import type { UserType } from '@/types/auth'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'

import { onMounted } from 'vue'

const credentials = reactive({
  id: '1',
  email: 'user@email.com',
  password: 'password'
})

const formCredentials = reactive({
  email: '',
  password: ''
});

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')

const loginFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/agent/bookings')
}

const handleSignIn = async () => {
  let user = {}
  await loginFormSchema
    .validate(credentials)
    .then((res) => (user = res))
    .catch((e) => {
      return (error.value = e.message)
    })

  try {
    const res: AxiosResponse<UserType> = await HttpClient.post('/login', user)

    if (res.data.token) {
      useAuth.saveSession({
        ...res.data,
        token: res.data.token
      })
      redirectUser()
    }
  } catch (e: any) {
    if (e.response?.data?.error) {
      if (error.value.length == 0) error.value = e.response?.data?.error
    }
  }
}
</script> -->
