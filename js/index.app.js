var app = new Vue({
    el: '#firefighter',
    data: {
      memberList: [],//Member - Madison 
      visitList: [],
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
    },
    created() {
      fetch("api/members/")//Member - Madison 
      .then( response => response.json() )
      .then( json => {
        this.memberList = json;
  
        console.log(json)}
      );
      fetch("api/visits/")
      .then( response => response.json() )
      .then( json => {
        this.visitList = json;
  
        console.log(json)}
      );
      this.newMemberForm = this.newPtData();
    }
  })
  