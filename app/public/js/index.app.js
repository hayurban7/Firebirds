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
      handleNewMemberForm( evt ) {//Member - Madison - post new member form 
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
            this.newCertForm = this.newCertData();
          });
    
          console.log("Creating (POSTing)...!");
          console.log(this.newCertificationForm);
    
          
        },
        handleCertificationForm( evt ) { //idk if we need this
          console.log("Form submitted!");
    
          this.CertificationForm.member = this.activeMember; //CHECK THIS
          console.log(this.CertificationForm);
    
        },
        // add and delete rows functions from https://www.tutorialsplane.com/vue-js-delete-table-row/
        addTableRow: function () { 
          this.counter++;
          this.tableRows.push("Table Row "+this.counter);
          
        },
        deleteTableRow: function (idx) { 
          this.counter--;
          this.tableRows.splice(idx, 1);      
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



      
    
    }
    
  })
  