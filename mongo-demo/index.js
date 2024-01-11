const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
    name: String, 
    author: String, 
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean 
});


const Course = mongoose.model('Course', courseSchema)
const course = new Course({
    name: "Angular Course",
    author: "Landry",
    tags: ['angular', 'frontend'],
    isPublished: true
});

const result = course.save();

// How to query a document
async function getCourse(){
    // Comparison Query Operators 
    // eq (equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)

    // or 
    // and 

    /*
    Starts with: /^Mosh/
    Ends with Hamedami: /Ngounou$/i
    */

    const pageNumber = 2;
    const pageSize = 10;
    // /api/courses?page

    const courses = await Course
        .find({author: 'Landry', isPublished: true})
        //.or([{ author: "Landry"}, {isPublished: true}])
        .skip((pageNumber - 1) * pageSize)
        .limit(10)
        .sort({name: 1})
        //.select({name: 1, tags: 1})
        .count();
    console.log(courses);
}

getCourse()


