![REPO SIZE](https://img.shields.io/github/repo-size/brandon-lanier/weekend-redux-feedback-loop.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/brandon-lanier/weekend-redux-feedback-loop.svg?style=flat-square)
# Prime Feedback Loop

## Description

_Duration: 2 Day Sprint_

This app was designed to survey Prime Digital Academy students on their overall feeling, understanding and support with the curriculum.  

The app runs through 3 ratable sections, a comment board and a final review before submittal.  Users have the ability to go back and change an entry before final submission if they so choose.

The app also comes with an admin feature that can be accessed from the top left menu bar.  The admin section contains all user inputs that have been stored in the database, and from there, the admin can either delete an entry or flag it for further review.  Upon flagging, the feedback will be displayed in a separate section to distinguish the need to address it.
## Screen Shot

![alt text](https://github.com/Brandon-Lanier/weekend-redux-feedback-loop/blob/master/server/public/images/screencapture.gif?raw=true)
### Prerequisites

- Internet Browser
- Node.js
- Express
- Database GUI (e.g. Postico)
- PostgreSQL


## Installation

- Run npm install --yes in terminal to install all necessary dependencies.
- To setup the database locally, please see the database.sql file for instructions.

## Usage

<ins>User</ins>

1. Click on the "Start Feedback" button at the home page.
2. Enter a rating (0-5) for Feeling, Understanding and Support (required).
3. Leave any additional comments in the comment section when prompted (not required).
4. Hit the "Go Back" button at any time to change a previous selection.
5. Once all entries are completed, the review page will show your selections and you may submit for completion.
6. You can toggle between active task and completed task by using the buttons under the toolbar.
7. To delete all completed tasks, click on the "Delete All Completed" button in the completed tasks section.

<ins>Admin</ins>

1. Click the menu icon in the top left and select "Admin".
2. All previous entries will be shown on the admin page.
3. To delete, select the trash can icon next to the entry.
4. To mark as flagged for review, click the flag icon to move it to a separate section.

## Built With

- Javascript
- React
- Redux
- Node.js
- Express
- PostgreSQL
- Material UI
- SweetAlert
- HTML
- CSS
## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

Thanks to everyone in the Adam's Cohort for your continued support during our third week of tier 2!


## Support

If you have suggestions or issues, please feel free to contact me at [Brandonjlanier@gmail.com](mailto:brandonjlanier@gmail.com)

Visit my [LinkedIn](https://www.linkedin.com/in/brandon-lanier-b5678b26/)