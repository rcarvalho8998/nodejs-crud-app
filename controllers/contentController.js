const contentService = require('../services/contentService');

exports.getAllContents = async (req, res) =>
{
    try {
        const contents = await contentService.getAllContents();
        res.json({ data: contents, status: 'Success'});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

exports.createContent = async (req, res) => 
{
    try {
        const content = await contentService.createContent(req.body);
        res.json({ data: content, status: 'Success'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.updateContent = async (req, res) => 
{
    try {
        const content = await contentService.updateContent(req.params.id, req.body);
        res.json({data: content, status: 'Success'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.getContentById = async (req, res) =>
{ 
    try {
        const content = await contentService.getContentById(req.params.id);
        res.json({data: content, status: 'Success'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.deleteContent = async (req, res) =>
{
    try {
        const content = await contentService.deleteContent(req.params.id);
        res.json({data: content, status: 'Success'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}