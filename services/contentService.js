const Content = require('../models/content');

exports.getAllContents = async () =>
{
    return await Content.find();
}

exports.createContent = async (content) => 
{
    return await Content.create(content);
}

exports.getContentById = async (id) => 
{
    return await Content.findById(id);
}

exports.updateContent = async (id, content) => 
{
    return await Content.findByIdAndUpdate(id, content);
}

exports.deleteContent = async (id) =>
{
    return await Content.findByIdAndDelete(id);
}