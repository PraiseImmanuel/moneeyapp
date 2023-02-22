# Moneey App

This project is an assessment of moneey app test a frontend developers speed, UI skills and code complexity.

# Task

-Implement the 2 screens in the figma design.
-Integrate the graphql api link above, using the company query , get the ceo , cto , company name and prefill on the company details screen
-For the login screen, create dummy username and password, use React context to store the dummy username and password that will allow the user login to the company details page.
-Security - Log the user out after every 2 mins, let them relogin to access the dashboard.

# Design Link

https://www.figma.com/file/jQQLjIOPDQsyDwIR1mcH9y/webtest?node-id=0%3A1&t=Om4CYUYj4YJraLIA-1

# API

Base URL: https://spacex-production.up.railway.app/

# Link to web application

https://moneey-app.netlify.app/

#Password for trial

Email: dummy@email.com
Password:dummy

### Folder Structure

1. Relevant for the project:
```bash
.
├── apis
	├── apollos.ts
	├── queries.ts

├── components
	├── LoginForm.tsx
	├── HeroSection.tsx
	├── Nav.tsx
	├── Notification.tsx
	├── PaddedContainer.tsx

├── context
	├── UserContext.tsx

├── dummyLogin
	├── dummyLogin.ts

├── images
	├── images.ts

├── pages
	├── dashboard
		├── DashBoard.tsx

	├── login
		├── LoginPage.tsx

├── styles
	├── DashBoard.module.css
	├── Form.module.css
	├── HeroSection.module.css
	├── LoginPage.module.css
	├── Nav.module.css
	├── Notification.module.css
	├── PaddedContainer.module.css

├── types
	├── index.d.ts

├── App.tsx
├── index.css
├── index.tsx
├── README.md

```
<br>

## Show your support

Give a ⭐️ if you like this project!
