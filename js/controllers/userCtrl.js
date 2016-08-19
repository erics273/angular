app.controller("userCtrl", function($scope){

    $scope.users = [
        {
            firstName: "Eric",
            lastName:  "Schwartz",
            emailAddress: "erics273@gmail.com",
            department: "IT Operations",
            weeklySalary: 2000,
            startDate: new Date('September 30, 2015')
        },
        {
            firstName: "Bob",
            lastName:  "Smith",
            emailAddress: "bsmith@fakedomain.com",
            department: "Business Analyst",
            weeklySalary: 1000,
            startDate: new Date('December 10, 2014')
        },
        {
            firstName: "Bary",
            lastName:  "McCaskill",
            emailAddress: "bmccaskill@fakedomain.com",
            department: "Aconting",
            weeklySalary: 2000,
            startDate: new Date('January 5, 2012')
        }
    ]

})