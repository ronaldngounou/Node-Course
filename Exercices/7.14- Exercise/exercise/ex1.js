const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/mongo-exercices')
    .then( () => console.log('Connected to MongoDB') )
    .catch( err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    tags: [ String ],
    date: Date, 
    isPublished: Boolean,
    price: Number
    });
    
const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
return await Course
.find({ isPublished: true, tags: 'backend' })
.sort({ name: 1 })
.select({ name: 1, author: 1 });
}

async function run() {
const courses = await getCourses();
console.log(courses);
}

async function updateCourse(price){
    // Approach: Query first 
    // findById()
    // Modify its properties
    // save()

    /*const course = await Course.findById(id);
    if(!course) return;

    course.isPublished = true;
    course.author = 'Another Author';

    const result = course.save();
    console.log(result);*/

    const course = await Course.find({price: price});

    
    /* ,{
        $set: {
            author: "Jason",
            isPublished: false
        }
    }, { new: true });*/
    console.log(course);
}

async function removeCourse(id) {
    //const result = await Course.deleteOne({_id: id});
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}



updateCourse(20);
