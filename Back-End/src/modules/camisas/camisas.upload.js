import fs from 'fs'
import path from 'path'
import multer from 'multer'

const destinoUpload = path.join(process.cwd(), 'uploads', 'camisas')

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    fs.mkdirSync(destinoUpload, { recursive: true })
    cb(null, destinoUpload)
  },
  filename: (_req, file, cb) => {
    const extensao = path.extname(file.originalname || '').toLowerCase()
    const nomeBase = path.basename(file.originalname || 'imagem', extensao).replace(/[^a-zA-Z0-9-_]/g, '-')
    cb(null, `${Date.now()}-${nomeBase}${extensao || '.jpg'}`)
  },
})

function fileFilter(_req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true)
    return
  }

  cb(new Error('Apenas arquivos de imagem sao permitidos.'))
}

export const uploadCamisas = multer({
  storage,
  fileFilter,
  limits: {
    files: 10,
    fileSize: 5 * 1024 * 1024,
  },
})
