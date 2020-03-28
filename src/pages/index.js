import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import Medium from "../components/medium"
import EducationNav from "../components/education-nav"

export default () => (
  <div>
    <Header />
    <EducationNav />
    <Repos />
    <Codigofacilito />
    <Medium />
  </div>
)
