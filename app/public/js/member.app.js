var app = new Vue({
    el: '#memberProfile',
    data: {
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
          IsActive:"",
    },
    created() {
        this.fetchUser();
    },
    methods: {
        fetchUser: function() {
            fetch('api/members/post.php')
            .then(response => response.json())
            .then(data => {
                var userData = data.results[0];
                console.log(Members);
                this.memberID = Members.Member_ID;
                this.memberFirst = Members.First_Name;
                this.memberLast = Members.Last_Name;
                this.memberTitle = Members.Title;
                this.memberGender = Members.Gender;
                this.userDate = Members.dob.date;
                this.userLocation = userData.location.country;
            }
            );
        },
    }
})