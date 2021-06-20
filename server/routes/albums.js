import express from 'express'
import albums from '../data/izone.js'

const router = express.Router()

router.get('/albums', (req, res) => {
    res.json(albums)
})

router.get('/albums/:id', (req, res) => {
    const found = albums.some(album => {
        return album.id === parseInt(req.params.id)
    })

    if(found) {
        return res.status(200).json(albums.filter(album => {
            return album.id === parseInt(req.params.id)
        }))
    }

    if(!found) {
        return res.json({message: 'The album does not exists'})
    }
})

export default router