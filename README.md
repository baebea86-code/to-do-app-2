# To-Do List App

A functional To-Do List application built using **HTML, CSS, and vanilla JavaScript**. The project was created to practise JavaScript fundamentals, DOM manipulation, and browser storage while following MDN documentation as the primary learning resource.

## Project Brief

The goal was to build a simple task management application that allows users to add and manage tasks for their day.

The application was required to work without frameworks or libraries and had to persist task data when the page was reloaded.

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Local Storage
* MDN Web Docs

## Required Features

The application allows users to:

* Add a task
* Mark a task as completed
* Delete a task
* Filter tasks by status:

  * All
  * Active
  * Completed
* Keep tasks saved after refreshing the page using `localStorage`

## Additional Feature

After the initial To-Do List functionality was completed, a **calendar feature was added collaboratively by another developer**.

This gave the project an additional planning element and provided experience working with a feature that was developed by someone else and integrated into the existing application.

## How It Works

When a user adds a task, JavaScript creates and displays the task in the list.

Each task can then be marked as completed or deleted. The filter functionality allows users to display all tasks, only active tasks, or only completed tasks.

The application uses the browser's `localStorage` API to save the task data. When the page is loaded again, the saved tasks are retrieved and displayed instead of starting with an empty list.

## Learning Approach

A key requirement of this project was that development could only use **MDN Web Docs** as a learning resource.

No tutorials, YouTube videos, or Stack Overflow solutions were used.

This encouraged me to understand the JavaScript features I was using rather than simply copying an implementation from another source.

## MDN Reflection

The most useful MDN documentation for this project was the documentation on **Web Storage API / `localStorage`**.

It helped me understand how data could be stored in the browser and retrieved later, which was important because the To-Do List needed to keep tasks after a page reload.

Using the documentation also helped me understand what the methods such as `setItem()` and `getItem()` actually do instead of simply copying code. This made it easier to connect the storage functionality to the rest of my JavaScript and understand how the application could save and restore the user's tasks.

## Collaboration

Although the original project was built individually, it later became a collaborative development experience when another developer added the calendar feature.

This taught me that working on an existing project requires understanding how the current code works before introducing new functionality.

It also gave me experience with integrating another developer's work into an application rather than only working with code that I had written myself.

## What I Learned

This project helped me develop my understanding of:

* JavaScript DOM manipulation
* Event handling
* Functions
* Arrays and objects
* Conditional logic
* Filtering data
* `localStorage`
* Managing application state
* Building interactive web applications
* Working with another developer's feature

The biggest lesson was learning how individual JavaScript features can work together to create a complete interactive application.

## Project Preview

Add screenshots of the application here.

```text
screenshots/
├── desktop.png
└── mobile.png
```

## Live Demo

[View the live project](YOUR_DEPLOYED_LINK)

## Running the Project Locally

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_LINK
```

2. Navigate into the project:

```bash
cd todo-list
```

3. Open the project in VS Code.

4. Open `index.html` in your browser, or use a local development server such as the VS Code Live Server extension.

## Project Structure

```text
todo-list/
│
├── index.html
├── style.css
├── script.js
├── images/
└── README.md
```

## Future Improvements

If I continue developing this project, I would like to add:

* Edit existing tasks
* Task due dates
* Improved calendar functionality
* Task reminders
* More advanced filtering
* Better mobile responsiveness
* User accounts and cloud storage
* Synchronisation across devices

## About

This project was created as part of my web development learning journey. It represents my progression from building static websites to creating interactive applications that store and manage user data.

It also gave me experience learning independently through technical documentation and collaborating with another developer to extend an existing application.
