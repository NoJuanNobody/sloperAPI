

class BodiceController {
    generatePattern(req, res) {
        console.log('todo')
        const { measurements } = req.body;
        
        res.status(200).send("todo")
        
    }
    generatePatternData (req, res) {
        console.log('todo');
        const { measurements } = req.body;
        res.status(200).send(measurements);
    }
}