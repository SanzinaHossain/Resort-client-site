export default function FooterSubscriberForm() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <p className="text-4xl font-bold text-center text-primary">
        Subscribe and stay updated !!!
      </p>
      <form className="flex lg:w-[700px] mt-10 w-full">
        <input
          type="email"
          name="email"
          className="bg-white  p-2 border-2 border-white lg:w-[80%] w-[60%]"
          placeholder="Enter Your Email Here......"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-primary  p-2  lg:w-[20%] w-[40%] text-black "
        ></input>
      </form>
    </div>
  )
}
