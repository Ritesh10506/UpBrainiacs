import "./Countries.css";


const Countries = () => {


const countries = [


{
name:"Georgia",

image:"/countries/georgia.jpg",

description:
"Affordable MBBS education with globally recognized universities and English taught medical programs.",

page:"georgia"

},



{
name:"Russia",

image:"/countries/russia.jpg",

description:
"Advanced medical universities with quality education and international recognition.",

page:"russia"

},



{
name:"Kazakhstan",

image:"/countries/kazakhstan.jpg",

description:
"Popular choice for medical students with affordable fees and modern facilities.",

page:"kazakhstan"

},



{
name:"Romania",

image:"/countries/romania.jpg",

description:
"European medical education with modern hospitals and global exposure.",

page:"romania"

},



{
name:"Uzbekistan",

image:"/countries/uzbekistan.jpg",

description:
"Affordable medical programs with simple admission process.",

page:"uzbekistan"

},



{
name:"Kyrgyzstan",

image:"/countries/kyrgyzstan.jpg",

description:
"Low cost medical education with international student friendly universities.",

page:"kyrgyzstan"

}


];




return (


<section className="countries-section">


<div className="section-header">


<span>
EXPLORE COUNTRIES
</span>


<h2>
Popular Study Destinations
</h2>


</div>




<div className="country-grid">


{
countries.map((country,index)=>(


<div

className="country-card"

key={index}

onClick={()=>{

window.location.href =
`/countries/${country.page}`;

}}

>



<img

src={country.image}

alt={country.name}

/>



<div className="country-overlay">


<h3>
{country.name}
</h3>



<p>
{country.description}
</p>


</div>



</div>


))
}


</div>


</section>


);


};


export default Countries;