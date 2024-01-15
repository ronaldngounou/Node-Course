# 1. Node architecture 
Node is a program that include JavaScript engine 
Node is not a programming language. Node is a runtime environment for executing JavaScript code.
Synchronous (ASP.Net) vs asynchronous (Node application) architecture.
When a thread arrives, a request handle the thread. Node monitors the queue in the backend. 
Node is monitoring the event queue in the backend.
Node is ideal for applications that incldue a lot of disk or network access. We can serve more clients.
Do not use Node for CPU-intensive apps. Node should be use for data intensive and applications that should be served in real time. 

# 2. Node Module System
Express is built on top of the HTTP module in node.

# 3. Node Package Manager
To start a node server: npm-init


# 4. Modeling Relationship
// Using References (Normalization)

//Using Embedded Documents (Denormalization)
He we embed a document inside another document 

# 5. Unit Testing 
Manual testing:
- Launch the app
- Login
- Navigate
- Fill out a form 
- Submit it 
- Verify the result
The time required to test grows exponentially 

What is automated testing?
Automated testing are repeatable. 

Benefits of Automated testing:
- Test your code frequently, in less time
- Catch the bugs before deploying
- Deploy the app with full confidence 
- Reduce the number of bugs that go into production
- Refactor with confidence. Check that I didn't break something that was working previously
- Focus on the quality of the code

# Types of test: 
- Unit Test: tests a unit of an application without its external dependencies. They are cheap to write and execute fast. Don't give a lot of confidence. 

- Integration test: Tests the application with its external dependencies. Takes longer to excecute (writing in the database). Gives a lot of confidence. 

- End to end Test: Drives an application through its UI. Gives the greates confidence. They are very slow (internal page, log in..). They are brittle because a small change in the UI can break these tests.

### Test Pyramid
![Alt text](image.png)
We should write all the tests in our application. 
Unit: easy to write, not a lot of confidence. Practical for complex logics, functions 
Integration: many advantages without UI. 
E2E: leave the edge cases to our unit test 

Recommendations: 
1. Favour unit tests to E2E tests because unit tests are faster to write, cheaper to write and we can pin poin exactly where something failed.
2. Cover unit test gaps with integration tests.
3. Use end-to-end tests sparingly

### Tooling
A test framework uses a library
Frameworks: Jasmine, Mocha (uses plug ins Chai, Sinon), Jest () 

As we write more test, tests are first-class citizens in our source code. 

