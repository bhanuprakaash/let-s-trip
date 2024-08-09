import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({name:'',message:'',email:'',phone:''})
    setFormStatus('success');
  };

  return (
    <section data-bs-version="5.1" className="form03 cid-ukLeua66hL" id="form03-2n">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg item-wrapper">
            <div className="mbr-section-head mb-5">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                Contact us
              </h3>
            </div>
            <div className="col-lg-12 mx-auto mbr-form">
              <form onSubmit={handleSubmit} className="mbr-form form-with-styler" data-form-title="Form Name">
                <input type="hidden" name="email" data-form-email="true" value="tO8icG7mEid6C2p/PcS9dd+FRzoFUe+HZ3u39TXqXCIy9FwI8snCqY8NKSLn9oVniieO4ODr478klTX7A1iGOwdhu21VdfKIQHacSTSNUol0NHqtB87qdVY7JJziQ9IC" />
                {formStatus === 'success' && <div className="alert alert-success col-12">Thanks for filling out the form!</div>}
                {formStatus === 'error' && <div className="alert alert-danger col-12">Oops...! some problem!</div>}
                <div className="dragArea row">
                  <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      data-form-field="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      id="name-form03-2n"
                    />
                  </div>
                  <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      data-form-field="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      id="email-form03-2n"
                    />
                  </div>
                  <div className="col-12 form-group mb-3" data-for="phone">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      data-form-field="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      id="phone-form03-2n"
                    />
                  </div>
                  <div className="col-12 form-group mb-3" data-for="textarea">
                    <textarea
                      name="message"
                      placeholder="Message"
                      data-form-field="textarea"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      id="textarea-form03-2n"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                    <button type="submit" className="btn btn-warning display-7">
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="image-wrapper">
              <img className="w-100" src="assets/images/contact-us-concept-landing-page-1256x1256.png" alt="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
