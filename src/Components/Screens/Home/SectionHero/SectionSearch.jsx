import { useState } from "react"

export default function SectionSearch() {
  const [checkInDate, setCheckInDate] = useState("")
  const [roomType, setRoomType] = useState("Superior Room")
  const [viewType, setViewType] = useState("Loft Room")

  const handleSearch = () => {
    console.log(
      `Check-in Date: ${checkInDate}, Room Type: ${roomType}, View Type: ${viewType}`
    )
  }
  return (
    <div className="lg:flex items-center justify-center space-x-8 bg-white  p-5 rounded-3xl shadow-md mt-5 hidden">
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        className="border border-gray-300 p-2 rounded-xl bg-white text-primary font-bold"
        placeholder="Check In"
      />
      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        className="border border-gray-300 p-2 rounded-xl bg-white text-primary font-bold"
      >
        <option value="Superior Room">Superior Room</option>
        <option value="Deluxe Room">Deluxe Room</option>
        <option value="Standard Room">Standard Room</option>
      </select>
      <select
        value={viewType}
        onChange={(e) => setViewType(e.target.value)}
        className="border border-gray-300 p-2 rounded-xl bg-white text-primary font-bold"
      >
        <option value="Loft Room">Loft Room</option>
        <option value="Ocean View">Ocean View</option>
        <option value="City View">City View</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        Find Now
      </button>
    </div>
  )
}
