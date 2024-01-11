// Trade off between query performance vs consistency 

// Using References (Normalization) -> CONSISTENCY 

let author = {
    name: "Mosh"
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization) -> PERFORAANCE

let course = {
    author: {
        name: "Mosh"
    }
}

 // Hybrid 
 let author = {
    name: "Mosh"
    // 50 other properties
}

//This approach will optimize the query performance. It will be helpful if we want to have a 
//snapshot of our data at a particular point in time. 
