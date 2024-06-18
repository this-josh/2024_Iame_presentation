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
Further techngical innovations may require further modifications to the trade network 
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
- From public data including
  - International Energy Agency
  - Jodi Gas
  - UN 
  - CEPII
- We have prod, con...
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
> - Trade is represented as a graph 

Note:
- Trade is represented as a graph with a node for all countries and a link for all pipeline trade and all routes LNG trade has previously occured between

---
# Contributions
<!-- .slide: data-auto-animate -->
**Method to produce monthly Natural Gas data**
> From public data: Production, consumption, stockpiling, and trade flows

**A model of global trade for optimal commodity stockpiling**
> - Trade is represented as a graph 
> - Solved as a Mixed-Integer-Linear Program

Note:
- We then formulate and solve a MILP across the network



<!-- - Key to energy transition
- Recent geopolitical uncertainty
- High data availability
-->

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology</span> <span class="fragment">: Data</span></h2>


<aside class="notes">
</aside>
- Now onto our methodology
- First we will consider data

</section>

<section data-auto-animate>
<h2 data-id="meth"><span>Methodology : Data</span></h2>
<p>Combined multiple sources of public data</p>

<aside class="notes">
</aside>

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
> Reduce Russian gas imports by 20% per month from February


Note:
- This is a synthetic scenario
---
# Our disruption
<!-- .slide: data-auto-animate -->
> Reduce Russian gas imports by 20% per month from February

- Europe is trying to reduce reliance on Russia

Note:
- Synthetic scenario is based on

---

# Our disruption
<!-- .slide: data-auto-animate -->
> Reduce Russian gas imports by 20% per month from February

- Europe is trying to reduce reliance on Russia  
- Russia invaded Ukraine in February

Note:
- February was chosen as Russia invaded Ukraine in February 2022
- The month matters as it affects the ability to stockpile
  - From a gas perspective February is good, it is when consumption starts to reduce

---

# Our disruption
<!-- .slide: data-auto-animate -->
> Reduce Russian gas imports by 20% per month from February

- Europe is trying to reduce reliance on Russia  
- Russia invaded Ukraine in February
- Use data from February 2015-2019

Note:
- These years exclude actual disruptions associated with the war and COVID

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

<h3 class="r-fit-text">Policy implications</h3>

<div class="row">
  <div class="column">
    <p><strong class="fragment" data-fragment-index="1">Evaluating various scenarios</strong></p>
    <ul>
      <li class="fragment" data-fragment-index="3">Trade embargoes</li>
      <li class="fragment" data-fragment-index="4">Logistics disruptions</li>
      <li class="fragment" data-fragment-index="5">Optimal pppstockpiling</li>
    </ul>
  </div>
  <div class="column">
    <p><strong class="fragment" data-fragment-index="2">Of interest to</strong></p>
    <ul class="fragment" data-fragment-index="6">
      <li>Governments</li>
      <li>Think tanks</li>
      <li>Traders</li>
      <li>Supply chain managers</li>
    </ul>
  </div>
</div>

---

<section data-background-iframe="https://www.marinetraffic.com/en/ais/embed" data-preload data-background-interactive data-auto-animate>
<div class="rounded-box">
<h1 data-id="fut_work"> Future Work</h1>
<p>Include shipping (AIS) data</p>
<ul>
  <li>Minimise shipping emissions</li>
  <li>Disrupt shipping corridors</li>
</ul>
</div>
</section>
---
<section data-auto-animate>
<div class="rounded-box">
<h1 data-id="fut_work"> Future Work</h1>
<p>Include shipping (AIS) data</p>
<ul>
  <li>Minimise shipping emissions</li>
  <li>Disrupt shipping corridors</li>
</ul>
</div>
<hr data-id="hr1">
<p>Apply methods to other commodities</p>
</section>

<section data-auto-animate>
<div class="rounded-box">
<h1 data-id="fut_work"> Future Work</h1>
<p>Include shipping (AIS) data</p>
<ul>
  <li>Minimise shipping emissions</li>
  <li>Disrupt shipping corridors</li>
</ul>
</div>
<hr data-id="hr1">
<p>Apply methods to other commodities</p>
<ul>
  <li>Minimise shipping emissions</li> 
</ul>

</section>
<section data-auto-animate>
<div class="rounded-box">
<h1 data-id="fut_work"> Future Work</h1>
<p>Include shipping (AIS) data</p>
<ul>
  <li>Minimise shipping emissions</li>
  <li>Disrupt shipping corridors</li>
</ul>
</div>
<hr data-id="hr1">
<p>Apply methods to other commodities</p>
<ul>
  <li>Minimise shipping emissions</li> 

  <li>Disrupt shipping corridors</li>
</ul>

</section>
