// var _ = require('underscore')

// Core module
// File or folder 
// node_modules

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
    
]


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found.");
    res.send(course);
})


//POST 
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = schema.validate(req.body);
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }; 
    courses.push(course);
    res.send(course);
})


app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found.");

    //result = validateCourse(course);

    // Update course 
    course.name = req.body.name;
    // Return the updated course

    courses.push(course);
    res.send(course.name) 


})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found.");

    //Delete 
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);

})



function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return result = schema.validate(req.body);
}



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

