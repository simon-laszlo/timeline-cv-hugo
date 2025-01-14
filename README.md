<h1 align=center>Timeline CV Hugo</h1> 
<p align=center> Timeline CV is a Hugo theme designed specifically for CV websites. This theme is packed with elements that you need to show info about your experiences, school, personality, and contacts. </p>

<h2 align="center"> <a target="_blank" href="https://timelinecv.netlify.app/" rel="nofollow">Demo</a></h2>

<p align=center>
  <a href="https://github.com/gohugoio/hugo/releases/tag/v0.140.0" alt="Contributors">
    <img src="https://img.shields.io/static/v1?label=min-HUGO-version&message=0.140.0&color=f00&logo=hugo" />
  </a>

  <a href="https://github.com/simon-laszlo/timeline-cv-hugo/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/simon-laszlo/timeline-cv-hugo" alt="license"></a>

</p>

---
## Key Features
- Matomo analytics support
- Timeline view
- A4 view
- client side pdf export
- CSS and Js bundle with hugo pipe
- Netlify settings predefine
- Email address encoding to prevent from spam
- Google page speed optimized


## Local development

```bash
# clone the repository
git clone git@github.com:simon-laszlo/timeline-cv-hugo.git

# cd in the project directory
$ cd timeline-cv-hugo/exampleSite/

# Start local dev server
$ hugo server --themesDir ../..
```

## Create a new hugo site
```bash
hugo new site my_cv
cd my_cv
git init
git submodule add https://github.com/simon-laszlo/timeline-cv-hugo
echo "theme = 'timeline-cv-hugo'" >> config.toml
```

## Deployment and hosting

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/simon-laszlo/timeline-cv-hugo)

Follow the steps.

<!-- reporting issue -->
## Reporting Issues
We use GitHub Issues as the official bug tracker for the Timeline CV Template. Please Search [existing
issues](https://github.com/simon-laszlo/timeline-cv-hugo/issues). Someone may have already reported the same problem.
If your problem or idea has not been addressed yet, feel free to [open a new
issue](https://github.com/simon-laszlo/timeline-cv-hugo/issues).


<!-- licence -->
## License

**Code License:** Released under the [MIT](https://github.com/simon-laszlo/timeline-cv-hugo/blob/master/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their licenses. We don't have permission to
share those images.

<!-- resources -->
## Special Thanks
- [Bulma](https://bulma.io/)
- [Bulma-timeline](https://wikiki.github.io/components/timeline/)
- [jsPDF](https://github.com/parallax/jsPDF)
- [html2canvas](https://github.com/niklasvh/html2canvas)
- [Fontawesome Fonts](https://fontawesome.com/)
- [All Contributors](https://github.com/simon-laszlo/timeline-cv-hugo/graphs/contributors)

