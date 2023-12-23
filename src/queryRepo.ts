const videoQueryRepo = {
    getVideos(): VideoOutputModel[] {
        const dbVideos: DBVideo[] = []
        const authors: DBAuthor[] = []
        return dbVideos.map(dbVideo => {

            const author = authors.find(a => a._id === dbVideo.authorId)

            return this._mapDBVideoToVideoOutputModel(dbVideo, author!)
        })
    },
    getVideosById(id: string): VideoOutputModel {
        const dbVideo: DBVideo = {
            _id: '27421',
            title: 'dlkf',
            authorId: '8955'
        }
        const author: DBAuthor = {
            _id: '8955',
            lastName: 'Sergeiv',
            firstName: 'Alexandr'
        }

        return this._mapDBVideoToVideoOutputModel(dbVideo, author)

    },
    getBannedVideos(): BannedVideoOutputModel[] {
        const dbVideos: DBVideo[] = []
        const authors: DBAuthor[] = []
        return dbVideos.map(dbVideo => {

            const author = authors.find(a => a._id === dbVideo.authorId)

            return {
                id: dbVideo._id,
                title: dbVideo.title,
                author: {
                    id: author!._id,
                    name: author!.firstName + ' ' + author!.lastName
                },
                banReason: dbVideo.banObject!.banReason
            }
        })
    },
    _mapDBVideoToVideoOutputModel(dbVideo: DBVideo, author: DBAuthor) {
        return {
            id: dbVideo._id,
            title: dbVideo.title,
            author: {
                id: author!._id,
                name: author!.firstName + ' ' + author!.lastName
            },
        }
    }
}

type DBVideo = {
    _id: string
    title: string
    authorId: string
    banObject?: null | {
        isBanned: boolean
        banReason: string
    }
}

type DBAuthor = {
    _id: string
    firstName: string
    lastName: string
}

export type VideoOutputModel = {
    id: string
    title: string
    author: {
        id: string
        name: string
    }
}
export type BannedVideoOutputModel = {
    id: string
    title: string
    author: {
        id: string
        name: string
    }
    banReason: string
}