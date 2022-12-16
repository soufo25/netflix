const key_api = "6e56e19b30762161994652677bc45571";


const requests = {
    requestPopular: `
    https://api.themoviedb.org/3/movie/popular?api_key=${"6e56e19b30762161994652677bc45571"}&language=en-US&page=1`,
    requestTopRated: `
    https://api.themoviedb.org/3/movie/popular?api_key=${"6e56e19b30762161994652677bc45571"}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${"6e56e19b30762161994652677bc45571"}`,
    requestHorror: `https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=${"6e56e19b30762161994652677bc45571"}&language=en-US`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${"6e56e19b30762161994652677bc45571"}&language=en-US&page=1`

};

export default requests;