var app = new Vue({
    el: '#firefighter',
    data: {
      members: [{
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
        }],
      newMember: {
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
        },

      cert:[{
          Certificate_Name:"",
          Exp_period:""
        }],
      newCert:{
          Certificate_Name:"",
          Exp_period:""
        }
      //memberList: [],//Member - Madison 
      //certList: [], //Certifications - Hayley
      // activeMember: null,
      // newMemberForm: {}, //Member - Madison 
      // newCertForm: {},//Certifications - Hayley
      // tableRows:['Table Row 1', 'Table Row 2'],
      // counter:2
    },
    // computed: {
    //   activeMember(){
    //     //finish
    //   }
    // },
    created() {
      // fetch("api/members/index.php")//Member - Madison 
      // .then( response => response.json() )
      // .then( json => {
      //   this.members = json;
  
      //   console.log(json)}
      // );
      // fetch("api/certifications/index.php")
      // .then( response => response.json() )
      // .then( json => {
      //   this.certList = json;
  
      //   console.log(json)}
      // );
      this.fetchCert();
      this.fetchMember();
    },
    methods: {
      fetchCert(){
        fetch('api/certifications/index.php')
        .then(response => response.json())
        .then(json => {
            this.cert=json;
            console.log(this.cert);
        });
      },
      fetchMember(){
          fetch('api/members/index.php')
          .then(response => response.json())
          .then(json => {
              this.members=json;
              console.log(this.members);
          });
        },
      
      handleNewMemberForm() {//Member - Madison - post new member form 
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
  
        // TODO: Validate the data!
  
        fetch('api/members/post.php', {
          method:'POST',
          body: JSON.stringify(this.newMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.members=json;
          // TODO: test a result was returned!
          // HAYLEYS EDITthis.members=json;
          this.newMember = this.newMemberData();
        });
  
        console.log("Creating (POSTing)...!");
        console.log(this.newMember);
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
    
          fetch('api/certifications/post.php', {
            method:'POST',
            body: JSON.stringify(this.newCert),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.cert=json; //Maybe no zero
            this.newCert = this.newCertData();
          });
    
          console.log("Creating (POSTing)...!");
          console.log(this.newCert);
    
          
        },
      newCertData(){
          return{
            Certificate_Name:"",
            Exp_period:""
          }
        }  
        
    }

    
  })
  