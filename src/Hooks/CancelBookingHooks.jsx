export const handleCancelBooking = (id, setUserData) => {
  console.log("id:", id)

  fetch(`http://localhost:5000/roomBooking/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Delete response:", data)
      setUserData(null)
    })
}
