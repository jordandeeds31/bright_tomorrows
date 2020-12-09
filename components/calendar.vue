<template>
  <FullCalendar :options="options"/>
</template>

<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'

  export default {
    props: ['events'],
    components: {
      FullCalendar // make the <FullCalendar> tag available
    },
    computed: {
      options() {
        return {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          events: this.events,
          eventClick: this.eventClick
        }
      }
    },
    methods: {
      eventClick (info) {
        info.jsEvent.preventDefault(); // don't let the browser navigate
        if (info.event.url) {
          this.$router.push({
            path: info.event.url
          })
        }
      }
    }
  }
</script>

<style>
  @media only screen and (max-width: 600px) {
    .fc-toolbar-title {
      margin-left: 12px;
    }
  }
</style>
