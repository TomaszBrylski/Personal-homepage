import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = username =>
    axios.get(`${githubAPIBaseURL}/user/${username}/repos`)
        .then(response => response.data);