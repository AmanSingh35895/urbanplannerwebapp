import React from "react";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    PhoneNumber: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    PostalCode: "",
    Country: "",
    PreferredContactMethod: "",
    HowDidYouHearAboutUs: "",
    PreferredPronouns: "",
    EducationLevel: "",
    Certifications: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols"></div>

            {/* Here we can add png/img */}
            {/* <div className="registration image">
              <img src="" alt="" className="" />
            </div> */}

            <div className="registration-form">
              <h1 className="main-heading mb-3">registration form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="FirstName"
                    id="FirstName"
                    required
                    autoComplete="off"
                    value={user.FirstName}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    name="LastName"
                    placeholder="LastName"
                    id="LastName"
                    required
                    autoComplete="off"
                    value={user.LastName}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="UserName">User Name</label>
                  <input
                    type="text"
                    name="UserName"
                    placeholder="UserName"
                    id="UserName"
                    required
                    autoComplete="off"
                    value={user.UserName}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="ConfirmPassword"
                    placeholder="Confirm Password"
                    id="ConfirmPassword"
                    required
                    autoComplete="off"
                    value={user.ConfirmPassword}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input
                    type="number"
                    name="PhoneNumber"
                    placeholder="Phone Number"
                    id="PhoneNumber"
                    autoComplete="off"
                    value={user.PhoneNumber}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="Address1">Address Line 1</label>
                  <input
                    type="text"
                    name="Address1"
                    placeholder="Address Line 1"
                    id="Address1"
                    autoComplete="off"
                    value={user.Address1}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="Address2">Address Line 2</label>
                  <input
                    type="text"
                    name="Address2"
                    placeholder="Address Line 2"
                    id="Address2"
                    autoComplete="off"
                    value={user.Address2}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="City">City</label>
                  <input
                    type="text"
                    name="City"
                    placeholder="City"
                    id="City"
                    autoComplete="off"
                    value={user.City}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="State">State</label>
                  <input
                    type="text"
                    name="State"
                    placeholder="State/Province/Region"
                    id="State"
                    autoComplete="off"
                    value={user.State}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="PostalCode">Postal/ZIP Code</label>
                  <input
                    type="number"
                    name="PostalCode"
                    placeholder="Postal/ZIP Code"
                    id="PostalCode"
                    autoComplete="off"
                    value={user.PostalCode}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="Country">Country</label>
                  <input
                    type="text"
                    name="Country"
                    placeholder="Country"
                    id="Country"
                    autoComplete="off"
                    value={user.Country}
                    onChange={handleInput}
                  />
                </div>
                {/* <div>
                  <label htmlFor="Interests">Interests/Hobbies</label>
                  <input
                    type="text"
                    name="Interests"
                    placeholder="Interests/Hobbies"
                    id="Interests"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="Skills">Skills</label>
                  <input
                    type="text"
                    name="Skills"
                    placeholder="Skills"
                    id="Skills"
                    autoComplete="off"
                  />
                </div> */}
                <div>
                  <label htmlFor="PreferredContactMethod">
                    Preferred Contact Method
                  </label>
                  {/* The select tag doesn't go with the name attribute, it goes with
                the id, but i made name as dynamic and not the id, so the
                handleInput is working right but the data is not updating in the
                form as it refers to id and not the name */}
                  <select
                    name="preferredContactMethod"
                    id="PreferredContactMethod"
                    value={user.PreferredContactMethod}
                    onChange={handleInput}
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="SMS">SMS</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="HowDidYouHearAboutUs">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    name="HowDidYouHearAboutUs"
                    placeholder="Source"
                    id="HowDidYouHearAboutUs"
                    autoComplete="off"
                    value={user.HowDidYouHearAboutUs}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="AgreeToTerms">
                    <input
                      type="checkbox"
                      name="AgreeToTerms"
                      id="AgreeToTerms"
                      required
                      value={user.AgreeToTerms}
                      onChange={handleInput}
                    />
                    I agree to the Terms of Service
                  </label>
                </div>
                <div>
                  <label htmlFor="AgreeToPrivacyPolicy">
                    <input
                      type="checkbox"
                      name="AgreeToPrivacyPolicy"
                      id="AgreeToPrivacyPolicy"
                      required
                      value={user.AgreeToPrivacyPolicy}
                      onChange={handleInput}
                    />
                    I agree to the Privacy Policy
                  </label>
                </div>
                <div>
                  <label htmlFor="AgreeToCookiePolicy">
                    <input
                      type="checkbox"
                      name="AgreeToCookiePolicy"
                      id="AgreeToCookiePolicy"
                      value={user.AgreeToCookiePolicy}
                      onChange={handleInput}
                    />
                    I agree to the Cookie Policy
                  </label>
                </div>
                <div>
                  <label htmlFor="MarketingConsent">
                    <input
                      type="checkbox"
                      name="MarketingConsent"
                      id="MarketingConsent"
                      value={user.MarketingConsent}
                      onChange={handleInput}
                    />
                    I consent to receive marketing communications
                  </label>
                </div>
                {/* <div>
                  <label htmlFor="CustomQuestion1">Custom Question 1</label>
                  <input
                    type="text"
                    name="CustomQuestion1"
                    placeholder="Custom Question"
                    id="CustomQuestion1"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="CustomQuestion2">Custom Question 2</label>
                  <input
                    type="text"
                    name="CustomQuestion2"
                    placeholder="Custom Question"
                    id="CustomQuestion2"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="BetaTestingOptIn">
                    <input
                      type="checkbox"
                      name="BetaTestingOptIn"
                      id="BetaTestingOptIn"
                    />
                    I want to participate in beta testing
                  </label>
                </div> */}
                <div>
                  <label htmlFor="SurveyOptIn">
                    <input
                      type="checkbox"
                      name="SurveyOptIn"
                      id="SurveyOptIn"
                      value={user.SurveyOptIn}
                      onChange={handleInput}
                    />
                    I agree to participate in surveys and provide feedback
                  </label>
                </div>
                {/* The select tag doesn't go with the name attribute, it goes with
                the id, but i made name as dynamic and not the id, so the
                handleInput is working right but the data is not updating in the
                form as it refers to id and not the name */}
                <div>
                  <label htmlFor="PreferredPronouns">Preferred Pronouns</label>
                  <select
                    name="preferredPronouns"
                    id="PreferredPronouns"
                    value={user.PreferredPronouns}
                    onChange={handleInput}
                    S
                  >
                    <option value="he/him">he/him</option>
                    <option value="she/her">she/her</option>
                    <option value="they/them">they/them</option>
                  </select>
                </div>
                {/* <div>
                  <label htmlFor="AccessibilityNeeds">
                    Special Accessibility Needs
                  </label>
                  <textarea
                    name="AccessibilityNeeds"
                    placeholder="Please describe any special accessibility needs"
                    id="AccessibilityNeeds"
                    rows="4"
                  ></textarea>
                </div> */}
                <div>
                  <label htmlFor="EducationLevel">
                    Highest Education Level
                  </label>
                  <select
                    name="EducationLevel"
                    id="EducationLevel"
                    value={user.EducationLevel}
                    onChange={handleInput}
                  >
                    <option value="HighSchool">High School</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                {/* Certification is only required if educational level has been
                  filled */}
                <div>
                  <label htmlFor="Certifications">Certifications</label>
                  <input
                    type="text"
                    name="Certifications"
                    placeholder="Certifications"
                    id="Certifications"
                    autoComplete="off"
                    value={user.Certifications}
                    onChange={handleInput}
                  />
                </div>
                {/* <div>
                  <label htmlFor="YearsOfExperience">Years of Experience</label>
                  <input
                    type="number"
                    name="YearsOfExperience"
                    placeholder="Years of Experience"
                    id="YearsOfExperience"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="FieldsOfExpertise">Fields of Expertise</label>
                  <input
                    type="text"
                    name="FieldsOfExpertise"
                    placeholder="Fields of Expertise"
                    id="FieldsOfExpertise"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="CreditCardNumber">Credit Card Number</label>
                  <input
                    type="text"
                    name="CreditCardNumber"
                    placeholder="Credit Card Number"
                    id="CreditCardNumber"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="ExpirationDate">Expiration Date</label>
                  <input
                    type="text"
                    name="ExpirationDate"
                    placeholder="MM/YY"
                    id="ExpirationDate"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="CVV">CVV</label>
                  <input
                    type="text"
                    name="CVV"
                    placeholder="CVV"
                    id="CVV"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="BillingAddress">Billing Address</label>
                  <input
                    type="text"
                    name="BillingAddress"
                    placeholder="Billing Address"
                    id="BillingAddress"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="BillingContactName">
                    Billing Contact Name
                  </label>
                  <input
                    type="text"
                    name="BillingContactName"
                    placeholder="Billing Contact Name"
                    id="BillingContactName"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="EmergencyContactName">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    name="EmergencyContactName"
                    placeholder="Emergency Contact Name"
                    id="EmergencyContactName"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="EmergencyContactRelationship">
                    Emergency Contact Relationship
                  </label>
                  <input
                    type="text"
                    name="EmergencyContactRelationship"
                    placeholder="Relationship"
                    id="EmergencyContactRelationship"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="EmergencyContactPhone">
                    Emergency Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    name="EmergencyContactPhone"
                    placeholder="Phone Number"
                    id="EmergencyContactPhone"
                    autoComplete="off"
                  />
                </div> */}
                <br />
                <div>
                  <button type="submit" className="btn btn-submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
