# Interview Tracker

Interview Tracker is a easy to use, community driven website aimed at helping students ace at technical interview. It is made using Node.js and uses mongodb to store all the data.

  - View and share important interview coding problems of various topics including trees, graphs, dynamic programming, greedy algorithm and many more.
  - Study and share the first-person Interview experiences of students who have faced the interviews themselves in a blog like fashion.
  - Implemented login and signup features using JSONWebToken.
  - Implemented a cutom Admin panel to manage the website, add/remove/view admins, and approve/disapprove request to add new interview questions and experiences.

### Tech

Interview Tracker uses a number of open source projects to work properly:

* [mongodb] - a general purpose, document-based, distributed database built for modern application developers and for the cloud
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* html, css, js - duh!

And of course Interview Tracker itself is open source with a [public repository][repo]
on GitHub.

### Setting up

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

1. Install node.js
2. Set up mongodb server
3. Open Interview Tracker using an editor like VS code.
4. Install the dependencies and devDependencies and start the server.
5. Run the website at http://localhost:3000/

```sh
$ npm install
$ node app
```

### Landing Page

![Landing Page](https://imgur.com/iUmdLou.jpg)

This is the first page you'll see when you open the website. Here you can signup, login or see the features and testimonials of the website. 
Here the Start preparing and Interview experience pages require a valid logged in user. I you try to go to these pages without logging in, you'll be directed to the login page.
After you've logged in the nav bar will show you, your username. There is a dropdown menu taking yiu to various parts of the website. The dropdown menu will contain an additional option of taking you to the admin panel, if you've logged in as an admin (the website will automatically recognize you as an admin).

### Login/Signup

![Login](https://imgur.com/ayiugfA.jpg)

In these pages you signup for a new account or login to a existing one. These pagese will give an error when we leave a field blank or make invalid inputs in the fields and then attempt to submit.

For login, the website will check if the email and password matches, or if the account asscoiated with the email exists or not. The signup page will check if the email id is in the correct form, ensure that the password is atleast 8 characters long, verify that the image uploaded image is a jpeg or png image within 5mb, and much more.
### Interview Preparation

![topics](https://imgur.com/pbHqrOI.jpg)

When you click on start preparing button in the landing page or the Interview prepartion option from the navbar, you'll be taken to this page. Here you will see all the topics which currently has questions in them. 
You can use the add question button to add your own question. The question will be added to this page once it is approved by the admin.

![questions](https://imgur.com/eObrm72.jpg)

Select any topic and you'll be directed to this page with all the questions on that topic. You will get information on the name of the question and the platform where you can solve that question. Clikcking in visit question will take you to a place where you can solve it. Hovering on this button will give information about the url where you wil be directed to.

### Interview Experience

![companies](https://imgur.com/5i7zOm1.jpg)

When you click on Interview experience button in the landing page or from the navbar, you'll be taken to this page. All the companies of which the people have shared the experience of will be displayed here. It will also give information about the number of experience of each company.

You can use the add experience button to to write your own interview experience and send it for approval.

![experiences](https://imgur.com/0K8tbaW.jpg)

Here you will be able to see all the experience of the users for a particular company. You also see information about the user here as well as their profile pic. Some experiences can be long and have a see more option. Use the back button to go back a page.


### Admin Panel

![Admin Panel](https://imgur.com/bwZjD7H.jpg)

The admin panel can be accessed from the navbar if you are an admin. It provides you with a variety of options that you can do.
You may add/remove an admin and approve question as well as interview experiences.

### Contact us

![Contact Us](https://imgur.com/U3CAYSR.jpg)

This page contain information about the people who have made this website.

   [repo]: <https://github.com/RKSM-GIT/interview-tracker>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [mongodb]: <https://www.mongodb.com>
