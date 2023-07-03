---
layout: post
title: "Access to Medicine"
subtitle: "Clinical Trials Part 1"
background: '/img/posts/AccessToMedicine/ClinicalPart1/national-cancer-institute-KMvoHcB-w5g-unsplash.jpg' 
---
<style>
body {
text-align: justify}
figcaption {
  font-style: italic;
  padding: 2px;
  text-align: center;
}
</style>
A well-functioning health system ensures equitable access to essential medical products, vaccines and technologies of assured quality, safety, efficacy and cost-effectiveness, and their scientifically sound and cost-effective use. (*WHO framework for health systems*).
The SARS-CoV-2 had pharmaceutical companies in a foot race to discover a vaccine that was safe for everyone. The efficacy of the vaccine and its safety across all populations became a question. With the global north leading in vaccine production, the global south had to go back to the drawing board and assess where it stands in drug discovery and clinical trials.

<figure>
<img src ="/img/posts/AccessToMedicine/ClinicalPart1/national-cancer-institute-27KVI33BS_E-unsplash.jpg" height="500px" width="100%"><img>
<figcaption>Technician in a laboratory</figcaption>
</figure>

## What are Clinical Trials?
Clinical trials are a type of research that studies new tests and treatments and evaluate their effects on human health outcomes (*WHO*). Clinical trials are conducted to collect data regarding the safety and efficacy of a new drug and device development. One can readily access ongoing clinical trials through a data repository at <https://trialsearch.who.int>. The mission of the WHO International Clinical Trials Registry Platform is to ensure that a complete view of research is accessible to all those involved in healthcare decision-making. 
In Kenya, The Pharmacy and Poisons Board will approve protocols for clinical trials for new drugs and establish guidelines for clinical trials involving drugs already registered in Kenya.  
The clinical development of a drug involves four key phases, each requiring a different approach to trial design.  
* **Phase I** Studies in this phase are exploratory and conducted in small subject populations who are selected by narrow criteria, leading to a relatively homogeneous
population which is closely monitored.
* **Phase II** studies primary objective is to explore therapeutic efficacy in patients. An important goal for this phase is to determine the dose(s) and regimen for the phase 3 confirmatory trials. 
* **Phase III** studies objective is to confirm therapeutic benefit. These studies carried out in phase 3 are often known as the ‘pivotal’ studies and complete the information required to support the proposed product information for use of the drug in the marketing authorization application (MAA).
* **Phase IV** studies, often called postmarketing surveillance trials,begins after the approval of the drug. Commonly conducted studies include additional drug–drug interaction, dose-response or safety studies, and studies designed to support the commercial use under the approved indication. (*Oxford Handbook of Clinical and Healthcare Research 2016*)

``` r
#Data Visualization 
 plot1 <- ggplot(data = Phases_data1,
         aes(x =count_a , y =fix_Phase, label = round (count_a, 1)))+
    geom_point()+
    geom_segment(aes(y=fix_Phase, yend=fix_Phase, x=0, xend=count_a),
                 size = 1,
                 color = 'grey')+
    geom_point(
      size = 6,
      color = '#5D3FD3'
    )+
    geom_text(aes(label=count_a),color='white', size = 3.5)+
    theme_light()+
    theme (
      panel.grid.major = element_blank(),
      panel.border = element_blank(),
      axis.ticks.x = element_blank()
    )+
    xlab("")+
    ylab("Phases")+
    ggtitle("Clinical Trials Phases Distribution, Kenya")+
    labs (subtitle = '01-Jan to 30-Sep 2022')+
    scale_x_continuous(breaks = breaks_width(5))
#Data Source: trialsearch.who.int
```
<img src="/img/posts/AccessToMedicine/ClinicalPart1/unnamed-chunk-5-1.png"><img>
