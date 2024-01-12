describe('Login', () => {
  let authToken;
  const baseUrl = "https://bridge-dev-api.seamhealth.support";

  // Scenario 1: User Login
  it('User Login', () => {
    cy.request({
      method: 'POST',
      url: baseUrl + '/api/login',
      body: {
        email: 'imodupsy@mailinator.com',
        password: 'password',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      authToken = response.body.data.token;
    });
  });

  // Scenario 2: Register Patient
  it('Register Patient', () => {
    cy.request({
      method: 'POST',
      url: baseUrl + '/api/auth/patient/register',
      headers: {
        Authorization: `${authToken}`,
      },
      body: {
        annualIncome: "100",
        country: "Nigeria",
        dateOfBirth: "8/7/1994",
        dateOfRegistration: "11/1/2024",
        educationLevel: "B.Sc",
        email: "ama@qa.team",
        firstName: "Ama",
        gender: "Male",
        homeAddress: "Test Home",
        howLongHaveYouBeenWorking: {
          magnac: "",
          ullamco_6_5: ""
        },
        lastName: "Test",
        maritalStatus: "Single",
        nearestLandMark: "",
        nextOfKinName: "Hal Uli",
        nextOfKinPhoneNumber: "098889890",
        nextOfKinRelationship: "Test",
        nextOfKinRelationshipOthers: "You Test",
        occupation: "qa",
        otherJobType: "",
        personalIncome: "100",
        phoneNumber: "80988299928",
        previousKnowledgeOfBreastCancer: "Test",
        previousKnowledgeOfBreastSelfExam: "Test",
        previousPracticeOfBreastSelfExam: "Test",
        state: "FCT",
        typeOfJob: "Test"
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      // Add assertions as needed
    });
  });

  // Scenario 3: Export Patient
  it('Export Patient', () => {
    cy.request({
      method: 'GET',
      url: baseUrl + '/api/patients/export',
      headers: {
        Authorization: `${authToken}`,
      },
      qs: {
        jobType: 'PATIENT_EXPORT',
        jobFormat: 'CSV',
        // Include other required fields as needed
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      // Add assertions as needed
    });
  });

  // Scenario 4: Update Patient
  it('Update Patient', () => {
    cy.request({
      method: 'POST',
      url: baseUrl + '/api/patients/update',
      headers: {
        Authorization: `${authToken}`,
      },
      body: {
        email: 'newemail@example.com',
        maritalStatus: 'SINGLE',
        
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

})

  
  
