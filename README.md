# Coralyze AI Detection Project
Coralyze is an application that presents real-time IoT data visualisation based on the detections captured by IoT devices. Coralyze provides a fast analytics service that enables users to view insightful data that offers a comprehensive overview of their device. These analytics can be viewed via a sophisticatedly designed website that includes a multiple of data breakdowns. A test case for this application example can be utilised in COVID-19 scenarios, where we aim to provide a solution that is aligned with this directive for the purpose of monitoring and safety of others. The application was created in parallel by 3 core teams, AI Engineers, Full Stack Developers, and Software Engineers. We aim to facilitate the interaction between IoT devices, databases and websites collaborated by cross-functional teams, allowing for consumers to effectively control and monitor the safety of indoor gatherings.

## Technologies Used:
- Python(TensorFlow)
- Google Coral
- MongoDB Atlas
- Express
- React
- Node.js
- Nginx
- AWS EC2
- AWS S3 Bucket

## Coralyze User Interface
### Coralyze UI

This project contains the frontend and backend user interface Coralyze.
### Repository Structure

```bash
├───controllers
│       auth.js
│       private.js
│
├───middleware
│       auth.js
│       error.js
│
├───models
│       ticket.model.js
│       user.model.js
│
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│       tab-logo-black.svg
│
├───routes
│       private.js
│       tickets.js
│       users.js
│
├───src
│   │   App.css
│   │   App.js
│   │   App.test.js
│   │   index.js
│   │   reportWebVitals.js
│   │   setupTests.js
│   │
│   ├───components
│   │   │   Button.css
│   │   │   Button.js
│   │   │   Navbar.css
│   │   │   Navbar.js
│   │   │
│   │   ├───About
│   │   │       AboutBanner.js
│   │   │       AboutBanner.scss
│   │   │       ContactUs.js
│   │   │       ContactUs.scss
│   │   │       MeetTheTeam.js
│   │   │       MeetTheTeam.scss
│   │   │       MissionStatement.js
│   │   │       MissionStatement.scss
│   │   │
│   │   ├───Authentication
│   │   │       forgotpassword.js
│   │   │       forgotpassword.scss
│   │   │       resetpassword.js
│   │   │       resetpassword.scss
│   │   │       resetpasswordsuccess.js
│   │   │       resetpasswordsuccess.scss
│   │   │
│   │   ├───ContactUs
│   │   │       contactForm.css
│   │   │       contactForm.js
│   │   │
│   │   ├───Dashboard
│   │   │   │   Dashboard.js
│   │   │   │   Dashboard.scss
│   │   │   │   DashboardNavbar.js
│   │   │   │   DashboardNavbar.scss
│   │   │   │   DeviceSection.css
│   │   │   │   DeviceSection.js
│   │   │   │   NotificationsSection.css
│   │   │   │   NotificationsSection.js
│   │   │   │   StreamSection.css
│   │   │   │   StreamSection.js
│   │   │   │   SupportSection.css
│   │   │   │   SupportSection.js
│   │   │   │
│   │   │   └───Settings
│   │   │           DeviceManagement.js
│   │   │           DeviceManagement.scss
│   │   │           SettingsSection.css
│   │   │           SettingsSection.js
│   │   │
│   │   ├───Device
│   │   │       config.js
│   │   │
│   │   ├───Documentation
│   │   │       Sidebar.js
│   │   │       Sidebar.scss
│   │   │       TechnicalSection.js
│   │   │       TechnicalSection.scss
│   │   │
│   │   ├───FAQS
│   │   │       FaqSection.css
│   │   │       FaqSection.js
│   │   │
│   │   ├───Footer
│   │   │       Footer.css
│   │   │       Footer.css.map
│   │   │       Footer.js
│   │   │       Footer.scss
│   │   │
│   │   ├───HomePage
│   │   │       Carousel.css
│   │   │       Carousel.css.map
│   │   │       Carousel.js
│   │   │       Carousel.scss
│   │   │       CTA.css
│   │   │       CTA.css.map
│   │   │       CTA.js
│   │   │       CTA.scss
│   │   │       Feature.css
│   │   │       Feature.css.map
│   │   │       Feature.scss
│   │   │       Featuresection.js
│   │   │       Featurev2.js
│   │   │       Featurev2.scss
│   │   │       Herosection.css
│   │   │       Herosection.js
│   │   │       PricingPackages.css
│   │   │       PricingPackages.js
│   │   │
│   │   ├───Login
│   │   │       loginFormSection.css
│   │   │       loginFormSection.js
│   │   │       loginFormSection.scss
│   │   │
│   │   ├───Pricing
│   │   │       PricingBanner.css
│   │   │       PricingBanner.js
│   │   │
│   │   ├───PrivacyPolicy
│   │   │       PolicySection.js
│   │   │       PolicySection.scss
│   │   │
│   │   └───Register
│   │           registerFormSection.css
│   │           registerFormSection.js
│   │           registerFormSection.scss
│   │
│   ├───fonts
│   │       Geomanist-Black.woff
│   │       Geomanist-Bold.woff
│   │       Geomanist-Book.woff
│   │       Geomanist-ExtraLight.woff
│   │       Geomanist-Light.woff
│   │       Geomanist-Medium.woff
│   │       Geomanist-Regular.woff
│   │       Geomanist-Thin.woff
│   │       Geomanist-Ultra.woff
│   │       Gilroy-Bold.woff
│   │       Gilroy-Heavy.woff
│   │       Gilroy-Light.woff
│   │       Gilroy-Medium.woff
│   │       Gilroy-Regular.woff
│   │       style.css
│   │
│   ├───images
│   │   │
│   │   ├───carousel
│   │   │
│   │   ├───Documentation
│   │   │
│   │   ├───icons
│   │   │
│   │   └───portraits
│   │
│   ├───pages
│   │       about.js
│   │       admin.js
│   │       contact.js
│   │       Dashboard.js
│   │       devicemanagement.js
│   │       devices.js
│   │       documentation.js
│   │       faqs.js
│   │       forgotpassword.js
│   │       home.js
│   │       livestream.js
│   │       login.js
│   │       notifications.js
│   │       pagenotfound.js
│   │       pricing.js
│   │       privacy.js
│   │       register.js
│   │       resetpassword.js
│   │       resetpasswordSuccess.js
│   │       settings.js
│   │       support.js
│   │
│   ├───routing
│   │       privateroute.js
│   │
│   ├───styles
│   │       pagenotfound.css
│   │
│   └───videos
│
└───utilities
        errorResponse.js
        sendEmail.js
```

### Project Status
These are the following screens and functionalities present in the application currently:
- Landing Page
- Register Page
- Login Page
- Dashboard Page
- Device Page
- Setting Page
- Logout

These screens currently contain fully functional transformed data. As such, the next iteration of the Coralyze project will implement more features in the coming future.

### Functionality Screens
#### [Landing Page](../main/src/pages/home.js)

#### [Register Page](../main/src/pages/register.js)

#### [Login Page](../main/src/pages/login.js)

#### [Reset Password Page](../main/src/pages/resetpassword.js)

#### [Forgot Password Page](../main/src/pages/forgotpassword.js)

#### [Dashboard Page](../main/src/pages/Dashboard.js)

### Team Members
#### Documentation Team:
- David Chau
- Saamir Hye
- Kishen Kumar
- Long Le
- Bao Lam Nguyen
- Armaghan Zahid
- Cynan Du


#### Development Team:
- David Chau
- Saamir Hye
- Kishen Kumar
- Long Le

---

## First time installation / Updating packages
## Instructions:
1. Open up your OS terminal
2. Using your terminal, change the directory to the Coralyze-Frontend folder (e.g. Windows | cd C:\Users\John\Desktop\Coralyze-Frontend)
3. Type in 'npm install'
4. This should install all the required dependencies/packages that is needed to run this application.

# Execution Instructions to run the Frontend / Backend
## Frontend:
1. Open up your OS terminal
2. Using your terminal, change the directory to the Coralyze-Frontend folder (e.g. Windows | cd C:\Users\John\Desktop\Coralyze-Frontend)
3. Type in terminal 'npm start'
4. This should start up the frontend website.

## Backend:
1. Open up your OS terminal
2. Using your terminal, change the directory to the Coralyze-Frontend folder (e.g. Windows | cd C:\Users\John\Desktop\Coralyze-Frontend)
3. Type in terminal 'nodemon server'
4. This should start up the backend server that is required for all login functionalities.
