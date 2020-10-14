var app = new Vue({
    el: '#firefighter',
    data: {
      memberList: [],//Member - Madison 
      certList: [], //Certifications - Hayley
      activePt: null,
      triageForm: {
        priority: null,
        symptoms: ''
      },
      newMemberForm: {} //Member - Madison 
    },
    computed: {
      activePtName() {
        return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
      }
    },
    methods: {
      newPtData() {
        return {
          firstName: "",
          lastName: "",
          dob: "",
          sexAtBirth: ""
        }
      },
      handleMemberForm( evt ) {//Member - Madison - post new member form 
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
  
        // TODO: Validate the data!
  
        fetch('api/members/post.php', {
          method:'POST',
          body: JSON.stringify(this.newMemberForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.memberList.push(json[0]);
        });
  
        console.log("Creating (POSTing)...!");
        console.log(this.newMemberForm);
  
        this.newMemberForm = this.newPtData();
      },
      handleTriageForm( evt ) {
        console.log("Form submitted!");
  
        this.triageForm.pt = this.activePt;
        console.log(this.triageForm);
  
      }
      methods: {
        newCertData() {
          return {
            Certification_ID: "",
            Certification_Name: "",
            Exp_period: ""
          }
        },
        handleCertificationForm( evt ) {//Certification - Hayley - post new certification form 
          // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
    
          // TODO: Validate the data!
    
          fetch('api/members/post.php', {
            method:'POST',
            body: JSON.stringify(this.newCertForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.certList.push(json[0]);
          });
    
          console.log("Creating (POSTing)...!");
          console.log(this.newCertificationForm);
    
          this.newCertForm = this.newCertData();
        },
        handleTriageForm( evt ) {
          console.log("Form submitted!");
    
          this.triageForm.pt = this.activePt;
          console.log(this.triageForm);
    
        }
    },
    created() {
      fetch("api/members/")//Member - Madison 
      .then( response => response.json() )
      .then( json => {
        this.memberList = json;
  
        console.log(json)}
      );
      fetch("api/certifications/")
      .then( response => response.json() )
      .then( json => {
        this.certList = json;
  
        console.log(json)}
      );
      this.newMemberForm = this.newPtData();
    }
    
  })
  