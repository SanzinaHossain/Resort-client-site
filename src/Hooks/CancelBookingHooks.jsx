export const handleCancelBooking = (id, setUserData) => {
  console.log("id:", id)

  fetch(`https://resort-server-delta.vercel.app/roomBooking/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Delete response:", data)
      setUserData(null)
    })
}
