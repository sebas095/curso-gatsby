import React, { useEffect, useState } from "react"
//import repos from "../data/repos"
import Repo from "./repo"

export default () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState(0)

  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos

    if (data) {
      myRepos = JSON.parse(data)
      setReposCount(myRepos.length)

      myRepos = myRepos.slice(0, 18)
      return setRepos(myRepos)
    }

    const fetchRepos = async () => {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/sebas095/repos"
      )

      myRepos = await response.json()
      setReposCount(myRepos.length)

      sessionStorage.setItem("repos", JSON.stringify(myRepos))
      myRepos = myRepos.slice(0, 18)
      setRepos(myRepos)
    }

    fetchRepos()
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
        <p>Colaboración y contribución de código</p>
      </header>
      <ul className="repos-list">
        {repos.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </ul>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/sebas095"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Ver más en Github ({reposCount})
        </a>
      </div>
    </div>
  )
}
