import "./About.css";


const About = () => {


const offerings = [

{
title:"Career Counseling",
desc:"Expert guidance to help students choose the right medical career path."
},

{
title:"Admissions Assistance",
desc:"Complete support for university applications and admission process."
},

{
title:"Visa Assistance",
desc:"Professional guidance to make your visa journey simple and smooth."
},

{
title:"Travel Assistance",
desc:"Support with travel planning and reaching your university destination."
},

{
title:"Local Assistance",
desc:"On-ground support for students after reaching their destination."
},

{
title:"Scholarship Guidance",
desc:"Helping students explore scholarship opportunities."
},

{
title:"Internship Support",
desc:"Guidance for internships and career growth opportunities."
},

{
title:"24x7 Student Support",
desc:"Continuous assistance whenever students need help."
}

];



return (

<section
id="about"
className="about-section"
>


<div className="about-top">



<div className="about-left">


<span className="section-tag">
ABOUT US
</span>



<h2>

Your Trusted Partner For
<span>
 Global Medical Education
</span>

</h2>




<p>

UpBrainiacs helps students achieve their dream
of studying abroad through personalized counselling,
university selection, admission support and visa guidance.

</p>




<p>

We simplify every step of the journey —
from choosing the right country to securing admission
into international medical universities.

</p>





<div className="about-points">


<div>

<h3>
University Selection
</h3>

<p>
Choose the right university according to your goals.
</p>

</div>




<div>

<h3>
Admission Support
</h3>

<p>
Complete application and documentation assistance.
</p>

</div>




<div>

<h3>
Visa Assistance
</h3>

<p>
Smooth visa process with expert guidance.
</p>

</div>




<div>

<h3>
Student Support
</h3>

<p>
Support before and after your journey.
</p>

</div>



</div>



</div>







<div className="about-right">


<div className="logo-box">


<img

src="/ub-logo.png"

alt="UpBrainiacs Logo"

/>


</div>



</div>



</div>








{/* OFFERINGS */}



<div className="offer-section">


<h2>
Our Offerings
</h2>




<div className="offer-grid">


{

offerings.map((item,index)=>(


<div

className="offer-card"

key={index}

>


<div className="offer-icon">

+

</div>



<h3>
{item.title}
</h3>



<p>
{item.desc}
</p>



</div>



))

}



</div>



</div>





</section>


);


};


export default About;