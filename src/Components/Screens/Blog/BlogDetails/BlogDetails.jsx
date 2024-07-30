import React from "react"
import { useLocation } from "react-router-dom"
import coverImage from "../../../../assets/background2.jpg"
import { AiOutlineCheck } from "react-icons/ai"
import BlogBasicInformation from "../BlogBasicInformation"
import blog6 from "../../../../assets/Blog/blog6.jpg"
import blog7 from "../../../../assets/Blog/blog7.jpg"
import SectionCover from "../../../Molecules/SectionCover/SectionCover"
import { blogFactor } from "../BlogData"
import BlogFactor from "./BlogFactor"

export default function BlogDetails() {
  const location = useLocation()
  const data = location.state
  return (
    <>
      <SectionCover
        title="Blogs"
        subTitle="Our Talents Share Their Thoughts"
        image={coverImage}
      />
      <div className="bg-white p-10 grid grid-cols-3 justify-evenly w-full text-justify ">
        <div className="col-span-2  text-black w-full">
          <BlogBasicInformation blog={data} button={false} />
          <p className="text-justify">
            When holidaymaker Michael Doyle contracted blood poisoning in
            Bulgaria in July, his family attempted to arrange a medical flight
            to bring him back to the UK. But his travel insurers refused to pay
            for the flight or medical bills, saying that his policy didn’t cover
            him – and three weeks later, Doyle died from kidney failure.Another
            significant change has been the introduction of new, lower age
            limits
          </p>
          <img className="w-full my-5" src={data.image} />
          <p className="text-3xl text-primary">{data.name}</p>
          <p className="text-justify mt-5">{data.details}</p>
          <div className="flex gap-x-5 my-5 lg:flex-row  md:flex-row flex-col  gap-y-5">
            <img className="w-full" src={blog6} />
            <img className="w-full" src={blog7} />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            blanditiis eveniet magnam neque itaque sint maiores modi alias
            laudantium placeat dicta earum, adipisci deleniti corporis id odit
            tempora veritatis? Odio accusamus eaque fugit nam, laudantium
            doloribus voluptatibus dolores exercitationem ut culpa facilis porro
            voluptates perspiciatis quibusdam cupiditate veritatis accusantium
            nihil. Veritatis, deserunt. Aut praesentium, quisquam iure
            voluptatibus unde similique sapiente dolorum, repudiandae dolorem
            quidem exercitationem incidunt. Corporis aut sunt a?
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In amet,
            perspiciatis vitae quo quis perferendis aliquid molestias aut alias
            quod voluptatibus magnam debitis sequi. Iste cum esse nobis alias
            aut.
          </p>
          <BlogFactor />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            blanditiis eveniet magnam neque itaque sint maiores modi alias
            laudantium placeat dicta earum, adipisci deleniti corporis id odit
            tempora veritatis? Odio accusamus eaque fugit nam, laudantium
            doloribus voluptatibus dolores exercitationem ut culpa facilis porro
            voluptates perspiciatis quibusdam cupiditate veritatis accusantium
            nihil. Veritatis, deserunt. Aut praesentium, quisquam iure
            voluptatibus unde similique sapiente dolorum, repudiandae dolorem
            quidem exercitationem incidunt. Corporis aut sunt a?
          </p>
          <div className="divider"></div>
        </div>

        <div></div>
      </div>
    </>
  )
}
