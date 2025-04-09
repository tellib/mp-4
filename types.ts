export interface SongList {
  hits: {
    result: {
      id: number
      title: string
      title_with_featured: string
      full_title: string
      artist_names: string
      url: string
      header_image_url: string
      song_art_image_thumbnail_url: string
      primary_artist: {
        name: string
        id: number
        url: string
        image_url: string
      }
    }
  }[]
}

export interface SongLyrics {
  lyrics: {
    lyrics: {
      body: {
        html: string
        plain: string
      }
    }
    tracking_data: {
      song_id: number
      title: string
      primary_artist: string
      primary_album: string
      release_date: string
    }
  }
}
