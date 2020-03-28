import React from "react"
import ilustration from "../imgs/undraw_web_developer_p3e5.svg"
import Form from "../components/contact-form"

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">
            ¡Hola! Soy Sebastian
          </h1>
          <p className="text-xl font-light">
            Creo aplicaciones web y estudio diferentes tecnologías de desarrollo
          </p>
        </div>
        <img
          src={ilustration}
          alt="Web developer"
          style={{ height: "300px" }}
        />
      </div>

      <div>
        <Form />
      </div>
    </div>
  </header>
)
