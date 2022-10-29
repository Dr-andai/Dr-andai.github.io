---
layout: post
title: "Access to Medicine"
subtitle: "Clinical Trials Part 1"
background: '/img/posts/AccessToMedicine/ClinicalPart1/pexels-suzy-hazelwood-3652701.jpg' 
---

A well-functioning health system ensures equitable access to essential medical products, vaccines and technologies of assured quality, safety, efficacy and cost-effectiveness, and their scientifically sound and cost-effective use. (*WHO framework for health systems*).
The SARS-CoV-2 had pharmaceutical companies in a foot race to discover a vaccine that was safe for everyone. The efficacy of the vaccine and it being safe to use across all populations became a question that arose. With the global north leading in vaccine production, this possed the question of where does Africa stand in the space of drug discovery and clinical trials.

<img src ="/img/posts/AccessToMedicine/ClinicalPart1/national-cancer-institute-aelk4Tn0vlI-unsplash.jpg" height="500px" width="100%"><img>

## What are Clinical Trials?
Clinical trials are a type of research that studies new tests and treatments and evaluates their effects on human health outcomes (*WHO*).They are conducted to collect data regarding the safety and efficacy of new drug and device development. In Kenya, The Pharmacy and Poisons Board will approve protocols for clinical trials for new drugs and established guidelines for clinical trials involving drugs already registered in Kenya. Some of the Clinical trials registered can be accessed through a data repository at <https://trialsearch.who.int>. The clinical development of a drug is classified into four key phases, with each phase requiring a different approach to trial design.

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
