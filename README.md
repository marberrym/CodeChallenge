# Code Challenge for Tin Roof

#### Introduction:
This is a simple applications I created as a coding challenge for Tin Roof Software.  The goal was to create an application that allowed the user to navigate through a list of accounts.  Each account had created various albums, each album had various photos in it.  Clicking on an album would reveal all the photos in that album and clicking on a photo would show an enlarged version of the correlating image.  Users should be able to delete photos or albums as well.

#### Getting started:

If you would like to review or test the code, feel free to run <nr/>```git clone```<nr/> from this git repository.  You can run the code locally by installing the dependant npm modules by running <nr/>```npm install```<nr/> inside of the cloned directory.  You can then run the local version of this code using <nr/>```npm start```<nr/> inside of the cloned directory.

#### Challenges
In this particular project it was asked that the application supported CRUD operations.  CRUD operations include:
 - Create
 - Read
 - Update
 - Delete

This application focuses mainly on the Read functionality.  Since I did not have access to the backend server/database I found it difficult to come up with ways to persistently create, delete and update the information.  Instead I made a way to delete the information retrieved from the fetch request and keep the data stored in the state of the component.  I toyed with the idea of keeping a copy of the data in local storage, but I chose not to do so because I did not view that as 'good practice,' for real world applications.  Instead the delete button filters the array of images to remove the corresponding image.

#### Design:
I chose to design my code challenge showing a little bit of extra personality.  I drew inspiration from the logo for Tin Roof Software.  The green used reminded me of Spike Spiegel's hair (one of my favorite anime characters of all time).  So I decided to use him as a dummy gif for the users.  I like to put a little bit of personal flair in all of my projects.

#### Dependancies:
- React
- React-router-dom
- React-scripts

# Happy Coding.