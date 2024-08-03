/*
 * Home.js
 * Created by Sanzina Hossain
 * Copyright (c) 2024 Sanzina
 * All rights reserved
 */

import RestaurantHeader from "../Restaurant/RestaurantHeader"
import RestaurantMenu from "../Restaurant/RestaurantMenu"
import SectionAbout from "./SectionAbout/SectionAbout"
import SectionHero from "./SectionHero/SectionHero"
import SectionRooms from "./SectionRooms/SectionRooms"

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <RestaurantHeader />
      <SectionRooms />
      <RestaurantMenu />
    </>
  )
}
