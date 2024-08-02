import { useContext } from "react"
import { BlogCommentFormStyle } from "../Blog/Styles"
import { AuthContext } from "../../../Context/AuthProvider"
import RoomBookingHooks from "../../../Hooks/RoomBookingHooks"
export default function RoomReservationForm() {
  const { user } = useContext(AuthContext)
  const { handleRoomBooking } = RoomBookingHooks()
  return (
    <div className="">
      <h1 className="text-3xl text-black font-bold mb-5">Book Your Room</h1>
      <form
        className={BlogCommentFormStyle.formStyle}
        onSubmit={handleRoomBooking}
      >
        <label className="text-xl mt-3">
          Name<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          type="text"
          name="name"
          className="w-full  bg-white border-2 border-gray-200 p-3 my-3"
          required={true}
        ></input>
        <label className="text-xl mt-3">
          Email<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          type="text"
          name="email"
          className="w-full  bg-white border-2 border-gray-200 p-3 my-3"
          required={true}
          value={user.email}
        ></input>
        <label className="text-xl mt-3">
          Mobile No<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          type="text"
          name="mobile_no"
          className="w-full  bg-white border-2 border-gray-200 p-3 my-3"
          required={true}
        ></input>
        <label className="text-xl mt-3">
          Room Type<span className="text-red-700 text-lg">*</span>
        </label>
        <select
          name="room_type"
          className="w-full bg-white border-2 border-gray-200 p-3 my-3"
        >
          <option value="Beach Villa Room">Beach Villa Room</option>
          <option value="Superior Panorama Room">Superior Panorama Room</option>
          <option value="Presidential Suite">Presidential Suite</option>
          <option value="Alpine Single Room">Alpine Single Room</option>
          <option value="King Bed Room">King Bed Room</option>
          <option value="Deluxe Double Room">Deluxe Double Room</option>
        </select>
        <label className="text-xl mt-3">
          From<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          type="date"
          name="from_date"
          className="w-full  bg-white border-2 border-gray-200 p-3 my-3"
          required={true}
        ></input>
        <label className="text-xl mt-3">
          To<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          type="date"
          name="to_date"
          className="w-full  bg-white border-2 border-gray-200 p-3 my-3"
          required={true}
        ></input>
        <label className="text-xl mt-3">
          Total Person<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          type="text"
          name="person_number"
          className="w-full  bg-white border-2 border-gray-200 p-3 my-3"
          required={true}
        ></input>
        <input
          className={BlogCommentFormStyle.buttonStyle}
          type="submit"
          value="Book Here"
        ></input>
      </form>
    </div>
  )
}
