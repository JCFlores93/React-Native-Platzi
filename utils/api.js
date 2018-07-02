const BASE_API = 'https://yts.am/api/v2/list_movies.json'

class Api {
    async getSuggestion(id) {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
        const { data } = await query.json()
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return data.movies
    }
}

export default new Api()