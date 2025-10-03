import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Handle form submission
const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    // Handle form submission logic here
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
};

  return (
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
              {submitted && <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">Thank you for your message!</div>}


              <div className="mb-4">
                  <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                  />  
              </div>


              <div className="mb-4">
                  <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                  />
              </div>
              
              <div className="mb-4">  
                  <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
                  <textarea   
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      rows="5"
                      required
                  ></textarea>    
              </div>
              
              <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                  Send Message
              </button>

            
     
    </form>
  )
}