function validateForm(){
    var Date = document.getElementById("Date").value;
    var Id = document.getElementById("Id").value;
    var Name = document.getElementById("Name").value;
    var Department = document.getElementById("Department").value;
    var Password = document.getElementById("password").value;
    var Attendance = document.getElementById("Attendance").value;
    

    if(Date==""){
        alert("Date is required");
        return false;

    }

    if(Id==""){
        alert("Id is required");
        return false;

    }

    if(Name==""){
        alert("Name is required");
        return false;

    }

    if(Department==""){
        alert("Department is required");
        return false;
    }

    if(Password==""){
        alert("Password is required");
        return false;
    }

    if(Attendance==""){
        alert("Attendance is required");
        return false;
    }

    return true;
}
// function to show data

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];

    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html ="";

    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.Date + "</td>";
        html += "<td>" + element.Id + "</td>";
        html += "<td>" + element.Name + "</td>";
        html += "<td>" + element.Department + "</td>";
        html += "<td>" + element.Password + "</td>";
        html += "<td>" + element.Attendance + "</td>";
        html += 
        '<td><button onclick="deleteData(' + 
        index + 
        ')" class="normal">Delete</button><button onclick="updateData(' + 
        index + 
        ')" class="normal">EDit</button></td>';
        html +="</tr>";

    });

    document.querySelector("#curdTable tbody").innerHTML = html;

}

//loads all data when document or page loaded
document onload = showData();


// function to add data
function AddData(){
    // if form is validate
    if(validateForm() == true){
        var Date = document.getElementById("Date").value;
        var Id = document.getElementById("Id").value;
        var Name = document.getElementById("Name").value;
        var Department = document.getElementById("Department").value;
        var Password = document.getElementById("Password").value;
        var Attendance = document.getElementById("Attendance").value;
        

        var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];

    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
        Date : Date,  
        Id : Id, 
        Name : Name, 
        Department : Department,  
        password : password,
        Attendance : Attendance,  
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("date").value = "";
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("password").value = "";
    document.getElementById("attendance").value = "";

    }
}

// function to delete data from local storage

