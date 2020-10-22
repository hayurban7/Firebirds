var app = new Vue({
    el: '#firefighter',
    data: {
      memberList: [],//Member - Madison 
      certList: [], //Certifications - Hayley
      activeMember: null,
      newMemberForm: {}, //Member - Madison 
      newCertForm: {},//Certifications - Hayley
      tableRows:['Table Row 1', 'Table Row 2'],
      counter:2
    },
    computed: {
      activeMember(){
        //finish
      }
    },
    methods: {
      fetchCert(){
        fetch('api/certifications/index.php')
        .then(response => response.json())
        .then(json => {
            this.users=json;
            console.log(this.users);
        });
      },
        fetchMember(){
          fetch('api/members/index.php')
          .then(response => response.json())
          .then(json => {
              this.users=json;
              console.log(this.users);
          });
        },
      newMemberData() {
        return {
          First_Name:"", 
          Last_Name:"", 
          Title:"", 
          Gender:"", 
          MemberStreet:"", 
          MemberCity:"", 
          MemberState:"", 
          MemberZipCode:"", 
          MemberPhone:"",
          Secondary_Phone:"",
          Radio:"", 
          Station:"", 
          IsActive:""
        }
      },
      newCertData(){
        return{
          Certification_ID:"",
          Certifcate_Name:"",
          Exp_period:""
        }
      },
      handleNewMemberForm() {//Member - Madison - post new member form 
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
          this.newMemberForm = this.newMemberData();
        });
  
        console.log("Creating (POSTing)...!");
        console.log(this.newMemberForm);
      },

      newMemberData(){
        return{
          First_Name:"", 
          Last_Name:"", 
          Title:"", 
          Gender:"", 
          MemberStreet:"", 
          MemberCity:"", 
          MemberState:"", 
          MemberZipCode:"", 
          MemberPhone:"",
          Secondary_Phone:"",
          Radio:"", 
          Station:"", 
          IsActive:""
        }
      },
      handleCertificationForm() {//Certification - Hayley - post new certification form 
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
            this.certList.push(json[0]); //Maybe no zero
            this.newCertForm = this.newCertData();
          });
    
          console.log("Creating (POSTing)...!");
          console.log(this.newCertificationForm);
    
          
        },
        newCertData(){
          return{
            Certification_ID:"",
            Certifcate_Name:"",
            Exp_period:""
          }
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
      this.fetchCert();
      this.fetchMember();
    }
    
  })
  