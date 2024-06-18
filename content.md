<section data-auto-animate>
<h2>Motivation</h2>
</section>
<section data-auto-animate>
<h2>Motivation</h2>
<p>Increasing geopolitical tensions</p>

<aside class="notes">

- Protectionism
  - IRA, Made in China
- Embargoes
  - Russian gas
</aside>

</section>
<section data-auto-animate>
<h2>Motivation</h2>
<p>Increasing geopolitical tensions</p>
<p>Vulnerabilities of globalisation</p>

<aside class="notes">

- COVID
- Shipping
  - 12 and 5% of global trade go via Suez and Panama respectively
  - Suez & Panama blockages
</aside>

</section>
<section data-auto-animate>
<h2>Motivation</h2>
<p>Increasing geopolitical tensions</p>
<p>Vulnerabilities of globalisation</p>
<p>Need to transition to sustainable energy sources</p>
<aside class="notes">

- Increases both
  - Quantity and
  - Types of metals required
  
</aside>
</section>

<section data-auto-animate>
<h2>Motivation</h2>
<p>Increasing geopolitical tensions</p>
<p>Vulnerabilities of globalisation</p>
<p>Need to transition to sustainable energy sources</p>
<img class="r-stretch" src="./assets/EV_metals.png" />
<aside class="notes">
For example an EV
</aside>
</section>

<section data-auto-animate>
<h2>Motivation</h2>
<p>Increasing geopolitical tensions</p>
<p>Vulnerabilities of globalisation</p>
<p>Need to transition to sustainable energy sources</p>
<img class="r-stretch" src="./assets/EV_metals.png" />
<p>Requires a new system of trade</p>
<aside class="notes">
Further technoogical innovations may require further modifications to the trade network 
</aside>
</section>

---


# Contributions
<!-- .slide: data-auto-animate -->
---
# Contributions
<!-- .slide: data-auto-animate -->
**Method to produce monthly Natural Gas data**


---

# Contributions
<!-- .slide: data-auto-animate -->
**Method to produce monthly Natural Gas data**
> From public data: Production, consumption, stockpiling, and trade flows

Note:
- From public data, includes
- Monthly data allows stockpiling
  - Captures variations throughout the year

---

# Contributions
<!-- .slide: data-auto-animate -->

**Method to produce monthly Natural Gas data**
> From public data: Production, consumption, stockpiling, and trade flows

**A model of global trade for optimal commodity stockpiling**

Note:
- Using this data we create


---

# Contributions
<!-- .slide: data-auto-animate -->
**Method to produce monthly Natural Gas data**
> From public data: Production, consumption, stockpiling, and trade flows

**A model of global trade for optimal commodity stockpiling**
> Trade is represented as a graph and solved as a Mixed-Integer-Linear Program


---
<!-- - Key to energy transition
- Recent geopolitical uncertainty
- High data availability
-->

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology</span> <span class="fragment">: Data</span></h2>
</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Data</span></h2>
<p>Combined multiple sources of public data</p>
</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Data</span></h2>
<p>Combined multiple sources of public data</p>
<p>Created a network of global Natural Gas trade</p>
</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Data</span></h2>
<p>Combined multiple sources of public data</p>
<p>Created a network of global Natural Gas trade</p>
- Pipeline

<aside class="notes">
- Includes a pipeline network in a similar style to other physical networks, e.g. Power
  
</aside>

</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Data</span></h2>
<p>Combined multiple sources of public data</p>
<p>Created a network of global Natural Gas trade</p>
- Pipeline <br>
- LNG
  
<aside class="notes">
- Also includes LNG where the link capacity is the previous largest volume of trade
  
</aside>

</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Optimisation</span></h2>
</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Optimisation</span></h2>
<p>Formulated a Non-Linear Program</p>
<blockquote data-id="both-trade-nets">Includes both trade networks</blockquote>
</section>
<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Optimisation</span></h2>
<p>Formulated a Non-Linear Program</p>
<blockquote data-id="both-trade-nets">Includes both trade networks</blockquote>
<p>Linearised to a bilinear Mixed Integer Program</p>
<blockquote>Using big-M constraints</blockquote>
<aside class="notes">
- Provides guarantees of global optimality and is faster
  
</aside>


</section>

<section data-auto-animate>
<p>Solves a problem over</p>
</section>
<section data-auto-animate>
<p>Solves a problem over</p>
<p>48 months</p>
</section>
<section data-auto-animate>
<p>Solves a problem over</p>
<p>48 months</p>
<p>126 countries</p>
</section>
<section data-auto-animate>
<p>Solves a problem over</p>

<p>48 months</p>
<p>126 countries</p>
<p>1660 trade links</p>
</section>
<section data-auto-animate>
<p>Solves a problem over</p>
<p>48 months</p>
<p>126 countries</p>
<p>1660 trade links</p>
<p >to global optimality in </p>
</section>

<section data-auto-animate>
<p >to global optimality in </p>
<h2 class="r-fit-text">$2.09$s </h2>
<p>vs 12.9s for the NLP</p>
</section>




---

# Our disruption
<!-- .slide: data-auto-animate -->
> Reduce Russian gas import by 20% per month from February


Note:
- This is a synthetic scenario
---
# Our disruption
<!-- .slide: data-auto-animate -->
> Reduce Russian gas import by 20% per month from February

- Europe is trying to reduce reliance on Russia

---

# Our disruption
<!-- .slide: data-auto-animate -->
> Reduce Russian gas import by 20% per month from February

- Europe is trying to reduce reliance on Russia  
- Russia invaded Ukraine in February

Note:
- February was chosen as Russia invaded Ukraine in February 2022
- Chosen the month matters as it affects the ability to stockpile
  - From a gas perspective February is good, it is when consumption starts to reduce

---

<!-- <section data-auto-animate>
<h3>Our disruption</h3>
<div data-id="quote"><blockquote>Reduce Russian gas import by 20% per month from February</blockquote></dev>
</section>
<section data-auto-animate>
<h3>Our disruption</h3>
<div data-id="quote"><blockquote>Reduce Russian gas import by 20% per month from February</blockquote></dev>
<p>Europe is trying to reduce reliance on Russia</p>
</section>
<section data-auto-animate>
<h3>Our disruption</h3>
<div data-id="quote"><blockquote>Reduce Russian gas import by 20% per month from February</blockquote></dev>
<p>Europe is trying to reduce reliance on Russia</p>
<p>Russia invaded Ukraine in February</p>
</section> -->


<section data-auto-animate>
<h3>Results: Trade capacity</h3>
<img class="r-stretch" src="./assets/global_max_flows.png" alt="Natural Gas Deficit" >

</section>
<section data-auto-animate>
<h3>Results: Trade capacity</h3>
<img class="r-stretch" src="./assets/global_max_flows.png" alt="Natural Gas Deficit"> 
<p>Pipeline worse affected</p>
</section>
<section data-auto-animate>
<h3>Results: Trade capacity</h3>
<img class="r-stretch" src="./assets/global_max_flows.png" alt="Natural Gas Deficit"> 
<p>Pipeline worse affected</p>
<p>Little Russian export capacity by Jan 2017</p>
</section>
<section data-auto-animate>
<h3>Results: Trade capacity</h3>
<img class="r-stretch" src="./assets/global_max_flows.png" alt="Natural Gas Deficit"> 
<p>Pipeline worse affected</p>
<p>Little Russian export capacity by Jan 2017</p>
</section>

<section>
<p>After disruption</p>
<h2 class="r-fit-text">$45.7\%$ </h2>
<p>of flows changed</p>
</section>


---


  <section data-auto-animate>
  <h3>Results: Natural Gas deficit</h3>
  <img class="r-stretch" src="./assets/largest_deficits.png" alt="Natural Gas Deficit">
  </section>
  <section data-auto-animate>
  <h3>Results: Natural Gas deficit</h3>
  <img class="r-stretch" src="./assets/largest_deficits.png" alt="Natural Gas Deficit">
  <p>No deficit before disruption  </p>
  </section>
  <section data-auto-animate>
  <h3>Results: Natural Gas deficit</h3>
  <img class="r-stretch" src="./assets/largest_deficits.png" alt="Natural Gas Deficit">
  <p>No deficit before disruption  </p>
  <p>Large pipeline importers worst affected</p>
  </section>

---

<!-- <section>

<iframe src="https://opt-viewer.joshkirk.co.uk/" width="800" height="600" style="border:none;"></iframe>
</section> -->


<section>
<h2 class="r-fit-text">Interactive results</h2>
</section>
<section data-background-iframe="https://opt-viewer.joshkirk.co.uk/" data-preload data-background-interactive>
</section>

---
### Policy implications
<!-- .slide: data-auto-animate -->

*Enables a user to test multiple scenarios*
  - Governments can explore the implications of a policy <!-- .element: class="fragment" -->
    - Trade embargoes
    - Stockpiling 
  - Traders and/or governments can consider optimal stockpiling <!-- .element: class="fragment" -->


---

# Future work
<!-- .slide: data-auto-animate -->

Include shipping (AIS) data
  - Minimise shipping emissions <!-- .element: class="fragment" -->
  - Disrupt shipping corridors <!-- .element: class="fragment" -->

---

# Future work
<!-- .slide: data-auto-animate -->

Include shipping (AIS) data
  - Minimise shipping emissions 
  - Disrupt shipping corridors 
<hr>

Apply methods to other commodities
  - Food <!-- .element: class="fragment" -->
  - Rare earth Metals <!-- .element: class="fragment" -->
