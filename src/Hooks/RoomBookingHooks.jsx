export const handleRoomBooking = (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const name = e.target.name.value
  const checkIn_date = e.target.from_date.value
  const checkOut_date = e.target.to_date.value
  const room_type = e.target.room_type.value
  const total_person = e.target.person_number.value

  const room_data = {
    email,
    name,
    checkIn_date,
    checkOut_date,
    room_type,
    total_person,
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
