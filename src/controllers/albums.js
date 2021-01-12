let albums = [];
let albumCounter = 1;

class Albums {
    // Get All Album
    static getAllAlbums(req, res) {
        res.json(albums);
    }
    // create Album
    static createAlbum(req, res) {
        albums.push({
            id: albumCounter,
            title: req.body.title,
            date: req.body.date
        });
        albumCounter++
        res.sendStatus(201);
    }
    // delete Album
    static deleteAlbum(req, res) {
        const albumId = parseInt(req.params.id);
        const requestedAlbum = albums.find(album => album.id === albumId)
        if (!requestedAlbum) {
            res.sendStatus(404);
            return;
        }
        else {
            let index = albums.indexOf(requestedAlbum);
            albums.splice(index, 1);
            res.send(`${requestedAlbum.title} deleted`)
        }
    }
    // find Album
    static findAlbum(req, res) {
        const albumId = parseInt(req.params.id);
        const requestedAlbum = albums.find(album => album.id === albumId)
        if (!requestedAlbum) {
            res.sendStatus(404);
            return;
        }
        else {
            res.send(requestedAlbum);
        }
    }
    // edit Album
    static editAlbum(req, res) {
        const albumId = parseInt(req.params.id);
        const requestedAlbum = albums.find(album => album.id === albumId)
        if (!requestedAlbum) {
            res.sendStatus(404);
            return;
        }
        requestedAlbum.title = req.body.title;
        requestedAlbum.date = req.body.date;
        res.send(`${requestedAlbum.title} has been updated`)
    }

}

module.exports = Albums;