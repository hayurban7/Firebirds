var app = new Vue({
    el: '#firefighter',
    data: {
      memberList: [],//Member - Madison 
      certList: [], //Certifications - Hayley
      activeMember: null,
      newMemberForm: {
        xxxx: null,
        yyyyy: ''
      }, //Member - Madison 
      newCertForm: {
        xxxx: null,
        yyyyy: ''
      }//Certifications - Hayley
    },
    computed: {
    },
    methods: {
      newMemberData() {
        return {
          Member_ID:"", 
          First_Name:"", 
          Last_Name:"", 
          Title:"", 
          Gender:"", 
          MemberStreet:"", 
          MemberCity:"", 
          MemberState:"", 
          MemberZipCode:"", 
          MemberPhone:"", 
          Radio:"", 
          Station:"", 
          IsActive:""
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
  
        this.newMemberForm = this.newMemberData();
      },
      handleMemberForm( evt ) {
        console.log("Form submitted!");
  
        this.memberForm.member = this.activeMember; // CHECK THIS 
        console.log(this.MemberForm);
  
      },
      newCertData() {
        return{
          Certification_ID:"",
          Certifcate_Name:"",
          Exp_period:"",
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
        handleCertificationForm( evt ) {
          console.log("Form submitted!");
    
          this.CertificationForm.member = this.activeMember; //CHECK THIS
          console.log(this.CertificationForm);
    
        }
    },
    created() {
      fetch("api/members/index.php")//Member - Madison 
      .then( response => response.json() )
      .then( json => {
        this.memberList = json;
  
        console.log(json)}
      );
      fetch("api/certifications/index.php")
      .then( response => response.json() )
      .then( json => {
        this.certList = json;
  
        console.log(json)}
      );
      this.newMemberForm = this.newMemberData();
    }
    
  })
  