# AKCSE UofT Website

This repository contains the AKCSE UofT website built using Next.js, Tailwind CSS, and Supabase. Content for pages is dynamically rendered from the database, and upcoming events are fetched via the Google Calendar API. (https://akcseuoft.ca/)

## Note

- The project uses Supabase with a PostgreSQL database
- The data shown in the images below are sample data

## Research & Literature "/research"

<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="readme-media/rl-1.png" alt="Image 1" style="width: 100%; height: auto;" /></td>
    <td style="width: 50%;"><img src="readme-media/rl-2.png" alt="Image 2" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

![Image](readme-media/db-research-1.png)
Table: research
| Column | Description |
| ------------- | --------------------------- |
| `id` | [uuid] Randomly generated |
| `title` | [text] |
| `subtitle` | [text] |
| `preview_img_src` | [text] Thumbnail image seen as a card |
| `article_data` | [jsonb] The data contains component types:<br>1. `header` "type": "header", "header": {your header} <br>2. `text` "type": "text", "text": {your text}<br>* Superscript can be done by typing `<sup>{superscripted text}</sup>` inside "text"<br>3. `text-bold` "type": "text-bold", "text": {your text}<br>4. `image` "type": "image", "image_src": {image url}, "image_description": {your description} <br>5. `video` "type": "video", "video_src": {video url} <br>6. `link` "type": "link", "link_title": {your title}, "link": {link url} <br><br>This structure enables the article to include multiple component types, allowing for easy modification and dynamic rendering by switching between components|
| `published_date` | [timestamptz] Initial published date of the article including the timezone (EDT by default) |
| `last_updated_date` | [timestamptz] Last modified date of the article including the timezone (EDT by default) |
| `published` | [bool] Used to control whether the visibility of the article is public or private |

## Events "/events"

<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="readme-media/e-1.png" alt="Image 3" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

![Image](readme-media/db-events-1.png)
Table: events
| Column | Description |
| ------------- | --------------------------- |
| `id` | [uuid] Randomly generated |
| `title` | [text] |
| `description` | [text] |
| `img_src` | [text] Thumbnail image seen as a card |
| `date` | [timestamptz] Date of the event including the timezone (EDT by default) |
| `public` | [bool] Used to control whether the visibility of the event is public or private |

## Members "/members"

<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="readme-media/m-1.png" alt="Image 3" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

![Image](readme-media/db-members-1.png)
Table:members
| Column | Description |
| ------------- | --------------------------- |
| `id` | [uuid] Randomly generated |
| `name` | [text] |
| `role` | [text] |
| `grade` | [text] |
| `major` | [text] |
| `image` | [text] Profile picture |
| `title` | [text] Department |

## Home "/"

<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="readme-media/h-1.png" alt="Image 3" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

![Image](readme-media/db-carousel-1.png)
Table: carousel
| Column | Description |
| ------------- | --------------------------- |
| `id` | [uuid] Randomly generated |
| `src` | [text] Image source |
| `alt` | [text] Image alt |
| `order` | [int2] Order of the image |