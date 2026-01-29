<template>
  <v-container fluid class="pa-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Post New Issue</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-form @submit.prevent="postIssue" v-model="valid">
            <!-- Repo Dropdown -->
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.repo"
                  :items="repos"
                  label="Choose Repo"
                  item-title="name"
                  item-value="id"
                  :rules="[v => !!v || 'Repo is required']"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <!-- Branch Dropdown -->
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.branch"
                  :items="branches"
                  label="Branch"
                  :rules="[v => !!v || 'Branch is required']"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <!-- Initial State Checkbox/Toggle -->
            <v-row>
              <v-col cols="12">
                <v-switch
                  v-model="form.initialState"
                  label="Initial State"
                  color="primary"
                  inset
                ></v-switch>
                <!-- Or use v-select for more options if needed -->
              </v-col>
            </v-row>

            <!-- Optional: Issue Title and Description -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.title"
                  label="Issue Title"
                  :rules="[v => !!v || 'Title is required']"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="form.description"
                  label="Description"
                  rows="4"
                  :rules="[v => !!v || 'Description is required']"
                  required
                ></v-textarea>
              </v-col>
            </v-row>

            <!-- Action Buttons -->
            <v-row justify="end">
              <v-col cols="12" sm="6" md="3">
                <v-btn
                  block
                  color="error"
                  @click="discardForm"
                  variant="outlined"
                >
                  Discard
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn
                  block
                  color="success"
                  type="submit"
                  :disabled="!valid"
                >
                  Post Issue
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PostNewIssue',
  data() {
    return {
      valid: false,
      form: {
        repo: null,
        branch: null,
        initialState: false,
        title: '',
        description: '',
      },
      repos: [
        { id: 1, name: 'user/repo1' },
        { id: 2, name: 'user/repo2' },
        // Mock; fetch from API
      ],
      branches: [
        { text: 'main', value: 'main' },
        { text: 'develop', value: 'develop' },
        // Mock; dynamic based on repo
      ],
    };
  },
  methods: {
    postIssue() {
      if (this.valid) {
        // Placeholder: API call to post issue (e.g., GitHub API)
        alert(`Posting new issue: ${this.form.title} to ${this.form.repo}`);
        // Reset form or navigate, e.g., this.$router.push('/active-issues');
        this.resetForm();
      }
    },
    discardForm() {
      if (confirm('Discard form? Unsaved changes will be lost.')) {
        this.resetForm();
        // Optionally navigate back: this.$router.go(-1);
      }
    },
    resetForm() {
      this.form = {
        repo: null,
        branch: null,
        initialState: false,
        title: '',
        description: '',
      };
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed, e.g., for borders or colors */
.v-card {
  border: 1px solid #e0e0e0;
}
</style>
