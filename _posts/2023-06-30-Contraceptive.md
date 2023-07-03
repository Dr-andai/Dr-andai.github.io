---
layout: post
title: "Contraceptives"
subtitle: "Trends on Contraceptive Uptake"
background: '/img/posts/Contraceptives/reproductive-health-supplies-coalition-4aerIHVyBBE-unsplash.jpg'
---
<style>
body {
text-align: justify}
figcaption {
  text-align: center;
  font-style: italic;
}
</style>
## Intrduction
Contraception choice amongst women of reproductive age has been a long topic of discussion over the years. Different methods have been embraced in varying regions across the world. The Sustainable Development Goals (SDGs) target 3.7 calls on countries “by 2030, to ensure universal access to sexual and reproductive healthcare services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes” (*UN Contraceptive Data 2019*).  

<div style ="text-align: center">
<b>“I want to bring every good thing to one child before I have another.” Mother from Korogocho; a slum outside Nairobi, Kenya</b>
</div>  
<br>
<figure>
<img src= "/img/posts/Contraceptives/mtotomama-01.jpg" height="400px" width="100%"><img>
<figcaption>Mother and Child</figcaption>
</figure>


## Trends
From The Kenya DHS 2022, the prevalence of modern contraceptive methods among women aged 15-49 was 57%. The methods included male and female sterilisation, injectables, intrauterine devices (IUDs), contraceptive pills, implants, female and male condoms, emergency contraception, standard days, and lactation amenorrhea (KDHS 2022).  

This article looks at data provided by the KDHS that show the rate of change over the past 5 years on some of the modern methods listed above. And correlates with the broader literature on the reason for the change.
``` r
# sample code on creating a plot
# Data Visualization: Contraceptive Use by Method between 2018-2022
## Each method has a unique identity colour
plot2 <- trends_long%>%
  rename("Method"="Contraceptive Method") %>%
  ggplot(aes(x=year, y=clients, color = Method))+
  labs (title = "Contraceptive Use by Method",
        y = "Contraceptive users",
        x = "",
        color = "Method")+
  scale_y_continuous(trans = 'log2')+
  geom_line(linewidth = 1.5, position = pd)+
  geom_point(size = 2, shape=21, fill="grey",position = pd)+
  theme_few()+
  scale_color_manual(values = myColours2)
plot2
# Data Source: Kenya National Bureau of Statistics
# full code available on GitHub profile
```
<img src="/img/posts/Contraceptives/contraceptive trend.png" width="100%"><img>

From the dataset, Family planning Injections and Implants are most preferred by new users. The 2022 KDHS puts the prevalence of contraceptive use at 20% and 19% for injectables and implants, respectively, with significant uptake of implants which are increasingly overtaking the use of injectables. Long Term Contraceptive methods (IUCD Insertion and Sterilization BTL) had a low uptake, with a declining trend over the years. Compared to the history of international family planning, the narrative has centered on using IUDs, sterilization, and pills (Tsui et al. 2017).  
A user of the injectable method was likely to retain the method, denoted by a steady trend of reuptake on the injectables over the years. This trend is slowly being reflected across Sub-Saharan Africa, where the changing composition of contraceptive methods used by married Sub-Saharan African women, first with injectables and then with implants, is unique.

<img src="/img/posts/Contraceptives/contraceptive trend2.png" width="100%"><img>

## Conclusion
Enthusiasm for family planning rose decidedly after the 2012 London Summit, co-sponsored by the Bill & Melinda Gates Foundation and the UK Government, in partnership with the United Nations Population Fund, national governments, other donors, civil society, and agencies from other sectors. The collaboration has enabled more than 120 million women and girls to use contraceptives.  
The 5 years trend observed resonates with the observation that implants may be addressing contraceptive demand for limiting, as opposed to spacing. Over the years, there has been little degradation in injectable use, even with rising implant use. As advocacy for contraceptive practice, different players will come on board, contributing to the region's unique landscape of contraceptive uptake.

#### *Further Reading*
*- Kenya Demographic and Health Survey (2022 KDHS)*
*- Tsui, A. O., Brown, W., & Li, Q. (2017). Contraceptive Practice in Sub-Saharan Africa. Population and development review, 43(Suppl Suppl 1), 166–191. https://doi.org/10.1111/padr.12051*  
*- un_2019_contraceptiveusebymethod_databooklet.pdf*

