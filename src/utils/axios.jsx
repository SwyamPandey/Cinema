import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGU5NmM3MjI0YzI1ZmQyMTJhYWRjZTVjMjZmMzYxOSIsIm5iZiI6MTcyNzI4OTk5OC4xMTg4OTUsInN1YiI6IjY2ZjQ1ODM4M2E5NWE1YmNkYTIzMTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L6VTjToB0xWj1EWa9XdoD7NK4bO3uK1chmr1d7h40hM'
      }
})

export default instance;