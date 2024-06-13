# Healthy Desk
## A Timer to Remind Your Lazy Ass to Stand Up!

https://healthy-desk.vercel.app/

I bought a new desktop because my back was fed up with my old setup. The native timer on my OS wasn't cutting it, so I had a lightbulb moment—why not make this a React project? That's how Healthy Desk was born!

Healthy Desk is my quick, simple solution to keep my lazy ass off the chair. Customize your standing, sitting, and break phases, get audio reminders, and enjoy a sleek interface built with React, Next.js, Tailwind CSS, and DaisyUI. Now, my back is happier, and I'm learning React—win-win!


# Project Checklist

## Initial Setup
- [x] Setting up the project using Next.js with the App Router.
- [x] Installing and configuring necessary dependencies (React, Next.js, Tailwind CSS, DaisyUI).

## User Interface
- [x] Designing and implementing the HTML skeleton for the start page and settings page.
- [x] Styling the application using Tailwind CSS and DaisyUI components.

## Settings Management
- [x] Creating a settings page to allow users to customize their timer preferences.
  - [x] Standing Time (minutes)
  - [x] Sitting Time (minutes)
  - [x] Break Time (minutes)
- [x] Implementing state management for settings using React `useState`.
- [x] Saving user settings to local storage for persistence across sessions.
- [x] Loading saved settings from local storage on initial load.

## Timer Functionality
- [x] Implementing a timer on the start page that displays the remaining time for the current phase.
- [x] Creating three phases: Standing, Sitting, and Break.
- [x] Adding controls to start, pause, skip, and redo phases.
  - [x] Start: Beginning the timer for the current phase.
  - [x] Pause: Pausing the timer without resetting the remaining time.
  - [x] Skip: Moving to the next phase immediately.
  - [x] Redo: Resetting the current phase timer to its full duration.

## Audio Notifications
- [x] Playing an audio alert when a phase timer ends to notify the user.

## Dynamic Updates
- [x] Updating the radial progress bar to reflect the progress of the current phase.
- [x] Displaying the correct phase name and time remaining dynamically.

## State Management and Optimization
- [x] Managing component state to ensure the correct initial values are displayed.
- [x] Implementing conditional rendering to prevent premature display of default values.

## Quality of Life Improvements
- [x] Ensuring the application persists settings and resumes correctly after a reload.

## Future Enhancements
- [ ] Adding additional customization options for users (Volume, etc.)
- [ ] Enhancing the user interface

## Known Bugs
- [ ] Initial load shows `30:00` briefly before displaying the custom set time.
- [ ] Timer stops if tab is not main