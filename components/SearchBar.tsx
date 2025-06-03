import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = "Search events..." }: SearchBarProps) {
  return (
    <div className="relative flex items-center group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 transition-colors duration-300 group-focus-within:text-blue-600" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          className="pl-12 pr-6 py-4 w-full md:w-[400px] rounded-xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:shadow-xl placeholder-gray-500 text-gray-800 font-medium"
        />
      </div>
    </div>
  )
} 