import React from 'react';
import {Github} from "react-bootstrap-icons";
import {Twitter} from "react-bootstrap-icons";
import {Linkedin} from "react-bootstrap-icons";

export default function Footer() {
  // footer component that provides socials for twitter, linkedin and github using the react-bootstrap-icons dependency
    return(
       <footer className = "bg-dark text-center text-light p-5"> 
        <div class="container p-4">
        <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/WhatsAVadim" role="button"
          ><Twitter size={25}/></a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/vadim-race-701229245/" role="button"
          ><Linkedin size={25}/></a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Git-Vdim-Hub" role="button"
          ><Github size={25}/></a>
        </section>
        </div>
    </footer>
    )
}