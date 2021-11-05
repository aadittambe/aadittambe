# Hi &#128075;&#127997; &mdash; thanks for stopping by!

I am Aadit, a journalist and developer who tells data-driven stories visually &mdash; with code. My work helps people understand the news and make sense of the policies that impact them.

This repository displays data analysis and graphics production work for the [Howard Center for Investigative Journalism](https://merrill.umd.edu/howard-center-for-investigative-journalism), [Capital News Service](https://cnsmaryland.org) and [NBC News](https://nbcnews.com/datagraphics).

These code samples show my growth as a computational and data journalist since taking my first computer science course in January 2020. Since then, I have compiled code — both for data analysis and producing graphics — for the Howard Center for Investigative Journalism, Capital News Service and the data/graphics team at NBC News. My work demonstrates my commitment to figuring out programming concepts I may not know.

All of the code in this repository was either written by or contributed to by me. Here's an overview of what's in this repository.
- 🖥 [News products](#news-products)
  - [News app: Mapping every journalist killed in South Asia since 1992](#news-app-mapping-every-journalist-killed-in-south-asia-since-1992)
  - [Twitter bot: Documenting attacks on journalists, worldwide, in real time (in-progress)](#twitter-bot-documenting-attacks-on-journalists-worldwide-in-real-time-in-progress)
- &#128200; [Data analysis](#data-analysis)
  - [Analysis of campus police logs of universities in the DC metro area](#analysis-of-campus-police-logs-of-universities-in-the-dc-metro-area)
  - [Analysis of public transit ridership data](#analysis-of-public-transit-ridership-data)
  - [Fact-checking OSHA data and H-2B visa records](#analysis-of-osha-data-and-h-2b-visa-records)
  - [Analyzing OSHA complaints](#analysis-osha-complaints)
  - [Analysis of 2021 census data](#analysis-of-2021-census-data)
- &#128506; [Graphics production](#graphics-production)
  - [Data-driven story about census results ](#data-driven-story-about-census-results)
  - [Interactive line charts using D3](#interactive-line-charts-using-d3)
  - [Interactive U.S. map using D3](#interactive-us-map-using-d3)
  - [Interactive choropleth map using Leaflet](#vinteractive-choropleth-map-using-leaflet)
- &#128104;&#8205;&#128187; [About Me](#about)
  - 📝 [Resume](https://aadittambe.com/docs/AaditTambe_Resume.pdf)
  - 🌎 [Website](https://www.aadittambe.com)

## &#127758; News Products

### News App: Mapping every journalist killed in South Asia since 1992
**Python web scraping for data collection, Flask framework for development, JavaScript, Illustrator, ai2html and Leaflet for visualization, and pandas for data analysis**

This is my first news application developed after completing the [First News App](https://first-news-app.readthedocs.io/en/latest/#) tutorial. I wrote a web scraper to collect data from the Committee to Protect Journalists website to obtain biographical descriptions of each journalist's death. Using the GeoPy package, I converted locations to geographical coordinates — after cleaning and analyzing the data in pandas.

The app can be viewed [here](https://aadittambe.github.io/south-asia-journalists/build/index.html). The scraping script and data analysis can be viewed [here](https://github.com/aadittambe/app/blob/master/analysis/scraper.ipynb).

### Twitter bot: Documenting attacks on journalists, worldwide, in real-time (in-progress)
**Python web scraping for data collection, pandas for data analysis, Tweepy and the Twitter API for developing the bot**

After scraping data from the Committee to Protect Journalists' website about journalists killed in the line of duty, I wanted to find a way to document their stories. I built a bot that tweets death anniversaries of journalists who were killed. I plan to release an expanded news app that tracks — in real time — journalists who are killed across the world. This bot, in addition to tweeting anniversaries, will tweet deaths, in real time. The Python script for the bot can be found [here](bot/bot.py), and the bot can be viewed [here](https://twitter.com/press_attacked).

## &#128200; Data analysis

### Analysis of campus police logs of universities in the DC metro area
*Capital News Service* — **Python web scraping, tabula-py and pandas for analysis and cleaning, and GitHub Actions for automating data collection**

For an ongoing project, I am scraping arrest logs published by university police departments in Maryland and Washington, D.C., with a coworker.

We are using Beautiful Soup, Requests and Selenium to scrape PDFs, and tabula-py to convert downloaded into CSVs. Using GitHub Actions, we are automating our data collection. Our scripts can download data stored in various folder structures.

A sample scraping script I wrote can be found [here](police-logs/howard_scraper.ipynb), which uses Beautiful Soup, Requests and tabula-py. A sample GitHub of a GitHub Actions workflow we designed can be found [here](police-logs/scrape.yml).

### Analysis of public transit ridership data
*NBC News* — **Python pandas for data analysis**

During my internship at NBC News, I pitched a story about America's return to public transit, as cities began removing Covid restrictions and social distancing measures. I got access to a data set maintained by the mass transit scheduling app Transit, in partnership with the American Public Transportation Association, which estimates ridership based on the use of the app and information from transit agencies. 

I used pandas to identify trends in U.S. cities, and my analysis found that although transit in some metro areas showed a rebound, most transit authorities found themselves struggling to bring ridership back.

The story, which includes graphics produced by me, can be found [here](https://www.nbcnews.com/news/us-news/pandemic-sunk-mass-transit-use-data-shows-its-slow-recovery-n1274784).

### Analysis of OSHA data and H-2B visa records
*Howard Center* — **R for data analysis**

I was a part of a five-person data team that analyzed OSHA complaints that revealed that migrant seafood-processing workers — who are legally hired and transported to the U.S. each season through the federal H-2B visa program — face heightened risks of catching COVID-19.

I led the data team's fact-check and we published our findings in an R markdown file, along with the story. The document can be found [here](https://howard-center-investigations.github.io/essential_and_exposed/migrant_seafood/index.html).

Working on the data team gave me a broader sense of how code can be used to develop newsworthy findings from complex data sets. The project led me to become comfortable with R, use packages such as tidyverse, janitor, dplyr and lubridate, as well as blscraper library. I learned to functions, loops, merges and joins.

The project can be found [here](https://cnsmaryland.org/2021/05/12/us-deems-migrant-seafood-workers-essential-but-limits-their-covid-19-protections/).

### Analysis OSHA complaints
*Howard Center* — **R for data analysis**

Before the Howard Center began the project, I played a crucial role in narrowing down the project idea. I spent a month analyzing federal OSHA complaint records related to COVID-19. This analysis later led to the data findings that were at the center of the investigative project. 

The initial analysis can be found in [this](/osha_analysis/osha_analysis.rmd) markdown.

### Analysis of 2021 census data
*Capital News Service* — **R for data analysis**

I analyzed the county-level census data that was released this year, and developed data-driven findings of demographic changes in the Washington, D.C. metro area and the state of Maryland. 

My analysis can be found in [this](census/analysis/analysis.Rmd) notebook, and the story can be viewed [here](https://cnsmaryland.org/2021/10/07/takeaways-from-the-2020-census-for-maryland-in-5-charts).

## &#128506; Graphics production 

### Data-driven story about census results
*Capital News Service* — **JavaScript, D3, Leaflet and ai2html for data visualization; R for data analysis**

I analyzed 2020 county-level census data in R to develop interesting findings about the state's demographic shift and produce a data-driven story for CNS.

All my code for graphics can be viewed [here](census/graphics/). The story with graphics can be found [here](https://cnsmaryland.org/2021/10/07/takeaways-from-the-2020-census-for-maryland-in-5-charts).

### Interactive line charts using D3
*NBC News* — **Javascript and D3 for data visualization**

When the Centers for Disease Control and Prevention released data indicating that half of the country was fully vaccinated against Covid, I wanted to show the disparity between vaccination rates between different states. I used D3 to create a small-multiple of line charts with tooltips to show the vaccination rates in 10 most- and least-vaccinated states.
The story and graphics can be found [here](https://www.nbcnews.com/news/us-news/half-america-now-fully-vaccinated-n1275798).

### Interactive U.S. map using D3
*NBC News* — **Javascript and D3 for data visualization**

We got access to a data set maintained by the Murder Accountability Project about homicides in the U.S. Our analysis showed that the rate of solved homicides was declining nationally and locally, and the rate for Black victims was falling even faster.

I used D3 to create an interactive U.S. map to show the comparison of homicide rates of Black and white victims over years using a dropdown function.

The story, along with the interactive graphic, can be found [here](https://www.nbcnews.com/news/us-news/track-solved-murder-rates-united-states-n1271928).

### Interactive choropleth map using Leaflet
*NBC News* — **Javascript and Leaflet for data visualization**

When state legislatures across the U.S. were passing voting laws, I used data collected by the Brennan Center for Justice to create interactive choropleth maps to show which states in the country have passed restrictive and expansive laws.

The story, along with the interactive graphic, can be found [here](https://cnsmaryland.org/2021/09/14/an-aggressive-wave-of-voting-laws-nationwide-in-charts/).

## &#128104;&#8205;&#128187; About

I am currently a fellow at the Howard Center for Investigative Journalism, and a data and graphics reporter for Capital News Service, where I write web scrapers, crunch data sets to develop stories and create graphics that illustrate reporting.

Previously, I worked for NBC News on the data and graphics team — I wrote code to develop interactive graphics that explain the news visually.

I am currently pursuing a master’s degree in data and computational journalism at the University of Maryland. I have an undergraduate degree in journalism and mass communication and a minor in German from the University of Iowa.

If you like to keep up with current events and care about the news experience as a whole, too — or want to simply chat about trains or nerd out about antique fountain pens — we should connect!

- 📝 [Resume](https://aadittambe.com/docs/AaditTambe_Resume.pdf)
- 🖥 [Website](https://www.aadittambe.com)