<script>
export default {};
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-row>
            <v-col cols="12" md="6">
              <v-card-text class="mt-12">
                <h4 class="text-center">Adventure starts here 🚀</h4>
                <h6 class="text-center grey--text">
                  Make your app management easy and fun!
                </h6>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="8">
                    <v-text-field
                      label="Username"
                      outlined
                      dense
                      placeholder="Johndoe"
                    />
                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      type="email"
                      placeholder="johndoe@email.com"
                    />
                    <v-text-field
                      label="Password"
                      outlined
                      dense
                      type="password"
                      placeholder="············"
                    />
                    <v-checkbox
                      label="I agree to privacy policy &amp; terms"
                      color="primary"
                    />
                    <v-btn color="primary" dark block>Sign up</v-btn>

                    <div class="text-center mt-4">
                      <span>Already have an account?</span>
                      <router-link
                        to="/login"
                        style="color: #1976d2; margin-left: 4px"
                        >Sign in instead</router-link
                      >
                    </div>

                    <div class="d-flex align-center my-4">
                      <v-divider />
                      <span class="mx-4">or</span>
                      <v-divider />
                    </div>

                    <div
                      class="d-flex justify-space-between align-center mx-10 mb-4"
                    >
                      <v-btn depressed outlined color="grey">
                        <v-icon color="red">fab fa-google</v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="grey">
                        <v-icon color="blue">fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn depressed outlined color="grey">
                        <v-icon color="light-blue lighten-3"
                          >fab fa-twitter</v-icon
                        >
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="6" class="primary rounded-bl-xl">
              <div style="text-align: center; padding: 180px 0">
                <v-card-text class="white--text">
                  <h3 class="text-center">Don't Have an Account Yet?</h3>
                  <h6 class="text-center">
                    Let's get you all set up so you can start creating your
                    <br />first onboarding experience
                  </h6>
                </v-card-text>
                <div class="text-center">
                  <v-btn tile outlined dark>SIGN UP</v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
