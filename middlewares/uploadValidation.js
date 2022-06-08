const fs = require('fs')

module.exports = (req, res, next) => {

    if(typeof(req.file) === 'undefined' || typeof(req.body) === 'undefined' ) {
        return res.status(400).json({
            errors: "Problem with sending data"
        })
    }

    console.log(req.file)
    let name = req.body.name
    let image = req.file.path

    if(!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('jpg') && !(req.file.mimetype).includes('png')) {
        fs.unlinkSync(image)
        return res.status(400).json({
            errors: 'File not supported'
        })
    }

    next()

}