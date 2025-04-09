'use server'

import { SongList, SongLyrics } from './types'

const API_KEY = process.env.API_KEY

export async function getSong(songId: string): Promise<SongLyrics | undefined> {
  if (!songId || !API_KEY) return undefined

  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}&text_format=plain`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export async function getSongList(
  query: string
): Promise<SongList | undefined> {
  if (!query || !API_KEY) return undefined

  const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${encodeURIComponent(
    query
  )}&per_page=10&page=1`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return undefined
  }
}
