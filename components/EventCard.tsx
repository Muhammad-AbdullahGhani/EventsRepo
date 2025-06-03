import { Calendar, MapPin, Clock } from "lucide-react"

interface Event {
  id: number
  name: string
  datetime: string
  location: string
  description: string
}

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime)
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
    return date.toLocaleDateString("en-US", options)
  }

  const formatTime = (datetime: string) => {
    const date = new Date(datetime)
    return date.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit", 
      hour12: true 
    })
  }

  const formatDate = (datetime: string) => {
    const date = new Date(datetime)
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric" 
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 overflow-hidden group relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Date badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-xl text-sm font-bold shadow-lg z-10">
        {formatDate(event.datetime)}
      </div>

      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300">
          {event.name}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-2 rounded-lg mr-3">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium">{formatDateTime(event.datetime)}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded-lg mr-3">
              <MapPin className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-sm font-medium">{event.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-lg mr-3">
              <Clock className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-sm font-medium">{formatTime(event.datetime)}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-8 line-clamp-3">
          {event.description}
        </p>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
          Register Now
        </button>
      </div>
    </div>
  )
}
