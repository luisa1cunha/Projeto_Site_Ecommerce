import { prisma } from '../../db.js'
import { validarCriacaoCamisa, validarEdicaoCamisa } from './camisas.validation.js'

function normalizarCamisa(camisa) {
  return {
    id: camisa.id,
    nome: camisa.nome || camisa.modelo || 'Camisa sem nome',
    preco: Number(camisa.preco || 0),
    time: camisa.time || camisa.versao || 'Sem time',
    descricao: camisa.descricao || '',
    imagens: Array.isArray(camisa.imagens) ? camisa.imagens : [],
  }
}

// GET /
export async function listarCamisasHandler(req, res) {
  try {
    const camisas = await prisma.camisasfutebol.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return res.json(camisas.map(normalizarCamisa))
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao buscar camisas.' })
  }
}

// GET /:id
export async function buscarCamisaPorIdHandler(req, res) {
  try {
    const { id } = req.params
    const camisa = await prisma.camisasfutebol.findUnique({ where: { id } })

    if (!camisa) {
      return res.status(404).json({ error: 'Camisa nao encontrada.' })
    }

    return res.json(normalizarCamisa(camisa))
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao buscar camisa.' })
  }
}

// POST /
export async function criarCamisaHandler(req, res) {
  try {
    const erroValidacao = validarCriacaoCamisa(req.body)
    if (erroValidacao) {
      return res.status(400).json({ error: erroValidacao })
    }

    const { nome, preco, time, descricao, imagens } = req.body
    const camisa = await prisma.camisasfutebol.create({
      data: {
        nome: nome.trim(),
        preco: Number(preco),
        time: time.trim(),
        descricao: (descricao || '').trim(),
        imagens,
        modelo: nome.trim(),
        versao: 'Padrao',
        tamanho: 'UN',
      },
    })

    return res.status(201).json({ message: 'Camisa criada com sucesso.', camisa: normalizarCamisa(camisa) })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao criar camisa.' })
  }
}

// PUT /:id
export async function atualizarCamisaHandler(req, res) {
  try {
    const { id } = req.params
    const erroValidacao = validarEdicaoCamisa(req.body)
    if (erroValidacao) {
      return res.status(400).json({ error: erroValidacao })
    }

    const existente = await prisma.camisasfutebol.findUnique({ where: { id } })
    if (!existente) {
      return res.status(404).json({ error: 'Camisa nao encontrada.' })
    }

    const { nome, preco, time, descricao, imagens } = req.body
    const camisa = await prisma.camisasfutebol.update({
      where: { id },
      data: {
        nome: nome.trim(),
        preco: Number(preco),
        time: time.trim(),
        descricao: (descricao || '').trim(),
        imagens,
        modelo: nome.trim(),
      },
    })

    return res.json({ message: 'Camisa atualizada com sucesso.', camisa: normalizarCamisa(camisa) })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao atualizar camisa.' })
  }
}

// DELETE /:id
export async function excluirCamisaHandler(req, res) {
  try {
    const { id } = req.params

    const existente = await prisma.camisasfutebol.findUnique({ where: { id } })
    if (!existente) {
      return res.status(404).json({ error: 'Camisa nao encontrada.' })
    }

    await prisma.camisasfutebol.delete({ where: { id } })
    return res.json({ message: 'Camisa excluida com sucesso.' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao excluir camisa.' })
  }
}

// POST /upload
export async function uploadImagensCamisaHandler(req, res) {
  try {
    const arquivos = req.files || []

    if (!Array.isArray(arquivos) || arquivos.length === 0) {
      return res.status(400).json({ error: 'Nenhuma imagem enviada.' })
    }

    const urls = arquivos.map((arquivo) => `/uploads/camisas/${arquivo.filename}`)
    return res.status(201).json({ message: 'Upload concluido.', imagens: urls })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Erro ao realizar upload das imagens.' })
  }
}
