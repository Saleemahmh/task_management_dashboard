## Summary
Task Management Dashboard Project

**Project:** Task Management Dashboard  
**Author:** Saleemah 
**GitHub:** https://github.com/Saleemahmh/

**Date:** 2025-10-15

---

The Task Management Dashboard is a **Trello-style web application** built using **React**, **Tailwind CSS**, and **json-server**.  
It allows users to:

- Create, view, and delete tasks
- Organize tasks across three boards: **To-do**, **In-Progress**, and **Done**
- Move tasks between boards
- Visualize task **priority** using color coding

This project simulates a real-world task management system while demonstrating front-end and mock-backend integration skills.

## Features Implemented

- Add tasks (name, description, status) using Modal window
- Delete tasks
- Update existing task using Modal window
- Priority-based color coding 
- Persistent mock backend using Json-Server
- Responsive layout using Tailwind CSS

## Technical Implementation

- **React Functional Components**: Modular structure with `Navbar`,`Footer`, `Board`, `TaskCard`.  
- **State Management**: Managed globally in `Dashboard.jsx` using `useState` and `useEffect`.  
- **Backend Integration**: Used `fetch` to perform CRUD operations on `json-server`.  
- **Styling**: Tailwind CSS

## Things I wanted to add:
- Add a Custom alert box.
- Add a reset Task button to get dummy data 


## Self-Criticism / Challenges Faced
- Understanding Json Server took me sometime because I haven't used Mock REST API as this.
- Implementing Lifting State Up concept to pass the state from child to parent component was something I have learnt from this project. Through this I could not only understand the concept but implement it real-time.
- Drag and Drop was one of the things I wanted to add but because I faced an error,tried debugging it but couldn't; at the end of submission I had to remove it. But, I plan to implement it in future updation.
- Code wise I wouldn't say it to be perfect it has many flaws. Another thing is responsiveness, I do feel it could be better.

## Improvements
- Add Drag and drop functionality using react drag and drop (@hello-pangea/dnd) by successfully debugging it.
- Add some transition or animations to make it more visually beautiful
- Improve responsive design
- Add form validation.

## Technology Rating:
**React**: 7/10

**JavaScript**: 7/10

**Tailwind CSS**: 8/10

**API Integration**: 6/10
