import { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const RegisterForm = () => {

const [loading,setLoading]=useState(false);

const [formData,setFormData]=useState({
first_name:"",
last_name:"",
email:"",
mobile:"",
expected_neet_score:"",
degree_pref:"",
country_pref:""
});


const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};



const handleSubmit=async(e)=>{

e.preventDefault();

try{

setLoading(true);

await axios.post(
"http://localhost:8000/students/",
formData
);


alert("Application Submitted Successfully ✅");


}
catch(error){

alert("Submission Failed ❌");

}
finally{

setLoading(false);

}

};



return(

<section className="register-section">


<div className="register-container">



{/* LEFT */}

<div className="register-content">


<span>
STUDENT REGISTRATION
</span>


<h1>
Start Your Global Education Journey
</h1>


<p>
Get expert guidance for studying abroad.
Choose the right university and country with our experts.
</p>



<div className="benefit-box">


<div>✓ Free Counselling</div>

<div>✓ University Selection</div>

<div>✓ Visa Assistance</div>

<div>✓ Career Guidance</div>


</div>


</div>





{/* FORM */}


<div className="form-card">


<h2>
Start Your Application
</h2>


<form
onSubmit={handleSubmit}
className="register-form"
>


<input
name="first_name"
placeholder="First Name"
onChange={handleChange}
/>


<input
name="last_name"
placeholder="Last Name"
onChange={handleChange}
/>


<input
name="email"
placeholder="Email Address"
onChange={handleChange}
/>


<input
name="mobile"
placeholder="Mobile Number"
onChange={handleChange}
/>


<input
name="expected_neet_score"
placeholder="Expected NEET Score"
onChange={handleChange}
/>



<select
name="degree_pref"
onChange={handleChange}
>


<option>
Select Course
</option>

<option>
MBBS
</option>

<option>
BDS
</option>


</select>



<select
name="country_pref"
onChange={handleChange}
>


<option>
Preferred Country
</option>


<option>
Georgia
</option>

<option>
Russia
</option>

<option>
Kazakhstan
</option>


</select>



<button>

{
loading?
"Submitting..."
:
"Start My Journey"
}


</button>



</form>


</div>


</div>


</section>

)

}


export default RegisterForm;