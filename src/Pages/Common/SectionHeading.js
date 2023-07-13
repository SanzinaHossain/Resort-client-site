import React from "react"
import "./common.css"
import SectionLine from "./SectionLine"

export default function SectionHeading({ paragraph }) {
  return (
    <div className="mb-20">
      <h1 className="text-center text-sm text-yellow-500 font-bold title1 mb-2">
        Welcome to BlueWaves Hotel
      </h1>
      <h1 className="text-center text-3xl text-black font-bold title1">
        {paragraph}
      </h1>
      <SectionLine />
    </div>
  )
}
