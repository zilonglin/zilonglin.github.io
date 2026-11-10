# zilonglin.github.io

Personal academic website of Zilong Lin — https://zilonglin.github.io

Built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT license, see `LICENSE`)
and deployed to GitHub Pages by the `Deploy site` GitHub Action (`.github/workflows/deploy.yml`).

## Where to edit

| What                                            | File                       |
| ----------------------------------------------- | -------------------------- |
| Home page / bio                                 | `_pages/about.md`          |
| Publications                                    | `_bibliography/papers.bib` |
| News                                            | `_news/announcement_*.md`  |
| Research, Awards, Education, Services, Teaching | `_pages/*.md`              |
| Social links                                    | `_data/socials.yml`        |
| Site settings                                   | `_config.yml`              |

### Publication fields

Besides the standard BibTeX fields, each entry in `papers.bib` can use:

- `abbr` – venue badge, e.g. `{NDSS'22}`
- `acceptance_rate` – shown after the venue as "(Acceptance rate: 16.2%)", e.g. `acceptance_rate={16.2%}`
- `award`, `media` – shown below the venue line
- `html`, `pdf`, `code`, `video` – buttons
- `preview` – thumbnail in `assets/img/publication_preview/`
- `selected={true}` – also show on the home page

## Updating Google Scholar citation counts

Google Scholar blocks requests from GitHub Actions, so the citation badges read their numbers from
`_data/citations.yml`. To refresh them, run this on your own computer, then commit and push the updated file:

```bash
python bin/update_citations.py
```

## Local preview

```bash
bundle install
bundle exec jekyll serve
```
