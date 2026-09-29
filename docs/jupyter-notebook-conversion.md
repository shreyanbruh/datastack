# Jupyter Notebook Conversion

Steps to turn a `.ipynb` file into a plain `.py` file.

**1. Install the converter (one-time)**

```bash
pip install nbconvert
```

**2. Run the conversion**

```bash
jupyter nbconvert --to script your_notebook.ipynb
```

**3. Done**

A file named `your_notebook.py` shows up in the same folder. Open it and
you're good to go.

!!! tip
    Magic commands like `%matplotlib inline` or `!pip install ...` don't
    mean anything outside a notebook — `nbconvert` automatically comments
    them out, so double check nothing important was hiding in one.
