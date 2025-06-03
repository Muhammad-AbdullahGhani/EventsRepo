"use client"

import { useState } from "react"
import EventCard from "./EventCard"
import SearchBar from "./SearchBar"
import eventsData from "@/data/events.json"

export default function FeaturedEvents() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Don't miss out on these amazing upcoming events in your area
          </p>
          <div className="flex justify-center">
            <SearchBar onSearch={setSearchTerm} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
