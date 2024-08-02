export const handleRoomBooking = (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const name = e.target.name.value
  const checkIn_date = e.target.from_date.value
  const checkOut_date = e.target.to_date.value
  const room_type = e.target.room_type.value
  const mobile_no = e.target.mobile_no.value
  const total_person = e.target.person_number.value

  const fromDate = new Date(checkIn_date)
  const toDate = new Date(checkOut_date)
  const differenceMs = toDate - fromDate
  const total_days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24))

  const roomData = [
    {
      title: "Beach Villa Room",
      cost: 25,
    },
    {
      title: "Superior Panorama Room",
      cost: 45,
    },
    {
      title: "Presidential Suite",
      cost: 30,
    },
    {
      title: "Alpine Single Room",
      cost: 20,
    },
    {
      title: "King Bed Room",
      cost: 60,
    },
    {
      title: "Deluxe Double Room",
      cost: 75,
    },
  ]
  const filteredData = roomData.filter((d) => d.title === room_type)
  const total_cost = total_days * filteredData[0].cost

  const room_data = {
    email,
    name,
    checkIn_date,
    checkOut_date,
    room_type,
    total_person,
    total_cost,
    mobile_no,
  }

  fetch("http://localhost:5000/roomBooking", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(room_data),
  })
    .then((res) => res.json())
    .then((data) => {
      {
        console.log(data)
        data ? e.target.reset() : null
      }
    })
}

export const cancelBooking = () => {}
