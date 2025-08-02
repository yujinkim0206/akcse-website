# Note
* Every page.tsx file must include both a Header and a Footer.
* The project uses Supabase with a PostgreSQL database.
* The data shown in the images below are sample data.

# Research & Literature "/research"

<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="readme-media/rl-1.png" alt="Image 1" style="width: 100%; height: auto;" /></td>
    <td style="width: 50%;"><img src="readme-media/rl-2.png" alt="Image 2" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

![Image](readme-media/db-research-1.png)
Table: research
| Column |   Description                 |
| ------------- | --------------------------- |
| `id`    | [uuid] Randomly generated |
| `title`         | [text]        |
| `subtitle`    | [text]  |
| `preview_img_src`    | [text] Thumbnail image seen as a card  |
| `article_data`    | [jsonb] The data contains a variable type which can be one of the following: [header, text, text-bold, image, video, link]. This structure enables the article to include multiple component types, allowing for easy modification and dynamic rendering by switching between components. |
| `published_date`    | [timestamptz] Initial published date of the article including the timezone (EDT by default).  |
| `last_updated_date`    | [timestamptz] Last modified date of the article including the timezone (EDT by default).  |
| `published`    | [bool] Used to control whether an article is public or private. |

# Events "/events"
<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="readme-media/e-1.png" alt="Image 3" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

![Image](readme-media/db-events-1.png)
Table: events
