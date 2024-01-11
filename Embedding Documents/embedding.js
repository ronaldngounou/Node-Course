const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

//Update a course by saving it in memory
async function updateCourse(courseId){
  const course = await Course.findById(courseId)
  
  course.author.name = 'Landry Ngounou';
  course.save();
  //course.author.save does not exist!!!
}

// Update a course by saving it directly in the database
async function updateAuthor(courseId){
  const course = await Course.updateOne({_id: courseId}, {
    $set: {
      'author.name': 'John Doe'
    }
  });

  //course.author.save does not exist!!!
}

async function addAuthor(courseId, author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save()
}

async function removeAuthor(courseId, authorId){
  const course = await Course.findById(courseId);
  course.authors.pull({_id: authorId});
  course.save();
  console.log("Author removed.")
}

/*createCourse('Language course', [
  new Author({ name: 'Tom' }),
  new Author({ name: 'Paul' })

])*/

//addAuthor("65a0048848b2b9100b672c76", new Author({name: "Amy"}))
removeAuthor("65a0048848b2b9100b672c76", "65a005d19160f6984f3b6343")