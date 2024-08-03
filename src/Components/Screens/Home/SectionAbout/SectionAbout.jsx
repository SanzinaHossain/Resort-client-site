import { useNavigate } from "react-router-dom"
import image from "../../../../assets/Contact.jpeg"
export default function SectionAbout() {
  const navigate = useNavigate()
  return (
    <div className="bg-white p-10 pb-0 grid lg:grid-cols-2 grid-cols-1 justify-evenly">
      <div>
        <img src={image} />
      </div>
      <div className="lg:px-10 px-0 py-5 text-black">
        <p className="text-4xl text-black font-bold">Our Resort Story</p>
        <p className="my-3 text-primary">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </p>
        <div className="divider "></div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          rerum maiores doloribus, soluta ea veniam labore saepe similique
          officiis delectus nulla deserunt, odit magnam repudiandae, maxime
          adipisci eligendi. Corporis dolorum temporibus ex, quidem officiis
          consequuntur cum animi magnam doloremque culpa soluta perferendis
          adipisci? Aspernatur ea dicta neque asperiores consequuntur eveniet
          itaque quaerat reprehenderit officiis repellendus, voluptas tempora,
          sed repellat quibusdam nulla placeat non ipsa molestias delectus quod
          quo laboriosam voluptatibus?
        </p>
        <p className="text-justify my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          vero quis numquam ipsam asperiores labore, ex officiis similique est
          perferendis eum eius beatae molestiae neque temporibus ea maiores
          doloremque, mollitia eveniet nostrum consectetur optio ullam. Dicta
          facilis assumenda itaque necessitatibus.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="hover:bg-secondary hover:text-white py-3 px-5 font-bold border-2 border-secondary rounded-lg "
        >
          Contact Us
        </button>
      </div>
    </div>
  )
}
