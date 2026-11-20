# Eleventy Sveltia Template

A minimal Eleventy 3 site styled with Bootstrap 5.3 and using the Sveltia CMS.

## Get started

```sh
npm install
npm start
```

Eleventy serves the site locally and rebuilds it when source files change. To generate a production build:

```sh
npm run build
```

Generated files are written to `_site/`. Edit `src/index.njk`, the shared layout in `src/_includes/layout.njk`,
and custom styles in `src/assets/css/site.css`.

## Sveltia CMS and GitHub

1. Create a GitHub repository containing this project. In `admin/config.yml`, replace
   `YOUR_GITHUB_USERNAME/YOUR_REPOSITORY` with its `owner/repository` name and change `branch` if needed.
2. Deploy the site from that branch and configure your host to rebuild on GitHub pushes.
3. Visit `/admin/` on the deployed site. Choose **Sign In with Token** and use a GitHub fine-grained
   personal access token restricted to the repository with **Contents: read and write** permission.
   Editors also need write access to the repository. Never commit tokens to the project.
4. Edit **Pages > Homepage** and save. Sveltia commits `src/_data/home.json` to the configured branch;
   the host's next build publishes the changes. The default workflow writes directly to the branch,
   so branch protection must allow the editor to push.

For OAuth login instead of a token, deploy the
[Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) and set `backend.base_url`
to its URL as described in the [GitHub backend guide](https://sveltiacms.app/en/docs/backends/github).
Keep authentication secrets in the authenticator, not in this repository.

For local editing, initialize or clone a Git repository, run `npm start`, and open
`http://localhost:8080/admin/` in a Chromium-based browser. Choose **Work with Local Repository**
and select the project root. Local changes must be committed and pushed separately.
See the [local workflow guide](https://sveltiacms.app/en/docs/workflows/local) for details.

Uploaded media is stored in `src/assets/uploads` in the repository and served from `/assets/uploads`.

Use **Posts** in the CMS to create and edit Markdown posts in `src/posts`. Each post has a title,
date, optional description, and body. Posts appear newest first at `/posts/` and are published at
`/posts/<slug>/` after the site rebuilds. The date is displayed in UTC.

This project deliberately avoids too few npm packages to break upgrades of eleventy. It is designed to be simple.

I intend to improve this template as I go along.
