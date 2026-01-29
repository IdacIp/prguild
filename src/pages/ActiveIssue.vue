<template>
  <v-container fluid class="pa-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Active Issues</h1>
      </v-col>
    </v-row>

    <!-- Filter Tabs -->
    <v-row>
      <v-col cols="12">
        <v-tabs v-model="activeTab" class="mb-4" color="purple">
          <v-tab value="active">Active Issues</v-tab>
          <v-tab value="new">New Issues</v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <!-- Timeline Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 mb-4">
          <v-card-title>Timeline</v-card-title>
          <div class="timeline-container">
            <div class="timeline-step">
              <div class="diamond">PR</div>
              <div class="arrow">→</div>
            </div>
            <div class="timeline-step">
              <div class="diamond">Accepted</div>
              <div class="arrow">→</div>
            </div>
            <div class="timeline-step">
              <div class="diamond">Bounty</div>
              <div class="arrow">→</div>
            </div>
            <div class="timeline-step">
              <div class="diamond">Quit</div>
              <div class="arrow">→</div>
            </div>
            <div class="timeline-step">
              <div class="diamond">Delete</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Issues List Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title>Issues List</v-card-title>
          <v-data-table
            :headers="issueHeaders"
            :items="filteredIssues"
            class="elevation-1"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" small>
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn 
                size="small" 
                variant="outlined" 
                color="success"
                @click="handlePRAccepted(item)"
                class="mr-2"
              >
                PR Accepted
              </v-btn>
              <v-btn 
                size="small" 
                variant="outlined" 
                color="warning"
                @click="handleQuitBounty(item)"
                class="mr-2"
              >
                Quit Bounty
              </v-btn>
              <v-btn 
                size="small" 
                variant="outlined" 
                color="error"
                @click="handleDeleteBounty(item)"
              >
                Delete Bounty
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ActiveIssue',
  data() {
    return {
      activeTab: 'active',
      issueHeaders: [
        { title: 'Mission Name', key: 'missionName' },
        { title: 'Status', key: 'status' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      issues: [
        {
          id: 1,
          missionName: 'Fix CSS Pending',
          status: 'CSS Pending',
          type: 'active', // for filtering
        },
        {
          id: 2,
          missionName: 'PR Accepted 5',
          status: 'Accepted',
          type: 'active',
        },
        {
          id: 3,
          missionName: 'PR Rejected 3',
          status: 'Rejected',
          type: 'new',
        },
        {
          id: 4,
          missionName: 'New Issue',
          status: 'New',
          type: 'new',
        },
        // Add more mock data as needed
      ],
    };
  },
  computed: {
    filteredIssues() {
      return this.issues.filter(issue => issue.type === this.activeTab);
    },
  },
  methods: {
    getStatusColor(status) {
      if (status === 'CSS Pending') return 'blue';
      if (status === 'Accepted') return 'green';
      if (status === 'Rejected') return 'red';
      if (status === 'New') return 'orange';
      return 'grey';
    },
    handlePRAccepted(item) {
      alert(`PR Accepted for ${item.missionName}`); // Placeholder; replace with real logic
    },
    handleQuitBounty(item) {
      if (confirm(`Quit Bounty for ${item.missionName}?`)) {
        // Placeholder logic
        console.log('Quit Bounty:', item);
      }
    },
    handleDeleteBounty(item) {
      if (confirm(`Delete Bounty for ${item.missionName}?`)) {
        // Placeholder logic; remove from array or API call
        this.issues = this.issues.filter(i => i.id !== item.id);
      }
    },
  },
};
</script>

<style scoped>
.timeline-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;
}

.timeline-step {
  display: flex;
  align-items: center;
}

.diamond {
  width: 40px;
  height: 40px;
  background-color: #9c27b0; /* Purple theme */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* Diamond shape */
  font-size: 12px;
  font-weight: bold;
}

.arrow {
  margin: 0 10px;
  font-size: 20px;
  color: #9c27b0;
}

@media (max-width: 960px) {
  .timeline-container {
    flex-direction: column;
  }
  .arrow {
    transform: rotate(90deg);
    margin: 10px 0;
  }
}
</style>
