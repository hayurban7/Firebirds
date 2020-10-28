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
      activeCert:null,

    },
    created() {

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
            this.activeCert=json; //Maybe no zero
            //this.newCert = this.newCertData();
          });

          console.log("Updating (POSTing)...!");
          console.log(this.activeCert);


        },

      deleteCertification(cid) {//Certification - Hayley - post new certification form
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
          // this:cert = this.cert.filter((obj) => {
          //   return obj.id !== Certification_ID;
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
              this.activeMember=json; //Maybe no zero
              //this.newCert = this.newCertData();
            });

            console.log("Updating (POSTing)...!");
            console.log(this.activeMember);


          }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.members=json; //Maybe no zero
      });
      console.log("Deleting (POSTing)...!");
    },

    }
  })
