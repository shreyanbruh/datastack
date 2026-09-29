# GitHub Tutorial

## Quick Start (just the steps)

No explanations here — just copy and run these in order. Full details on
each step are further down the page if you get stuck.

**1. Open your project folder in a terminal**

=== "Mac"

    Open **Finder**, navigate to your project folder, then right-click it
    and choose **New Terminal at Folder**.

    (No option there? Open the **Terminal** app and type `cd ` followed by
    dragging the folder into the window, then hit Enter.)

=== "Windows"

    Open **File Explorer**, navigate to your project folder, right-click
    inside it and choose **Open in Terminal** (or hold Shift, right-click,
    choose **Open PowerShell window here**).

**2. Set up the repo (pick ONE)**

````bash
# Brand new folder, nothing on GitHub yet
git init
````

````bash
# Repo already exists on GitHub — download it
git clone https://github.com/<username>/<repo-name>.git
````

**3. Get the latest changes before you start working**

````bash
git pull
````

**4. Make your edits, then stage them**

````bash
git add .                              # everything you changed
# or
git add path/to/file.py                # just specific files
````

**5. Commit and push**

````bash
git commit -m "Describe what you did"
git push
````

That's the entire weekly loop: **pull → edit → add → commit → push.**

!!! tip "First time pushing a brand-new repo?"
````bash
    git remote add origin https://github.com/<username>/<repo-name>.git
    git branch -M main
    git push -u origin main
````
    After this one-time setup, `git push` alone works from then on.

---

## Full Reference

Everything below explains *why* each command above works, plus a few extra
commands worth knowing. Read as much or as little as you need.

!!! tip "Before you start"
    Make sure Git is installed (`git --version` in your terminal). If it's
    not, install it from [git-scm.com](https://git-scm.com/downloads).

---

### 1. Initializing a repository

If you're starting a brand new project folder that isn't a Git repo yet:

````bash
cd path/to/your-project
git init
````

This creates a hidden `.git` folder that tells Git to start tracking changes
in this directory. You only run this **once** per project.

---

### 2. Connecting to an existing (arbitrary) repo

Most of the time you won't `git init` — you'll clone a repo that already
exists on GitHub, or connect your local folder to one.

=== "Cloning a repo"

    Use this when the repo already exists on GitHub and you just want a
    local copy:

````bash
    git clone https://github.com/<username>/<repo-name>.git
````

    This downloads the whole project into a new folder named after the repo.

=== "Connecting a local folder"

    Use this when you already have a local folder (with `git init` run) and
    want to link it to a GitHub repo you created:

````bash
    git remote add origin https://github.com/<username>/<repo-name>.git
    git branch -M main
    git push -u origin main
````

    - `remote add origin` tells Git where "home base" is
    - `branch -M main` renames your current branch to `main`
    - `push -u origin main` uploads your code and links your local `main`
      branch to the remote one, so future pushes are just `git push`

You can check which remote you're connected to at any time with:

````bash
git remote -v
````

---

### 3. Pulling the latest changes

Before you start working — especially if teammates have pushed since you
last checked — pull down the latest version of the repo:

````bash
git pull
````

This merges any new commits from GitHub into your local copy. Doing this
first avoids the messiest kind of conflict: editing a file that someone
else already changed and pushed.

---

### 4. Staging changes with `git add`

Before Git can save (commit) your changes, you have to **stage** them —
tell Git which changes you actually want included.

=== "Add specific files"

````bash
    git add path/to/file.py another/file.md
````

    Use this when you've changed several files but only want to commit
    some of them right now.

=== "Add everything"

````bash
    git add .
````

    Stages every changed or new file in the current directory (and
    subdirectories). This is the most common one — use it once you're happy
    with everything you've changed.

Check what's staged (and what isn't) at any point with:

````bash
git status
````

---

### 5. Ignoring files with `.gitignore`

Some files should **never** be tracked — build artifacts, virtual
environments, API keys, `.DS_Store`, large datasets, etc. Create a file
named exactly `.gitignore` in your project root and list patterns to skip:

````gitignore title=".gitignore"
# Python
__pycache__/
*.pyc
venv/
.env

# OS junk
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/

# Data / large files
*.csv
data/raw/
````

!!! warning
    `.gitignore` only stops files from being tracked **going forward**. If a
    file is already tracked, adding it to `.gitignore` won't remove it —
    you'd need `git rm --cached <file>` first.

---

### 6. Writing a README

Every repo should have a `README.md` at the root — it's the first thing
anyone sees when they open your project on GitHub. See the
[README template](#readme-template) below for one you can copy directly.

---

### 7. Making commits

A commit is a saved snapshot of your staged changes, with a message
describing what changed.

````bash
git add .
git commit -m "Add data cleaning script for week 3"
````

**Good commit message habits:**

- Write in the present tense: "Add feature" not "Added feature"
- Be specific: "Fix off-by-one error in loop" beats "fix bug"
- Keep the summary line under ~50 characters; add more detail on a second
  line if needed

You can see your commit history at any time with:

````bash
git log --oneline
````

---

### 8. Pushing your commits

Once you've committed locally, push to upload your commits to GitHub:

````bash
git push
````

The first time you push a new branch, you need to set its upstream:

````bash
git push -u origin <branch-name>
````

After that, `git push` alone is enough for that branch.

!!! tip "Typical weekly workflow"
````bash
    git pull
    git add .
    git commit -m "Describe what you did this week"
    git push
````

---

## README Template

Copy this into a new `README.md` file at the root of your project and fill
in the blanks. Keeping this structure consistent across everyone's repos
makes it much easier to review each other's work.

````markdown title="README.md"
# Project Name

One or two sentences describing what this project does.

## Team

- Your Name — role (e.g. data cleaning, modeling, visualization)

## Setup

Steps to get this running locally:

1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `pip install -r requirements.txt`
3. Run it: `python main.py`

## Project Structure

```
project/
├── data/           # raw and processed data (not tracked if large)
├── notebooks/       # exploratory analysis
├── src/              # source code
└── README.md
```

## Status

What's done, what's in progress, what's next.

## Notes

Anything else a teammate would need to know to pick this up.
````