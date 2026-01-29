
<template>
  <v-container fluid class="pa-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Bounty List</h1>
      </v-col>
    </v-row>

    <!-- Profile Section -->
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <v-card-title>Profile</v-card-title>
          <v-card-text>
            <v-avatar size="100" class="mb-3">
              <img src="https://via.placeholder.com/100" alt="Avatar" />
            </v-avatar>
            <h3 class="text-h6">User Name</h3>
            <p>Bio or description here.</p>
            <v-btn color="primary" variant="outlined">Edit Profile</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Bounty List Section -->
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-card-title>Bounty List</v-card-title>
          <v-data-table
            :headers="bountyHeaders"
            :items="bounties"
            class="elevation-1"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="item.status === 'Open' ? 'green' : 'red'" small>
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:item.openingPR="{ item }">
              <v-btn size="small" variant="text" :to="`/pr/${item.id}`">
                View PR
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Issues List Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 mt-4">
          <v-card-title>Issues List</v-card-title>
          <v-data-table
            :headers="issueHeaders"
            :items="issues"
            class="elevation-1"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="item.status === 'Open' ? 'green' : 'red'" small>
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Layouts Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 mt-4">
          <v-card-title>Layouts</v-card-title>
          <v-card-text>
            <p>Placeholder for user layouts or missions. This could be another table or a list of custom layouts.</p>
            <!-- Add more components here as needed -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BountyList',
  data() {
    return {
      bountyHeaders: [
        { title: 'Mission Name', key: 'missionName' },
        { title: 'Owner/Tree', key: 'ownerTree' },
        { title: 'Event Last Update Time', key: 'lastUpdate' },
        { title: 'Status', key: 'status' },
        { title: 'Opening PR', key: 'openingPR' },
      ],
      issueHeaders: [
        { title: 'Mission Name', key: 'missionName' },
        { title: 'Owner/Tree', key: 'ownerTree' },
        { title: 'Event Last Update Time', key: 'lastUpdate' },
        { title: 'Status', key: 'status' },
      ],
      bounties: [
        {
          id: 1,
          missionName: 'Fix Login Bug',
          ownerTree: 'user/repo',
          lastUpdate: '2023-10-01 12:00',
          status: 'Open',
        },
        {
          id: 2,
          missionName: 'Add New Feature',
          ownerTree: 'user/repo',
          lastUpdate: '2023-10-02 14:30',
          status: 'Closed',
        },
        // Add more mock data
      ],
      issues: [
        {
          missionName: 'Issue #123',
          ownerTree: 'user/repo',
          lastUpdate: '2023-10-01 10:00',
          status: 'Open',
        },
        // Add more mock data
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>