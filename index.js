const express  = require('express');
const Content = require('./content-model');


var app = express();

app.use(express.json());

// Get all contents
app.get('/contents', async function(req, res){
    try{
        console.log('Getting all contents');
        const contents = await Content.find();
        res.json(contents);
    } catch (err)
    {
        res.status(500).json({ message: err.message });
    }
});

// Get a single content
app.get('/contents/:id', getContent, (req, res) => {
    res.json(res.content);
});

// Create a new content
app.post('/contents', async (req, res) => {
    const content = new  Content({
        title: req.body.title,
        subTitle: req.body.subTitle,
        duration: req.body.duration,
        genre: req.body.genre,
        isAdult: req.body.isAdult
    });

    try{
        const newContent = await content.save();
        res.status(201).json(newContent);
    } catch(err) {
        res.status(400).json( {message: err.message});
    }
});

//Update a content
app.patch('contents/:id', getContent, async (req, res) => {
    if(req.body.title != null)
    {
        res.content.title = req.body.title;
    }
    if(req.body.subTitle != null)
    {
        res.content.subTitle = req.body.subTitle;
    }
    if(req.body.duration != null)
    {
        res.content.duration = req.body.duration;
    }
    if(req.body.genre != null)
    {
        res.content.genre = req.body.genre;
    }
    if(req.body.isAdult != null)
    {
        res.content.isAdult = req.body.isAdult;
    }

    try{
        const updatedContent = await res.content.save();
        res.json(updatedContent);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
})


// Delete a content
app.delete('/contents/:id', getContent, async (req, res) =>  {
    try{
        await res.content.remove();
        res.json({ message: 'Content Deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})


//Middleware function to get a single content by ID
async function getContent(req, res, next) {
    let content;
    try {
        content = await Content.findById(req.params.id);
        if (content == null) {
            return res.status(404).json({message: 'Cannot find the content'});
        }
    } catch(err) {
        return res.status(500).json({message: err.message});
    }

    res.content = content;
    next();
}

app.listen(5000, function(){
    console.log("Started application on port %", 5000);
});