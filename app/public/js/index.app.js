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
        },
      activeCert: null, // DELETE Madison 

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
        },
      // deleteMember(Member_ID){
      //    if(confirm("Are you sure you want to delete this member?")){
      //    $Member_ID = $_POST['Member_ID'];
      //    $request = $_POST['4'];
      //    $query_string = "delete from $Members where Member_ID='$Member_ID'";
      //    $result = mysql_query($result);
      //    return false;
      //  }
      // },
      // //  Delete API from https://makitweb.com/insert-update-delete-records-from-mysql-with-vue-js/
      //
      //  deleteCertification(id){
      //     if(confirm("Are you sure you want to delete this certification?")){
      //     $id = $_POST['Certification_ID'];
      //     $query_string = "delete from $Certifications where Certification_ID='$id'";
      //     $result = mysql_query($result);
      //     return false;
      //   }
      // }
      // updateRecord: function(index,Certification_ID){

      // // Read value from Textbox maybe this.cert instead
      //   var Certificate_Name = this.cert[index].Certificate_Name;
      //   var Exp_period = this.cert[index].Exp_period;

      //   if(Certificate_Name !=''){
      //     axios.post('api/certifcations/delete.php', {
      //       request: 3,
      //       Certification_ID: Certification_ID,
      //       Certificate_Name: Certificate_Name,
      //       Exp_period: Exp_period
      //     })
      //     .then(function (response) {
      //       alert(response.data);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      //   }
      // },
      // deleteRecord: function(Certification_ID){

      //   fetch('api/certifications/delete.php', {
      //     method:'POST',
      //     // body: JSON.stringify(this.cert),
      //     headers: {
      //       "Content-Type": "application/json; charset=utf-8"
      //     },
      //   })
      //   .then(function (response) {

      //     // Remove index from users
      //     app.cert.splice(index, 1);
      //     alert(response.data);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // },
      deleteCertification(evt) {//Certification - Hayley - post new certification form
        console.log(this.cert)
        fetch('api/certifications/delete.php', {
          method:'POST',
          body: JSON.stringify(this.certification_ID),
          //Certification_ID: this.cert.Certification_ID,
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          // this:cert = this.cert.filter((obj) => {
          //   return obj.id !== Certification_ID;
        })
        console.log("Deleting (POSTing)...!");
      },
     deleteMember(evt) {
        console.log(this.Member_ID)
        fetch('api/members/delete.php', {
          method:'POST',
          body: JSON.stringify(this.Member_ID),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
          
        })
        console.log("Deleting (POSTing)...!");
      }
        // .then( response => response.json() )
        // .then( json => {
        //   console.log("Returned from post:", json);
        //   // TODO: test a result was returned!
        //   this.cert=json; 
        //   //this.cert = this.fetchCert();
        // });
        // console.log("Deleting (POSTing)...!");
        // // console.log(this.cert);


      


    }
  })
