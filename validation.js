function isEmpty(myVar)
{
    if(myVar === '')
    {
        return true;
    }
    else
    {
        return false;
    }
}

function Empty()
{
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var cNum = $("#cNum").val();
    var email = $("#email").val();
    var nic = $("#nic").val();
    var address = $("#address").val();
    var salary = $("#salary").val();

    var arr = [firstName, lastName, cNum, email, nic, address, salary ];
    console.log(firstName);
    var arr2 = ["FirstName", "LastName", "ContactNumber", "Email", "NIC", "Address", "Salary" ];
    var emptyIndex = [];
    var empty = [];
    var length = arr.length;
    for(let i = 0; i<length; i++)
    {
        if(isEmpty(arr[i]))
        {
            emptyIndex.push(i);
        }
    }

    for(let i = 0; i< emptyIndex.length; i++)
    {
        empty.push(arr2[emptyIndex[i]]);
    }

    console.log(empty);

    if(empty.length == 0)
    {
        return true;
    }
    else if(empty.length == 1)
    {
        alert(empty[0] + " field is empty!")
    }
    else
    {
        let allEmpty = '';
        for(var j = 0; j< empty.length; j++ )
        {
             allEmpty = allEmpty + empty[j] + "  "  ;
        }

        alert(allEmpty + " fields are empty!");
    }

}



const emailCheck =  () => {

    let email = $("#email").val();
    if(!email.includes("@") && email.includes(" "))
    {
        alert("missing @ symbol and there is a space in email field!");
        return false;
    }
    else if(!email.includes("@"))
    {
        alert("missing @ symbol in the email field!");
    }
    else if(email.includes(" "))
    {
        alert("There is a space in the email field");
    }
    else
    {
        return true;
    }
    
}

const stringCheck = () => { //string ekak apuwahama methana return wenne false;

   
    let contactNumber = $("#cNum").val();
    let numArr = contactNumber.split("");
    
    for(var i = 0; i< numArr.length; i++)
    {
        if(!parseInt(numArr[i]) && numArr[i] != "0" )
        {
            return false;
        }
    }

    
    return true;
}

const salStringCheck = () => { //string ekak apuwahama methana return wenne false;

   
    let salary = $("#salary").val();
    let numArr = salary.split("");
    
    for(var i = 0; i< numArr.length; i++)
    {
        if(!parseInt(numArr[i]) && numArr[i] != "0" )
        {
            return false;
        }
    }

    
    return true;
}

 const numLen = () => {

    let len = $("#cNum").val().length;
    if(len == 10)
    {
        return true;
    }
    else
    {
        return false;
    }

 }

const salaryCheck = () => {
    if(!salStringCheck())
    {
        alert("There are/is string/s in the salary field !")
    }
    else
    {
        return true;
    }

}

const numberCheck = () => {
    if(!stringCheck() && !numLen())
    {
        alert("There are/is string/s in the contact number field ! please enter 10 digit number to the contact number field!")
    }
    else if(!stringCheck())
    {
        alert("There are/is string/s in the contact number field !")
    }
    else if(!numLen())
    {
        alert("Please enter 10 digit number to the contact number field!");
    }
    else
    {
        return true;
    }
}

function confirm()
{
    if(Empty() && emailCheck() && numberCheck() && salaryCheck())
    {
        showContinue();
    }
}