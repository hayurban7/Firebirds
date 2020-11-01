var app = new Vue({
    el: '#firefighter',
    data: {
      members: [],
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

      cert:[],
      newCert:{
          Certificate_Name:"",
          Exp_period:""
        },
      details:[],
      newDetails:{
          Member_ID:"",
          Certification_ID:"",
          Exp_Date:""
        },
      activeCert:null,
      activeMember:null,
      certMem:[],
      certDetails:[],
      select:{
        certification:''
      },
      choose:{
        member:''
      }

    },
    created() {

      this.fetchCert();
      this.fetchMember();
      this.fetchCertMember();
      this.fetchCertDetails();
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
        fetchCertMember(){
          fetch('api/certifications/memCert.php')
          .then(response => response.json())
          .then(json => {
              this.certMem=json;
              console.log(this.certMem);
          });
        },
        fetchCertDetails(){
          fetch('api/certifications/certDetails.php')
          .then(response => response.json())
          .then(json => {
              this.certDetails=json;
              console.log(this.certDetails);
          });
        },
        detailsCertification(cid) {

          fetch('api/certifications/certDetails.php', {
            method:'POST',
            body: JSON.stringify({
              "Certification_ID": cid
            }),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.activeCert=json; //Maybe no zero
            //this.newCert = this.newCertData();
          });

          console.log("Updating (POSTing)...!");
          console.log(this.certDetails);


        },

      handleNewMemberForm() {

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
      handleDetailsForm() {

          // TODO: Validate the data!


          fetch('api/members/detailsPost.php', {
            method:'POST',
            body: JSON.stringify(this.newDetails),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.details=json; //Maybe no zero
            this.newDetails = this.newDetailsData();
          });

          console.log("Creating (POSTing)...!");
          console.log(this.newDetails);


        },
      newDetailsData(){
          return{
            Member_ID:"",
            Certification_ID:"",
            Exp_Date:""
          }
        },
      newCertData(){
          return{
            Certificate_Name:"",
            Exp_period:""
          }
        },

        handleCertificationForm() {

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
      handleCertificationEdit() {

          fetch('api/certifications/update.php', {
            method:'POST',
            body: JSON.stringify(this.activeCert),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.activeCert=json; 
          });

          console.log("Updating (POSTing)...!");
          console.log(this.activeCert);


        },

        handleMemberEdit() {

            fetch('api/members/update.php', {
              method:'POST',
              body: JSON.stringify(this.activeMember),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.activeMember=json; 
              });

              console.log("Updating (POSTing)...!");
              console.log(this.activeMember);


            },
            
            
      
      deleteCertification(cid) {
        console.log(cid);
        fetch('api/certifications/delete.php', {
          method:'POST',
          body: JSON.stringify({
            "Certification_ID": cid
          }),
          //Certification_ID: this.cert.Certification_ID,
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
          
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.cert=json; //Maybe no zero
        });
        console.log("Deleting (POSTing)...!");
      },
     deleteMember(mid) {
      console.log(mid);
      fetch('api/members/delete.php', {
        method:'POST',
        body: JSON.stringify({
          "Member_ID": mid
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }

      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.members=json; 
      });
      console.log("Deleting (POSTing)...!");
    },

    }
  })
