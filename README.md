Frontend:

TechStack: [ ReactJS + Bootstrap + HTML + CSS + Javascript ]

1. Homepage: It is divided into three components, Carousel, Midpage and Footer. Everything is coded in React and styled using Bootstrap and CSS. The linking (buttons) is done through ‘react-router-dom’
2. Login Page/Signup Page: These pages are a HTML form which have animations on one side achieved through ‘react-lottie’ package. Everything else is styled using Bootstrap and CSS.
3. Chabot Page: The chabot page was made with a stylized form, where when the button is clicked, it’s specific input field shows. This is achieved through ‘useState’. The output also has some animations which is achieved through ‘typewriter-effect’ package’. 
4. We have integrated with backend using ContextAPI, where axios package is used to access the endpoints. 

Prediction Server:

TechStack: [ Flask + Python ]

1. The endpoints are made through Flask.
2. Requests are extracted from backend-server and then passed to the ML model 
3. We have used an API to extract the NASDAQ symbols. This API gets price as input from the Flask server.
4. The output of the ML Model is sent to the backend-server as a response through the flask endpoints. 
5. Flask server is also used for extracting historical data of a particular company using Yahoo Finance API.




The ML Model:

TechStack: 
[ Pandas + NumPy + Scikit-learn + Jupyter Notebook ]

1. The ML model first pre-processes data so that it is in the correct format, to get optimal results. The data has been preprocessed using Pandas, NumPy and Scikit-learn.
2. We trained and modeled using Multiple Linear Regression, which uses stochastic gradient descent to map the training data provided the general purpose being: take date as input and predict the stocks of the particular day.
3. ML Model predicts low, high, close and open for a particular company for a day and their simple average is used as stock price.
4. Data Pre-processing is done using Jupyter notebook and tech including Pandas and NumPy.

Backend  Server:

Techstack: [ MongoDB + NodeJS + ExpressJS + Mongoose ]

1. Database: MongoDB Schema helps us store the input and output in a particular format in the database. There are five collections in the database.
2. One for storing data information after successful sign-up
3. Four fetchers of our Chatbot (each of these collections store the input and output related to that fetcher, accessed by that particular user)

Integration Endpoints: 

1. We have two endpoints for Login and Sign-Up. 
2. The sign-up endpoint is used to store the details of the user, in the user’s collection of the database.
3. Login endpoint is used for authorizing the user to access their Search History. 
4. The next 8 endpoints are divided into two parts: four of them are used to extract the input from the frontend server and the send it to the Flask server through Flask endpoint. The resultant output from the Flask endpoint is extracted is returned to the frontend server. Also the input and the output are compiled together and stored inside the particular user’s respective feature of the database. 
5. We have used axios package to access the Flask endpoints.

GitHub : 

https://github.com/GouravChaki/Finny_Chatbot/tree/master 
branch: master

Video of Website (how it works):

https://drive.google.com/file/d/1eVCHL_fAjnN9B8O-qQQ-6sUd9dAn_2hD/view?usp=sharing

Explanation of the Behind the Scenes:

https://drive.google.com/file/d/17Kj67Hvu6EqFEMa2rQTsXVJ71UF3iCMb/view?usp=sharing
