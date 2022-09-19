import axios from 'axios'

const API_URL = '/api/animes/'

// Add anime to list
const addAnime = async (animeData:any, token:any)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, animeData , config)

    return response.data
}

// Get User anime list
const getAnimeList = async (token:any)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL,config)

    return response.data
}

// Delete anime from list
const deleteAnime = async (animeId:any,token:any)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(API_URL + animeId,config)

    return response.data
}

// Edit anime from list
const editAnime = async (animeId:any,animeData:any,token:any)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.put(API_URL + animeId,animeData,config)

    return response.data
}


const listService = {
    addAnime,
    editAnime,
    deleteAnime,
    getAnimeList
}

export default listService