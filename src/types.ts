// Contain all the types we want to use for this app

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

export class EventItemModel implements EventItem {
  id = 0
  category = ''
  title = ''
  description = ''
  location = ''
  date = ''
  time = ''
  organizer = ''
  constructor(data?: EventItem) {
    this.fromJSON(data)
  }

  fromJSON(data?: EventItem): EventItemModel {
    if (!data) return this

    this.id = data.id || 0
    this.category = data.category || ''
    this.title = data.title || ''
    this.description = data.description || ''
    this.location = data.location || ''
    this.date = data.date || ''
    this.time = data.time || ''
    this.organizer = data.organizer || ''

    return this
  }

  get name(): string {
    return this.title + '-' + this.description
  }
}
