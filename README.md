# Inventory Tracking System for Aggie Reuse Store
A faster and hassle-free inventory tracking system for our lovely folks at Aggie Reuse Store!

## About this Project:

## Inspiration
When we went to go thrift-shopping at the Aggie Reuse Store, we noticed how tedious and time-consuming of a process checking-in and checking-out the items out of the store was.  As CS students, we took it upon ourselves to make the process for the volunteers simpler. Our project aims to reduce the time and effort required for manual data entry, help improve accuracy by minimizing human error, and provide real-time visibility into item availability and stock.
## What it does
The website allows user to do two things: Record Donations and Checkout Customers. For recording new stock that come in through donations, our hardware component to capture an image of an item. The image is classified into the clothing categories using a multiclass image classification machine learning algorithm that we trained and is added to the database. For checking out custormers, we offer a carousel of items with a drop-down menu of quantity for category and all categories changed are automatically updated in the database.

## How we built it
We started by using a Raspberry Pi with the intention of performing the machine learning, image classification as well as the database management system all hosted on the Pi. We quickly realized that doing all these on the Raspberry Pi would be beyond its capabilities. So, with the absence of an external webcam, we moved to using the Raspberry Pi only to take the photos and then send them to a computer where the local machine will take it into an image classifier that runs on a machine learning model that we trained using TensorFlow Keras and run on a combination of datasets that we collected. While we were building the ML system, we were simultaneously working on the front end systems to take the output for the Image Classification and allow the Volunteer to enter information into their database with ease. We built  this using React JS.
Our Machine learning model has a 55% accuracy on Test Data, and a 95% accuracy rate on Training Data

## Challenges we ran into
As beginners, it was hard for us to code complex ML algorithms and design functional web components. We were also unable to implement the backend due to issues with the NextJS server. We also ran into issues with react for routing and navigation. We were also unable to communicate between the ML program and Front End.  We attempted to use Google API for the backend, but were unable to get this to work in the required timeframe. 

## Accomplishments that we're proud of
We are proud of what we were able to make in the 24 hours allotted to us, given that it is our first hackathon and we came into this little experience

## What we learned
We learned how to setup frontend and backend servers. We learned how to implement multi class image classification algorithms. We also learned to prototype on Figma.
## What's next for Inventory Tracking System for Aggie Reuse Store
Finish the Backend, Improve machine learning model by adding more data. combine the front end and back end.
