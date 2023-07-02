---
layout: post
title: "Access to Medicine"
subtitle: "Trends"
background: '/img/posts/Trials/janko-ferlic-sfL_QOnmy00-unsplash.jpg' 
---
<style>
body {
text-align: justify}
</style>
## Introduction
In 1987, The World Medical Association (WMA) developed the Declaration of Helsinki: a statement of ethical principles for medical research involving human subjects, including research on identifiable human material and data. The Declaration was vital in regulating the nature of clinical trials by enforcing the principles outlined. Among the principles was registering a clinical trial to a publicly accessible database.  In 2006, the World Health Organization (WHO) established the International Clinical Trials Registry Platform (ICTRP) to provide a single point for access to global clinical trials.  
  
## Objective  
Edem et al. did a descriptive analysis examining the trends in clinical trial registration in Sub-Saharan Africa (SSA). 
They conducted a basic search of ClinicalTrials.gov (CTG), the Pan African Clinical Trials Register (PACTR), and 
the International Standard Randomized Controlled Trial Number (ISRCTN) on 15 August 2020, 18 August 2020, and 9 September 2020, respectively. 
This article will dive into Text analysis on the conditions conducted from clinical trials registered in Kenya from 2018-2023 in the ICTRP. No other search inclusion criteria was used. 
## Results
``` r
# Data Visualization: Wordcloud of the most common coditions from the data set
## Data ordered in reference to Population Target size
col <- sapply(seq(0.1, 1, 0.1), function(x) adjustcolor("#0E2038", x))
par(bg = "#BACAD5") # set background color
textplot_wordcloud(corp_dfm, font="Helvetica 65 Medium", rotation = 0, color = col)
# Data Source: trialsearch.who.int  
# Access extra code from my GitHub profile
```
<img src="/img/posts/Trials/word cloud.png" width="100%"><img>  

HIV was the most associated condition registered in the clinical trial conditions. Conditions captured in the registry involved diseases, infections and disorders. 
Covid-19, Malaria and Sickle-cell disease were among the notable diseases on the registry. The trials conducted align with the country’s health needs during the specified period.

<img src="/img/posts/Trials/Word frequency.png" width="100%"><img>  

Edem et al. went further to highlight the trend of conditions from ISTRCN. Most registered trials involved interventions addressing infectious diseases and infestations (42.5%). 
A further 12% were concerned with maternal and newborn conditions, and 6.5% were related to mental and behavioral conditions. No specific disease condition was mentioned in 55 of 
the identified trials. 

<img src="/img/posts/Trials/Spread over 5 years.png" width="100%"><img> 

## What next?
The scope of this post covered clinical trials conducted from 2018-2023 in Kenya. The next step will be to expand on the timeframe and depth of the dataset by covering clinical trials in SSA. We’ll also examine how the intervention type of the clinical trial relates to the condition researched. The goal will be to apply principles of Text analysis to derive insight on the landscape of clinical trials.

# Further Reading
*- Edem, B., Onwuchekwa, C., Wariri, O. et al. Trends in clinical trial registration in sub-Saharan Africa between 2010 and 2020: a cross-sectional review of three clinical trial registries. Trials 22, 472 (2021). https://doi.org/10.1186/s13063-021-05423-1*
