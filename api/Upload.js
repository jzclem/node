// 单个文件上传
async function singleFile (req, res) {
  console.log(req.file)
  res.json({
    code: '0000',
    type: 'single',
    originalName: req.file.originalname
  })
}
// 多个文件上传
async function multerFile (req, res) {
  console.log(req.files)
  let fileList = []
  req.files.map((elem) => {
    fileList.push({
      originalName: elem.originalname
    })
  })
  res.json({
    code: '0000',
    type: 'multer',
    fileList: fileList
  })
}

module.exports = {
  singleFile,
  multerFile
}
