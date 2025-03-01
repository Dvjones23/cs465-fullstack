
# CS-465 Full Stack Development with MEAN

## Architecture ##

### _Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)._ ###
### _Why did the backend use a NoSQL MongoDB database?_ ###

Throughout this project, we have used a multitude of software and tools to design and build a single-page application (SPA). SPAs, or single-page applications, typically offer a seamless user experience by offering faster loading times by implementing dynamic content updates to a single page. It also reduces server load as it will only request necessary data to update on the page. Two frameworks that we have relied on to accomplish this are Angular and Express. Typically, Angular, a well-known JavaScript framework, manages client-side administration while Express takes care of server-side tasks. Angular applications tend to be more dynamic with better interaction and are organized into services, components, and modules. This type of structuring promotes reusability of the code and makes it easier to maintain. Express is a very popular Node.js web application framework that delivers a static page with minimal interaction, and it also does not have a strict structure or general convention for organizing code, which can be problematic at times. Both of these frameworks play an integral role in developing the SPA that meets the client's needs. While JavaCode is used behind the scenes, HTML code is used in the front of the house to define the structure and layout of the webpage as desired.

MongoDB was chosen as a backend because of its flexibility with how it handles data structures. Other options are usually more rigid and structured, while MongoDB does not require this. It is able to scale well and can handle large volumes of data at a high speed. 

## Functionality ##

### _How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?_ ###
### _Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components._ ###

JSON is what you would consider a data model that is commonly used for web applications and servers. It is a lightweight, text-based format that is commonly used to store structured data. It is used to pass data between the server at the backend and the front end of web applications. JavaScript is a language that performs operations on the data and is typically used for client-side scripting.

When implementing authentication and security, I had to restructure code in order to make sure that my app was secure and allowed authorized users to access certain information. In a full-stack environment, this can take place in the front end or the back end. Along with refactoring, I found it useful to reuse UI components when modifying the layout of the SPA. Being able to do this cuts down on the time it takes to write code for your application and promotes code efficiency, consistency, scalability, and easier maintenance.

## Testing ##

### _Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application._ ###

SPAs also promote a modular design, so components are easier to maintain and reuse in other parts of the application. When doing maintenance, you may be required to test the app to make sure that it is functioning as desired. To test this specific application, we used a software known as Postman. This software is a great tool for developers to use when dealing with APIs, as it supports a lot of different types of HTTP request methods. The main methods that were used during are as follows:

![image](https://github.com/user-attachments/assets/a92eed89-2aae-4d1b-abe7-dcbc88430829)


Specific URLs that indicate where API requests may be routed are referred to as endpoints. Each endpoint is connected to a particular application action or resource. Allowing only authorized users to access specific endpoints or carry out specific operations is necessary to provide security in a full-stack application. Tokens (like JWT), API keys, username/password combinations, and OAuth for granting third-party access are examples of common authentication techniques.

## Reflection ##

### _How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?_ ###

This course has helped broaden my knowledge within my respective field. I think that this one has been the most challenging, and I feel that I have much more to learn about the ins and outs of full-stack development. I am eager to learn, as I thoroughly enjoyed the challenge that this course has presented me. Having this additional knowledge within my report will be helpful when I am pursuing a role that aligns with my career goals.
