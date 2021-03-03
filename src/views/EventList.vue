<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { EventItem, EventItemModel } from './../types'
import { defineComponent } from 'vue'

import EventCard from '../components/EventCard.vue'
import EventService from '../services/EventService'

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: [] as EventItemModel[]
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        const data = response.data as EventItem[]
        this.events = data.map((item: EventItem) => new EventItemModel(item))
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    firstEvent(): EventItemModel {
      return this.events[0]
    }
  },
  methods: {
    addEvent(newEvent: EventItemModel) {
      this.events.push(newEvent)
    }
  }
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
