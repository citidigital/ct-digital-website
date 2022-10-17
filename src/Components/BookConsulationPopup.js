import { useState } from 'react';
import Popup from 'reactjs-popup';
import { customModalStyles } from '../utils/customStyles';
import { ReactComponent as CloseModal } from '../assets/CloseModal.svg';
import { ReactComponent as AngleArrowLeft } from '../assets/AngleArrowLeft.svg';
import { ReactComponent as PolygonGroup } from '../assets/PolygonGroup.svg';
import Clock from '../assets/Clock.png';
import { Formik } from 'formik';

const BookConsultationPopup = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const services = [
    {
      id: 1,
      label: 'Brand and Graphic Design',
    },
    {
      id: 2,
      label: 'Product Design/Research',
    },
    {
      id: 3,
      label: 'Mobile and Web Development ',
    },
    {
      id: 4,
      label: 'Product Marketing',
    },
    {
      id: 5,
      label: 'Other',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleBooking = (values) => {
    console.log(values);
  };

  const initialValues = {
    subject: '',
    message: '',
    service: '',
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.subject) {
      errors.subject = 'Subject is required';
      setIsFormValid(false);
    } else if (!values.message) {
      errors.message = 'Message is required';
      setIsFormValid(false);
    } else if (!values.service) {
      errors.service = 'Service is required';
      setIsFormValid(false);
    }
    return errors;
  };

  return (
    <Popup
      trigger={
        <button className="rounded-md bg-newport-blue text-white px-5 py-4 w-button-width leading-5">
          Book a Consultation
        </button>
      }
      modal
      contentStyle={customModalStyles.bookConsulationPopupStyles}
    >
      {(close) => (
        <div>
          <div className="flex justify-between items-center ml-11 mr-12 mb-6">
            <p className="text-2xl font-bold">Book an Appointment</p>
            <button onClick={() => close()}>
              <CloseModal />
            </button>
          </div>
          <div className="md:flex justify-between">
            <div className="md:w-5/10 relative bg-neutral-100 py-8">
              <PolygonGroup />
              <img
                src={Clock}
                alt="Book session"
                className="absolute left-24 top-25"
              />
            </div>
            <div className="md:w-4/10 mr-11">
              <p className="font-semibold text-base my-6">Leave a message</p>
              <Formik
                initialValues={initialValues}
                validate={(values) => validateForm(values)}
                onSubmit={handleBooking}
                handleReset
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="subject-field"
                        className="text-xs mb-1 font-semibold"
                      >
                        Select Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.service}
                        className="relative block w-full bg-neutral-100 appearance-none rounded-md border border-gray p-3 placeholder-light-gray focus:z-10 focus:border-primary-blue focus:outline-none focus:ring-primary-blue text-sm"
                      >
                        <option value="" disabled>
                          Select Service
                        </option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.label}
                          </option>
                        ))}
                      </select>

                      {errors.service && touched.service && (
                        <span className="text-xs text-red-600">
                          {errors.service}
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="subject-field"
                        className="text-xs mb-1 font-semibold"
                      >
                        Subject
                      </label>
                      <input
                        id="subject-field"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleChange}
                        required
                        className="relative block w-full bg-neutral-100 appearance-none rounded-md border border-gray p-3 placeholder-light-gray focus:z-10 focus:border-primary-blue focus:outline-none focus:ring-primary-blue text-sm"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message-field"
                        className="text-xs mb-1 font-semibold"
                      >
                        Subject
                      </label>
                      <textarea
                        name="message"
                        onChange={handleChange}
                        onBlur={handleChange}
                        rows={4}
                        id="message-field"
                        required
                        className="relative block w-full bg-neutral-100 appearance-none rounded-md border border-gray p-3 placeholder-light-gray focus:z-10 focus:border-primary-blue focus:outline-none focus:ring-primary-blue text-sm"
                        placeholder="Start Typing ..."
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="py-2.5 flex items-center border border-neutral-600 rounded-md pl-5 pr-10 text-neutral-600 text-sm font-semibold">
                        <span className="mr-5">
                          <AngleArrowLeft />{' '}
                        </span>
                        Previous
                      </button>
                      <button className="bg-blue-400 px-14 py-2.5 rounded-md ml-6">
                        Send
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default BookConsultationPopup;
