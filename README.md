# Workflow to create workshops and lessons

## Creating Workshops
Workshops can be found in the workshop directory.
To create a workshop, requires the following YAML front matter block.

* workshop: the name of the workshop
* edition: the semester the workshop is running in 
* author: the curriculum developer
* permalink: page link to the workshop

## Lessons
Workshop lessons will be written in the post directory.
Create a post with the following YAML front matter block.

* workshop: workshop that lessons is in
* author: author of the lesson
* order: order that lessons should appear in
