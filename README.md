# Construction_Project_Timeline


This project is a web application that visualizes a construction project timeline with a progress bar that updates as activities are marked as completed. The progress bar shows the percentage of completion and is sticky at the top of the page. Activities can only be marked as completed in sequence, and a congratulatory message is displayed when all activities are completed.

## Features

- Sticky progress bar that updates as activities are completed
- Sequential completion of activities with validation
- Attractive congratulatory message when all activities are completed
- Responsive design

## Technologies Used

- HTML
- CSS
  - Main styles (`styles.css`)
  - Congratulatory message styles (`congrats.css`)
- JavaScript (`script.js`)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sohelkureshi/construction-project-timeline.git
```

2. Navigate to the project directory:

```bash
cd construction-project-timeline
```

3. Open `index.html` in your web browser to view the application.

## File Structure

```
.
├── congrats.css
├── index.html
├── script.js
└── styles.css
```

- `index.html`: The main HTML file that contains the structure of the web page.
- `styles.css`: The main CSS file that contains styles for the timeline and progress bar.
- `congrats.css`: The CSS file that contains styles for the congratulatory message.
- `script.js`: The JavaScript file that handles the logic for marking activities as completed and updating the progress bar.

## Usage

1. Open `index.html` in a web browser.
2. Click the "Mark as Done" button for each activity to mark it as completed.
3. The progress bar will update accordingly, and a congratulatory message will appear when all activities are completed.

## Future Scope

Here are some potential enhancements and upgrades that can be made to the application:

1. **Dynamic Activity Management:**
   - Implement a feature to add, edit, or delete activities dynamically through the user interface.
   - Store activities in a database to allow persistence and retrieval of data.

2. **User Authentication:**
   - Add user authentication to allow multiple users to track their own project timelines.
   - Implement login and registration functionality.

3. **Progress Tracking and Reporting:**
   - Integrate detailed progress tracking with visual charts and reports.
   - Allow exporting of project progress reports in PDF or Excel formats.

4. **Notifications and Reminders:**
   - Set up email or in-app notifications for upcoming or overdue activities.
   - Implement reminders for users to complete pending activities.

5. **Mobile Compatibility:**
   - Enhance the mobile responsiveness and usability of the application.
   - Create a mobile app version of the application using frameworks like React Native or Flutter.

6. **Integration with Project Management Tools:**
   - Integrate with popular project management tools like Asana, Trello, or Microsoft Project for seamless workflow management.
   - Allow importing and exporting of project data between the application and these tools.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

