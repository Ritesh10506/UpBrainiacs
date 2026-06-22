import "./About.css";


const About = () => {


const aboutCards=[

{
title:"University Selection",
desc:"We help students choose the right medical universities.",
image:"/about/university.png"
},

{
title:"Admission Support",
desc:"We support students with complete admission process across global universities.",
image:"/about/admission.png"
},

{
title:"Visa Assistance",
desc:"Stress-free visa guidance and processing support for students.",
image:"/about/visa.png"
},

{
title:"Student Support",
desc:"Support before and after reaching your destination.",
image:"/about/student.png"
}

];





const offerings=[

{
title:"Career Counseling",
desc:"Expert one-on-one counselling to guide students towards the right medical career.",
image:"/offerings/counseling.png"
},

{
title:"FMGE/NEXT Preparation",
desc:"Dedicated preparation support for FMGE/NEXT examination.",
image:"/offerings/admission.png"
},

{
title:"Lifelong Health Insurance",
desc:"Health insurance support for students during their journey.",
image:"/offerings/visa.png"
},

{
title:"Travel Assistance",
desc:"Complete travel support to reach selected university destinations.",
image:"/offerings/travel.png"
},

{
title:"Local Assistance",
desc:"Local mentors and doctors provide academic and daily-life support.",
image:"/offerings/local.png"
},

{
title:"Scholarship Guidance",
desc:"Guidance for students looking for scholarship opportunities.",
image:"/offerings/scholarship.png"
},

{
title:"Internship Support",
desc:"Support for internships and future career opportunities.",
image:"/offerings/internship.png"
},

{
title:"24x7 Student Support",
desc:"Dedicated support system available throughout your journey.",
image:"/offerings/support.png"
}


];





return(


<section
className="about-section"
id="about"
>




{/* ABOUT HEADER */}

<span className="section-tag">

ABOUT US

</span>



<h2 className="about-title">

Your Trusted Partner For

<span>
 Global Medical Education
</span>

</h2>







<div className="about-container">





{/* LEFT SIDE */}


<div className="about-left">


<p>

UpBrainiacs helps students achieve their dream
of studying abroad through expert counselling,
university selection, admission and visa support.

</p>



<p>

We simplify the complete journey from selecting
the country to starting your medical education abroad.

</p>





<div className="about-grid">


{

aboutCards.map((item,index)=>(


<div
className="about-card"
key={index}
>


<img

src={item.image}

alt={item.title}

/>



<div>


<h3>

{item.title}

</h3>



<p>

{item.desc}

</p>


</div>



</div>


))

}


</div>


</div>










{/* RIGHT IMAGE */}


<div className="about-right">


<div className="main-image-box">



<img

className="main-image"

src="/about/about-main.png"

alt="Medical Education"

/>



<img

className="corner-logo"

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



<img

src={item.image}

alt={item.title}

/>



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


)


}



export default About;