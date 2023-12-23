const videoQueryRepo = {
    getVideos(): VideoOutputModel[] {
        return []
    }
}

type VideoOutputModel = {
    id: string
    title: string
    author: {
        id: string
        name: string
    }
}